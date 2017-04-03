import React from 'react';
import TodosList from './todos-list';
import CreateTodo from './create-todo';

const todos = [
	{
		task: "lear react",
		isCompleted: false
	},
	{
		task: "eat lunch",
		isCompleted: true
	},
];

export default class App extends React.Component {
	//khởi tạo state 'todos' tương đương getInitialState(ES5)
	//tại sao lại truyền props vô hàm???
	constructor(props) {
		super(props);

		this.state = {
			todos
		};
	}
	//truyền mảng todo vào component 'todolist'
	//TodosList có props là todos = 'mảng todos'
	render() {
		return(
			<div>
				<h1>React Todos App</h1>
				<CreateTodo createTask={this.createTask.bind(this)} />
				<TodosList
					todos={this.state.todos}
					saveTask={this.saveTask.bind(this)}
					deleteTask={this.deleteTask.bind(this)}				
				/>
			</div>
		);
	}
	createTask(task) {
		this.state.todos.push({
			task: task,
			isCompleted: false
		});
		this.setState({todos:this.state.todos});
	}

	saveTask(oldTask, newTask) {
		//tìm 'task' trong mảng 'todos', điều kiện 'task' đó phải === oldTask, sau đó lưu vào 'foundTodo'
		const foundTodo = _.find(this.state.todos, todo => todo.task === oldTask);

		foundTodo.task = newTask;
		this.setState({todos: this.state.todos});
	}

	deleteTask(taskToDelete) {
		_.remove(this.state.todos, todo => todo.task === taskToDelete);
        this.setState({ todos: this.state.todos });
	}
}