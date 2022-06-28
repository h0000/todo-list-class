import React from 'react'
import './App.css'
import Header from './components/header'
import TodoList from './components/TodoList'
import Footer from './components/footer'

export default class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      // 初始化
      todos: JSON.parse(localStorage.getItem('todos') ?? '[]')
    }
  }
  // 设置选中状态
  setTodosChecked = (todoIds, value) => {
    const unchangedTodos = []
    const changedTodos = []
    this.state.todos.map(item => {
      if (todoIds.includes(item.id)) {
        item.done = value
        changedTodos.push(item)
      } else {
        unchangedTodos.push(item)
      }
    })
    this.setState({ todos: unchangedTodos.concat(...changedTodos) },
      () => {
        localStorage.setItem('todos', JSON.stringify(this.state.todos))
      }
    )
  }

  /**
   * @description:根据ids删除todos
   * @param {[...todoId]} todoIds 
   */
  delTodosByIds = (todoIds) => {
    const newTodos = this.state.todos.filter(item => !todoIds.includes(item.id))
    this.setState({ todos: newTodos },
      () => {
        localStorage.setItem('todos', JSON.stringify(this.state.todos))
      }
    )
  }

  // 添加todo
  addTodo = (name) => {
    const newTodo = {
      name: name,
      done: false,
      id: new Date().getTime()
    }
    this.setState({ todos: [...this.state.todos, newTodo] },
      () => {
        localStorage.setItem('todos', JSON.stringify(this.state.todos))
      })
  }

  render () {
    return (
      <div className="App">
        <Header addTodo={this.addTodo}></Header>
        <div className='content'>
          <TodoList delTodosByIds={this.delTodosByIds} setTodosChecked={this.setTodosChecked} title='未完成' todos={this.state.todos.filter(item => item.done === false)}></TodoList>
          <TodoList delTodosByIds={this.delTodosByIds} setTodosChecked={this.setTodosChecked} title='已完成' todos={this.state.todos.filter(item => item.done === true)}></TodoList>
        </div>
        <Footer></Footer>
      </div>
    )
  }

}

