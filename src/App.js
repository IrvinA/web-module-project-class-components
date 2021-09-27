import React from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

const todo = []

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor() {
    super();
    this.state = {
      todo: todo
    }
  }


  render() {
    return (
      <div>
        <div>
          <h1>Here is Your ToDo List!</h1>
          <TodoList />
        </div>
        <TodoForm />
      </div>
    );
  }
}

export default App;
