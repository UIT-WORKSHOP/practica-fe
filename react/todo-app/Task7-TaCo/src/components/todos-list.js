import _ from 'lodash';
import React from 'react';
import TodosListHeader from './todos-list-header';
import TodosListItem from './todo-list-item';

export default class TodosList extends React.Component {
	renderItems() {
			//loại bỏ thuộc tính của 'todos' trong các props và giữ lại tất cả, lấy vào 2 hàm 'saveTask'
			// và 'deleteTask' (để thẻ <TodosListItem/> có thể chạy 2 hàm đó)
			const props = _.omit(this.props, 'todos');
			//key=index đánh dấu nhận dạng các phần tử trong mảng
			//todo đại diện cho các phần tử trong mảng
			//{...todo} tuong duong  task = {todo.task} iscomplete={todo.iscomplete}
			// {...todo} {...props} truyền props vào thẻ <TodosListItem />		
			return _.map(this.props.todos, (todo, index) => <TodosListItem key={index} {...todo} {...props}/>);			
	}

	render() {		
		return (
			<table>
				<TodosListHeader />
				<tbody>
					{this.renderItems()}
				</tbody>
			</table>
		);
	}
}