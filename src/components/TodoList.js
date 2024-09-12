// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Todo from './Todo';

const TodoList = props => {
    const handleClick = () => {
        props.handleClear();
    }

    return (
        <div className='app-list'>
            {props.todo.map(item => (
                <Todo key={item.id} item={item} handleToggle={props.handleToggle}/>
            ))}
            <button onClick={handleClick}>
                Clear Finished Tasks
            </button>
        </div>
    );
}

export default TodoList;