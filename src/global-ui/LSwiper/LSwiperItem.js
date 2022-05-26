import React, { Component } from 'react'

export default class LSwiperItem extends Component {
  render() {
    return (
      <div className='swiper-slide'>
        {this.props.children}
      </div>
    )
  }
}
