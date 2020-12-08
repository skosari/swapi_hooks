import React, { Component } from 'react'

export default class CounterClass extends Component{
  constructor(props){
    super(props)
    this.state = {
      count: 0
    }
    this.add = this.add.bind(this)
    this.sub = this.sub.bind(this)
  }

  add(){
    this.setState({
      count: this.state.count + 1
    })
  }

  sub(){
    this.setState({
      count: this.state.count - 1
    })
  }

  render(){
    return(
      <div>
        <h1>React Class</h1>
        <span style={{display: 'flex', justifyContent: 'center'}}>
        <button onClick={this.add}>ADD</button>
        <h1>{this.state.count}</h1>
        <button onClick={this.sub}>SUBTRACT</button>
        </span>
      </div>
    )
  }
}