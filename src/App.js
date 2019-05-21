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
          done: false
        },
        {
          id:2,
          title: "Hello, Redux!",
          desc: "Reduxは難しいです",
          done: false
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
      const countTodo = this.state.countTodo; 
      todos.push({
        id:countTodo,
        title:title,
        desc:desc,
        done:false,
        countTodo: this.state.countTodo
      });

      this.setState({ todos })
      this.setState({ countTodo: countTodo + 1})

      e.target.title.value = '';
      e.target.desc.value = '';
    }

    setTodoStatus(clickTodo) {
      let countDone = this.state.countDone;
      let level = this.state.level;
      let num = this.state.num;
      const todos = this.state.todos.slice();
      const todo = todos[clickTodo.index];
      todo.done = !todo.done;
      todos[clickTodo] = todo;
  
      if (todo.done) {
        countDone++;
      } else {
        countDone--;
      }
  
     while (countDone >= num) {
        level++;
        if (num === 0) {
          num += 2;
        } else {
        num += level;
        }
        console.log(countDone, num);
      }
      const nextLevel = num - countDone;
  
      this.setState({ todos });
      this.setState({ countDone });
      this.setState({ level });
      this.setState({ num });
      this.setState({ nextLevel });
    }

    setAllFiltering(clickTodo){
      const doneList = this.props.todos.filter((item) => (
        item.done == true
        ||  item.done == false
      ));
      this.setState({
        todos: doneList
      });
    }

    setDoneFiltering(clickTodo){
      const doneList = this.props.todos.filter((item) => (
        item.done == true
      ));
      this.setState({
        todos: doneList
      });
    }

    setUndoneFiltering(clickTodo){
      const unDoneList = this.props.todos.filter((item) => (
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
