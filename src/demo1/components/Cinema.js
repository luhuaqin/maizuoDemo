import React, { Component } from 'react'
import axios from 'axios'
import BetterScroll from 'better-scroll'

export default class Cinema extends Component {
  state = {
    cinemaList: [],
    lowPrice: '',
    distance: 0,
    searchValue: ''
  }
  constructor() {
    super()
    axios({
      url: "https://m.maizuo.com/gateway?cityId=110100&ticketFlag=1&k=6971770",
      method: "get",
      headers: {
        'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.0","e":"1653096841171377785044993","bc":"110100"}',
        'X-Host': 'mall.film-ticket.cinema.list'
      }
    }).then(res => {
      const optCinemaList = [ ...res.data.data.cinemas ]
      let backToNum = ''
      let frontToNum = ''
      optCinemaList.forEach(item => {
        frontToNum = item.lowPrice.toString().slice(0, 2)
        backToNum = item.lowPrice.toString().slice(2)
        this.setState({ lowPrice: frontToNum + '.' + backToNum })
        item.lowPrice = this.state.lowPrice

        this.setState({ distance: item.Distance.toFixed(2) }) 
        item.Distance = this.state.distance
      })
      this.setState({ cinemaList: optCinemaList })
      new BetterScroll('.container')
    })
  }

  // 非受控写法
  // handleInput = (event) => {
  //   const optCinemaList = [ ...this.state.cinemaList ]
  //   const actValueList = optCinemaList.filter(item => {
  //     return item.name.toUpperCase().includes(event.target.value.toUpperCase()) || 
  //            item.address.toUpperCase().includes(event.target.value.toUpperCase())
  //   })
  //   this.setState({ cinemaList: actValueList })
  // }
  // 受控写法
  getCinemaList() {
    return this.state.cinemaList.filter(item => {
      return item.name.toUpperCase().includes(this.state.searchValue.toUpperCase()) || 
             item.address.toUpperCase().includes(this.state.searchValue.toUpperCase())
    })
  }
  render() {
    return (
      <div>
        {/* <input onInput={ this.handleInput } 
               style={ 
                {
                  width: '80%', 
                  margin: '10px 10%', 
                  height: '30px', 
                  borderRadius: '5px'
                } 
              }
        /> */}
        <input onChange={ (event) => {
                  this.setState({
                    searchValue: event.target.value
                  })
               } } 
               style={ 
                {
                  width: '80%', 
                  margin: '10px 10%', 
                  height: '30px', 
                  borderRadius: '5px'
                } 
              }
        />
        <div className='container' 
             style={{
               height: 'calc(100% - 80px)',
               overflow: 'hidden'
             }}       
        >
          <ol>
            {/* {
              this.state.cinemaList.map(item => {
                return (
                  <li key={ item.cinemaId }>
                    <div className='topText'>
                      <span style={{ width: 'calc(100% - 100px)' }}>{ item.name }</span>
                      <span style={{ color: 'orange' }}>{ '￥' + item.lowPrice + ' 起' }</span>
                    </div>
                    <div className='bottomText'>
                      <span style={{ position: 'relative', width: 'calc(100% - 30%)', overflow: 'hidden' }}>{ item.address }</span>
                      <span>{ item.Distance + ' km' }</span>
                    </div>
                  </li>
                )
              })
            } */}
            {
              this.getCinemaList().map(item => {
                return (
                  <li key={ item.cinemaId }>
                    <div className='topText'>
                      <span style={{ width: 'calc(100% - 100px)' }}>{ item.name }</span>
                      <span style={{ color: 'orange' }}>{ '￥' + item.lowPrice + ' 起' }</span>
                    </div>
                    <div className='bottomText'>
                      <span style={{ position: 'relative', width: 'calc(100% - 30%)', overflow: 'hidden' }}>{ item.address }</span>
                      <span>{ item.Distance + ' km' }</span>
                    </div>
                  </li>
                )
              })
            }
          </ol>
        </div>
      </div>
    )
  }
}
