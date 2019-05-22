import React, {Component} from 'react';
import './css/todo.css';

class Todo extends Component {

    render(){
        const link = this.props.done ? '元に戻す' : '完了！';
        const importance = this.props.importance ? '重要でない' : '重要';
        const className = this.props.importance? 'importance' : 'not-importance';
        const todoDelete = '削除' ;
        return(
            <li className={className}>
                タスク名:<span>{this.props.title}</span>
                <a href="" onClick={(e) => { e.preventDefault(); this.props.setTodoStatus(this.props)}}>{link}</a>
                <a href="" onClick={(e) => { e.preventDefault(); this.props.setImportance(this.props)}}>{importance}</a>　　　　
                <a href="" onClick={(e) => { e.preventDefault(); this.props.deleteTodoState(this.props)}}>{todoDelete}</a><br/>
                詳細:<p>{this.props.desc}</p>
            </li>
        )
    }
}
export default Todo