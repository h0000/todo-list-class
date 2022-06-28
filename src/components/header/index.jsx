import React from "react";
import { Input } from "antd";
import Style from './index.module.css'


export default class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: ''
    }
  }

  // 监听输入框改变
  handleInputChange = (event) => {
    this.setState({ value: event.target.value })
  }

  // 监听回车事件
  handleEnter = (event) => {
    this.state.value.trim() !== '' && this.props.addTodo(this.state.value)
    this.setState({ value: '' })
  }

  render() {
    return (
      <div className={Style.header}>
        <div className={Style.title}>TODO LIST</div>
        <Input autoFocus size="large" placeholder="在此输入待办事项。" value={this.state.value} onChange={this.handleInputChange} onPressEnter={this.handleEnter} />
      </div>
    )
  }
}