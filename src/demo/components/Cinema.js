import React, { Component } from 'react'
import axios from 'axios'
import BetterScroll from 'better-scroll'

export default class Cinema extends Component {
  state = {
    cinemaList: [],
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
        item.lowPrice = frontToNum + '.' + backToNum

        item.Distance = item.Distance.toFixed(2)
      })
      this.setState({ cinemaList: optCinemaList })
      new BetterScroll('.container')
    })
  }

  getCinemaList() {
    return this.state.cinemaList.filter(item => {
      return item.name.toUpperCase().includes(this.state.searchValue.toUpperCase()) || 
             item.address.toUpperCase().includes(this.state.searchValue.toUpperCase())
    })
  }
  render() {
    return (
      <div>
        <div  style={{ 
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '50px'
       }}>
          <input onChange={ (event) => {
                    this.setState({
                      searchValue: event.target.value
                    })
                } } 
                style={ 
                  {
                    width: '80%', 
                    height: '30px', 
                    lineHeight: '30px',
                    borderRadius: '5px',
                  } 
                }
          />
        </div>
        
        <div className='container' 
             style={{
               height: window.innerHeight - 130
             }}
        >
          <ol>
            {
              this.getCinemaList().map(item => {
                return (
                  <li key={ item.cinemaId }>
                    <div className='topText'>
                      <span style={{ width: 'calc(100% - 100px)' }}>{ item.name }</span>
                      <span style={{ color: 'orange' }}>{ '￥' + item.lowPrice + ' 起' }</span>
                    </div>
                    <div className='bottomText'>
                      <span style={{ width: 'calc(100% - 100px)', overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis' }}>{ item.address }</span>
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
