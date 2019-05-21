import React, { Component } from 'react'
import './css/form.css'

class Form extends Component{
    render(){
        return (
            <div>
                <form className="form" name="todoform" onSubmit={this.props.onSubmit}>
                    <input name="title" type="text" placeholder="タイトルを入力してください！" /><br />
                    <textarea name="desc" placeholder="詳細を入力してください！" /><br />
                    <button type="submit">タスクを作成</button>
                </form>
            </div>
        )
    }
}

export default Form
