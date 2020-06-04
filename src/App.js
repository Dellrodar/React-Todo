import React from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import './components/Todo.css';

// you will need a place to store your state in this component.
// design `App` to be the parent component of your application.
// this component is going to take care of state, and any change handlers you need to work with your state

const todos = [
  {
    task: 'Make a todo list',
    id: 1591152063489,
    completed: false,
  },
  {
    task: 'Make the todo list work',
    id: 1591152119309,
    completed: false,
  },
];

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos,
    };
  }

  toggleTodo = (todoId) => {
    console.log(todoId);

    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todoId === todo.id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      }),
    });
  };

  addTodo = (e, todo) => {
    e.preventDefault();
    const newTodo = {
      task: todo,
      id: Date.now(),
      completed: false,
    };
    this.setState({
      todos: [...this.state.todos, newTodo],
    });
  };

  clearCompleted = (e) => {
    e.preventDefault();
    this.setState({
      todos: this.state.todos.filter((todo) => !todo.completed),
    });
  };

  render() {
    return (
      <div className='App'>
        <div className='Header'>
          <h1>Our Todos</h1>
          <TodoForm addTodo={this.addTodo} />
        </div>
        <TodoList
          clearCompleted={this.clearCompleted}
          todos={this.state.todos}
          toggleTodo={this.toggleTodo}
        />
      </div>
    );
  }
}

export default App;
