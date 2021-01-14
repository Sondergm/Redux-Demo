import React, { Component } from 'react'
import store from '../../redux/store'
import * as actions from '../../redux/count_actionCreator'

const buttonStyle = {
  marginLeft: '10px'
}

export default class Count extends Component {

  // 监听redux数据变化，有变化时调用setState，重新渲染页面
  componentDidMount() {
    store.subscribe(()=>{
      this.setState({})
    })
  }

  // 加
  increment = () => {
    const { value } = this.selectedValue
    store.dispatch(actions.increment(value*1))
  }

  // 减
  decrement = () => {
    const { value } = this.selectedValue
    store.dispatch(actions.decrement(value*1))
  }

  // 当前和为奇数时加
  incrementIfOdd = () => {
    const { value } = this.selectedValue
    const sum = store.getState()
    if (sum % 2 !== 0) store.dispatch(actions.increment(value*1))
  }

  // 异步加
  incrementAsync = () => {
    const { value } = this.selectedValue
    setTimeout(()=>store.dispatch(actions.increment(value*1)),1000)
  }

  render() {
    return (
      <div>
        <h2>当前总和为：{store.getState()}</h2>
        <select name="count" id="count" ref={ref => this.selectedValue = ref} >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        <button onClick={this.increment} style={buttonStyle} >+</button>
        <button onClick={this.decrement} style={buttonStyle} >-</button>
        <button onClick={this.incrementIfOdd} style={buttonStyle} >+ if sum is odd</button>
        <button onClick={this.incrementAsync} style={buttonStyle} >+ async</button>
      </div>
    )
  }
}