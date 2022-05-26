import React, { Component } from 'react'

export default class DetailDiv extends Component {
  render() {
    const { globalContext } = this.props
    return (
      <globalContext.Consumer>
        {
          (value) => <div className='fixedDetailDiv'>{value.filmDetail}</div>
        }
      </globalContext.Consumer>
      
    )
  }
}
