import React from 'react';
import Todo from './Todo.js';

const TodoList = ({todos, remove}) => {
    const list = todos.map((todo) => {
        return (<Todo todo={todo} key={todo.id} remove={remove}/>);
    });
    return (<ol start='1' type='1'>{list}</ol>);
  }


export default TodoList;
