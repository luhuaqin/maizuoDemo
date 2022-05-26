import React, { Component } from 'react'

class RectItem extends Component {
  shouldComponentUpdate(nextProps) {
    if(nextProps.index === nextProps.currentIndex || this.props.index === this.props.currentIndex) {
      return true
    }
    return false
  }
  render() {
    return (
      <div style={{ 
            width: '100px',
            height: '100px',
            border: this.props.index === this.props.currentIndex ? '1px solid red' : '1px solid gray',
            float: 'left',
            margin: '5px' 
      }}>
      </div>
    )
  }
}

export default class lifeCycle extends Component {
  state = {
    rectList: ['00', '01', '02', '03', '04', '05'],
    currentIndex: 0
  }
  render() {
    return (
      <div>
        <div>
          <input type='number' style={{overflow: 'hidden'}} onChange={(event) => {
            this.setState({ currentIndex: Number(event.target.value) })
          }} value={this.state.currentIndex} />
        </div>
        {
          this.state.rectList.map((item, index) => {
            return <RectItem key={ item } index={index} currentIndex={this.state.currentIndex}>{ item }</RectItem>
          })
        }
      </div>
    )
  }
}
