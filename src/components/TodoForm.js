import React from 'react';

class TodoForm extends React.Component {
	// Constructor with state
	constructor() {
		super();
		this.state = {
			todo: '',
		};
	}
	handleChanges = (e) => {
		console.log(e.target.value);
		this.setState({ todo: e.target.value });
		// update state with each keystroke
	};

	// class property to submit form
	submitTodo = (e) => {
		e.preventDefault();
		this.props.addTodo(e, this.state.todo);
	};

	render() {
		return (
			<form onSubmit={this.submitTodo}>
				{/* This is an uncontrolled component 😬 We want it to be controlled by state */}
				<input
					type='text'
					value={this.state.todo}
					name='todo'
					onChange={this.handleChanges}
				/>
				<button>Add</button>
			</form>
		);
	}
}

export default TodoForm;
