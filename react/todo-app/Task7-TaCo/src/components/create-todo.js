import React from 'react';


export default class CreateTodo extends React.Component {	

	render() {		
		//ref dung de tham chieu den the input
		return (
			<form onSubmit={this.handleCreate.bind(this)}>				
				<input type="text" placeholder="Enter whatever you want..." ref="CreateInput"/>
				<button>Add</button>
			</form>
		);
	}
	//preventDefault ngan khong cho refresh lai trang
	//ý nghĩa của 'this.props.createTask(this.refs.CreateInput.value)' ???
	handleCreate(event){
		event.preventDefault();

		this.props.createTask(this.refs.CreateInput.value);
		this.refs.CreateInput.value = '';
	}

}