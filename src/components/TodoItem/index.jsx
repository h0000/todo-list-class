import React from "react";
import { Checkbox, Button } from 'antd'
import { DeleteOutlined } from '@ant-design/icons'
import Style from './index.module.css'

export default class TodoItem extends React.Component {
  constructor(props) {
    super(props)
  }

  // 监听选中状态改变事件
  handleCheckChange = (event) => {
    this.props.setCheckedStatus(this.props.todo.id, event.target.checked)
  }

  // 监听删除按钮点击
  handleDelBtnClick = () => {
    this.props.delTodo(this.props.todo.id)
  }

  render() {
    return (
      <li className={Style.todoItem}>
        <Checkbox onChange={this.handleCheckChange} checked={this.props.todo.done} />
        <span title={this.props.todo.name} className={Style.todoName}>{this.props.todo.name}</span>
        <Button type="text" danger icon={<DeleteOutlined></DeleteOutlined>} shape="circle" onClick={this.handleDelBtnClick}></Button>
      </li>
    )
  }
}