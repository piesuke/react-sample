import React, {Component} from 'react';
import Todo from './Todo';
import './css/todoList.css';

class TodoList extends Component{

    render(){
        
        
    const todos = [];
    for (var i = 0; i < this.props.todos.length; i++) {
      todos.push(
        <Todo
          key={i}
          index={i}
          countTodo={this.props.todos[i].countTodo}
          title={this.props.todos[i].title}
          desc={this.props.todos[i].desc}
          done={this.props.todos[i].done}
          importance={this.props.todos[i].importance}
          setTodoStatus={this.props.setTodoStatus}
          setImportance={this.props.setImportance}
          deleteTodoState={this.props.deleteTodoState}
        />
      );
    }

    return(
        <div>
            <span>
                <a className="filter" href="" onClick={(e) => { e.preventDefault(); this.props.setAllFiltering(this.props)}}>全てのタスク</a>
                <a className="filter" href="" onClick={(e) => { e.preventDefault(); this.props.setDoneFiltering(this.props)}}>完了一覧</a>
                <a className="filter" href="" onClick={(e) => { e.preventDefault(); this.props.setUndoneFiltering(this.props)}}>未完了一覧</a>　　　　
            </span>
            <ul>
                {todos}
            </ul>
        </div>
    );
    }
}

export default TodoList