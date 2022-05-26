import React, { Component } from 'react'

export default class Navbar extends Component {
  render() {
    return (
      <div style={{ backgroundColor: 'red', textAlign: 'center' }}>
        <button style={{ float: 'left' }}>back</button>
        <span>卖座电影</span>
        <button style={{ float: 'right' }}
                onClick={ () => this.props.nvEvent() }>
          center
        </button>
      </div>
    )
  }
}
