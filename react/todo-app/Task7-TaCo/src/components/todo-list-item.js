import React from 'react';


export default class TodosListItem extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			isEditing: false
		};
	}

	renderTaskSection(){
		//task = this.props.task
		//isCompleted = this.props.isCompleted
		const {task, isCompleted} = this.props;
		const taskStyle = {	
			cursor: 'pointer'
		};

		//nếu nhấn vào nút 'Edit' xuất ra form để nhập giá trị mới
		// nội dung input hiện lên gồm 'task' nhờ vào 'defaultValue'
		if(this.state.isEditing) {
			return (
				<td>
					<form onSubmit={this.onSaveClick.bind(this)}>
						<input type="text" defaultValue={task} ref="editInput"/>
					</form>
				</td>
			);
		}

		return(
			<td style={taskStyle}>{task}</td>
		);
	}

	ActionsOnEditing(){
		if(this.state.isEditing)
		{
			return (
				<td>
					<button onClick={this.onSaveClick.bind(this)}>Save</button>
					<button onClick={this.onCancelClick.bind(this)}>Cancel</button>
				</td>
			);
		}
		return (
				<td>
					<button onClick={this.onEditClick.bind(this)}>Edit</button>
					<button onClick={this.props.deleteTask.bind(this, this.props.task)} >Delete</button>
				</td>
		);
	}

	render() {
		return(
			<tr>
				{this.renderTaskSection()}									
				{this.ActionsOnEditing()}
				
			</tr>			
		);
	}

	onEditClick(){
		this.setState({isEditing: true});
	}
	onCancelClick(){
		this.setState({isEditing: false});
	}

	onSaveClick(event) {
        event.preventDefault();

        const oldTask = this.props.task;
        const newTask = this.refs.editInput.value;
        this.props.saveTask(oldTask, newTask);
        this.setState({ isEditing: false });
    }
}
