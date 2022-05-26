import React, { Component } from "react";
import '../css/index.css'

export default class App extends Component {
  // state = {
  //   isShouCang: true
  // }
  constructor() {
    super()
    this.state = {
      isShouCang: false
    }
  }
  render() {
    return (
      <div>
        <button className={ this.state.isShouCang ? 'btn-yellow' : '' } onClick={ () => {
          this.setState({ isShouCang: !this.state.isShouCang })
        } }>
          { this.state.isShouCang ? '取消收藏' : '收藏' }
        </button>
      </div>
    )
  }
}
