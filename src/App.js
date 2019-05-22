import React, { Component } from 'react';
import TodoList from './TodoList';
import './css/App.css';
import Form from './Form'

class App extends Component {

  constructor(){
    super()
    const todos = [
        {
          id:1,
          title: "Hello, React!",
          desc: "React始めました",
          done: false,
          importance: true
        },
        {
          id:2,
          title: "Hello, Redux!",
          desc: "Reduxは難しいです",
          done: false,
          importance: false
        },
      ]
      this.state = {
        todos: todos,
        countTodo: todos.length + 1,
      }
    }
    handleSubmit(e){
      e.preventDefault();
      const title = e.target.title.value;
      const desc = e.target.desc.value;
      const todos = this.state.todos.slice();
      todos.push({
        title:title,
        desc:desc,
        done:false,
        importance:false,
      });

      this.setState({ todos })

      e.target.title.value = '';
      e.target.desc.value = '';
    }

    setTodoStatus(clickTodo) {
      const todos = this.state.todos.slice();
      const todo = todos[clickTodo.index];
      todo.done = !todo.done;
      todos[clickTodo] = todo;
    
      this.setState({ todos });
    }

    setImportance(clickTodo) {
      const todos = this.state.todos.slice();
      const todo = todos[clickTodo.index];
      todo.importance = !todo.importance;
      todos[clickTodo] = todo;
    
      this.setState({ todos });
    }


    setAllFiltering(clickTodo){
      const doneList = this.state.todos.filter((item) => (
        item.done == true
        ||  item.done == false
      ));
      this.setState({
        todos: doneList
      });
    }

    setDoneFiltering(clickTodo){
      const doneList = this.state.todos.filter((item) => (
        item.done == true
      ));
      this.setState({
        todos: doneList
      });
    }

    setUndoneFiltering(clickTodo){
      const unDoneList = this.state.todos.filter((item) => (
        item.done == false
      ));
      this.setState({
        todos: unDoneList
      });
    }

    deleteTodoState(clickTodo) {
      const todos = this.state.todos.slice();
      todos.splice(clickTodo.index, 1);
      this.setState({ todos });
    }



    
  render(){
    return(
      <div className="app">
        <h1>todoアプリ</h1>
        <TodoList
        todos={this.state.todos}
        setTodoStatus={this.setTodoStatus.bind(this)}
        setImportance={this.setImportance.bind(this)}
        deleteTodoState={this.deleteTodoState.bind(this)}
        setAllFiltering={this.setAllFiltering.bind(this)} 
        setDoneFiltering={this.setDoneFiltering.bind(this)} 
        setUndoneFiltering={this.setUndoneFiltering.bind(this)}/>               
        <Form onSubmit={this.handleSubmit.bind(this)}/>
      </div>
    );
  }
}

export default App;
