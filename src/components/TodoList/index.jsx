/*
 * @Author: root 1433729587@qq.com
 * @Date: 2022-06-20 13:54:20
 * @LastEditors: root 1433729587@qq.com
 * @LastEditTime: 2022-06-20 17:13:46
 * @FilePath: \demo\todo-list-class\src\components\TodoList\index.jsx
 * @Description: todo-list
 */
import React from "react";
import TodoItem from "../TodoItem";
import { Button } from "antd";
import { DeleteOutlined, RetweetOutlined } from "@ant-design/icons";
import Style from './index.module.css'

export default class TodoList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: false
    }
  }

  // 监听头部全部取反点击
  handleReverseClick = () => {
    const ids = this.props.todos.map(item => item.id)
    if (this.props.todos.length !== 0) {
      this.props.setTodosChecked(ids, !this.props.todos[0].done)
    }
  }

  // 监听清除按钮点击
  handleCleanClick = () => {
    const ids = this.props.todos.map(item => item.id)
    if (this.props.todos.length !== 0) {
      this.props.delTodosByIds(ids)
    }
  }

  render() {
    return (
      <ul className={Style.todoList}>
        <li className={Style.listHeader}>
          <div className={Style.title}>{this.props.title}({this.props.todos?.length ?? 0})</div>
          <div className={Style.action}>
            <Button title="取反" type="primary" icon={<RetweetOutlined />} shape="circle" onClick={this.handleReverseClick}></Button>
            <Button title="清除" type="primary" danger icon={<DeleteOutlined />} shape="circle" onClick={this.handleCleanClick}></Button>
          </div>
        </li>
        {
          this.props.todos?.map(item =>
            <TodoItem
              setCheckedStatus={(id, value) => { this.props.setTodosChecked([id], value) }}
              delTodo={id => this.props.delTodosByIds([id])}
              todo={item}
              key={item.id}>
            </TodoItem>)
        }
      </ul >
    )
  }
}