import React, { Component } from 'react'
import Swiper, { Pagination } from 'swiper'
import '/node_modules/swiper/swiper-bundle.min.css'
Swiper.use(Pagination)

export default class LSwiper extends Component {

  componentDidUpdate(prevProps, prevState) {
    new Swiper('.swiper', {
      pagination:{ 
        el: '.swiper-pagination'
      },
      loop: this.props.loop
    })
  }

  render() {
    return (
      <div className='swiper'>
        <div className='swiper-wrapper'>
          {this.props.children}
        </div>

        <div className="swiper-pagination"></div>
      </div>
    )
  }
}
