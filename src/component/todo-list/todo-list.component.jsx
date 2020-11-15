import React from "react";
import {Todo} from '../todo/todo.component';
import './todo-list.style.css';

export const TodoList = (props) => {
    const todos = props.tasks.map((todo, index) => {
        return <Todo content={todo.content} title={todo.title} key={index} id={index} onDelete={props.onDelete} />
    })
    return (
        <div className='list-wrapper'>
            {todos}
        </div>
    );
}
