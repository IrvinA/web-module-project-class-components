import React from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';


const todo = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
];


class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor() {
    super();
    this.state = {
      todo:todo
    }
  }
  
  handleToggle = (id) => {
    this.setState({
      ...this.state,
      todo: this.state.todo.map(item => {
        if (item.id === id) {
          return ({
            ...item,
            completed: !item.completed
          });
        } else {
          return item;
        }
      })
    });
  }

  handleAddTask = (task) => {
    const newTask = {
      task: task,
      id: Date.now(),
      completed: false
    };
    this.setState({
      ...this.state,
      todo: [...this.state.todo, newTask]
    });
  }

  handleClear = () => {
    this.setState({
      ...this.state,
      todo: this.state.todo.filter(item => {
        return(!item.completed);
      })
    })
  }

  render() {
    return (
      <section className='app-container'>
        <div className='app-header'>
          <h1>Here is Your ToDo List!</h1>
          <TodoList handleToggle={this.handleToggle} todo={this.state.todo} handleClear={this.handleClear}/>
        </div>
        <TodoForm handleAddTask={this.handleAddTask}/>
      </section>
    );
  }
}

export default App;
