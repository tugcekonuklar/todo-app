import React from 'react'
import './App.css';


import { AppWrapper } from './component/app-wrapper/app-warpper.component'
import { SubmitForm } from './component/submit-form/submit-form.component'
import { TodoList } from './component/todo-list/todo-list.component'
import { Board } from './component/board/board.component'

class App extends React.Component {

  state = {
    tasks: []
  };

  handleSubmit = task => {
    fetch("https://frauenloop-todo-service.herokuapp.com/api/todos", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(task)
    })
      .then(response => response.json())
      .then(task => {
        this.setState({ tasks: [...this.state.tasks, task] });
      });
  };

  handleDelete = (index) => {
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
  };

  handleComplete = index => {
    debugger;
    const newArr = [...this.state.tasks];
    const task = newArr[index];
    task.status = "COMPLETED";
    fetch("https://frauenloop-todo-service.herokuapp.com/api/todos/" + task.id + "/complete", {
      method: 'PATCH'
    })
      .then(response => response.json())
      .then(todo => {
        newArr[index] = todo
        this.setState({ tasks: newArr });
      });
  };

  handleActivate = index => {
    const newArr = [...this.state.tasks];
    const task = newArr[index];
    task.status = "ACTIVATED";
    fetch("https://frauenloop-todo-service.herokuapp.com/api/todos/" + task.id + "/activate", {
      method: 'PATCH'
    })
      .then(response => response.json())
      .then(todo => {
        newArr[index] = todo
        this.setState({ tasks: newArr });
      });
  };

  handleUpdate = (index, title, content) => {
    const newArr = [...this.state.tasks];
    const task = newArr[index];
    task.title = title;
    task.content = content;
    fetch("https://frauenloop-todo-service.herokuapp.com/api/todos/" + task.id, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(task)
    })
      .then(response => response.json())
      .then(todo => {
        newArr[index] = todo
        this.setState({ tasks: newArr });
      });
  }

  componentDidMount() {
    fetch("https://frauenloop-todo-service.herokuapp.com/api/todos")
      .then(response => response.json())
      .then(todos => this.setState({ tasks: todos }));
  }

  render() {
    const { tasks } = this.state;
    return (
      <AppWrapper>
        <div className="column is-narrow is-4">
          <div className="box">
            <Board numTodos={tasks.length}></Board>
            <SubmitForm onFormSubmit={this.handleSubmit} />
          </div>
        </div>
        <div className="column is-8">
          <div className="box list-wrapper-container">
            <TodoList tasks={tasks}
              onDelete={this.handleDelete}
              onComplete={this.handleComplete}
              onActivate={this.handleActivate}
              onUpdate={this.handleUpdate}
            />
          </div>
        </div>
      </AppWrapper>);
  }
}

export default App;
