import React from 'react'
import './App.css';


import { AppWrapper } from './component/app-wrapper/app-warpper.component'
import { Header } from './component/header/header.component'
import { SubmitForm } from './component/submit-form/submit-form.component'
import { TodoList } from './component/todo-list/todo-list.component'


class App extends React.Component {

  state = {
    tasks: []
  };

  handleSubmit = task => {
    fetch("https://frauenloop-todo-service.herokuapp.com/api/todos", {
      method: 'POST',
      headers:{
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(task)
    })
      .then(response => response.json())
      .then(task => {
        this.setState({ tasks: [...this.state.tasks, task] });
      });
  }

  handleDelete = (index) => {
    debugger;
    const newArr = [...this.state.tasks];
    const id = newArr[index].id;
    fetch("https://frauenloop-todo-service.herokuapp.com/api/todos/" + id, {
      method: 'DELETE'
    })
      .then(response => response.text())
      .then(todos => {
        newArr.splice(index, 1);
        this.setState({ tasks: newArr });
      });
  }

  componentDidMount() {
    fetch("https://frauenloop-todo-service.herokuapp.com/api/todos")
      .then(response => response.json())
      .then(todos => {
        console.log(todos);
        this.setState({ tasks: todos })
      });
  }

  render() {
    const { tasks } = this.state;
    return (
      <AppWrapper>
        <Header numTodos={tasks.length} />
        <SubmitForm onFormSubmit={this.handleSubmit} />
        <TodoList tasks={tasks} onDelete={this.handleDelete} />
      </AppWrapper>);
  }
}

export default App;
