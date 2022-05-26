import React, { Component } from 'react'
import axios from 'axios'
import '../css/index.css'
import FilmItem from './subComponents/filmItem'
import LSwiper from '../../global-ui/LSwiper/LSwiper'
import LSwiperItem from '../../global-ui/LSwiper/LSwiperItem'
// import DetailDiv from './DetailDiv'
// import container from '../../utils/publishAndSubscribe'

const globalContext = React.createContext()


const headerObj = {
  'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.0","e":"1653096841171377785044993","bc":"110100"}',
  'X-Host': 'mall.film-ticket.film.list'
}

export default class film extends Component {
  state = {
    filmList: [],
    filmDetail: '',
    currentTab: 1,
    bannerList: []
  }

  componentDidMount() { 
    this.setState({ currentTab: 1 })
    axios({
      url: 'https://m.maizuo.com/gateway?cityId=110100&k=9138870',
      headers: {
        'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.0","e":"1653096841171377785044993","bc":"110100"}',
        'X-Host': 'mall.cfg.film-float.banner'
      }
    }).then(res => {
      const list = []
      list.push(res.data.data)
      this.setState({ bannerList: list })
    })
    if(this.state.currentTab === 1) {
      axios({
        url: "https://m.maizuo.com/gateway?cityId=110100&pageNum=1&pageSize=10&type=1&k=4669658",
        method: "get",
        headers: headerObj
      }).then(res => {
        this.setState({ filmList: res.data.data.films })
      })
    }
  }

  // UNSAFE_componentWillUpdate(prevProps, prevState) { 
  //   if(this.state.currentTab === 1) {
  //     axios({
  //       url: "https://m.maizuo.com/gateway?cityId=110100&pageNum=1&pageSize=10&type=1&k=4669658",
  //       method: "get",
  //       headers: headerObj
  //     }).then(res => {
  //       this.setState({ filmList: res.data.data.films })
  //     })
  //   }else {
  //     axios({
  //       url: 'https://m.maizuo.com/gateway?cityId=110100&pageNum=1&pageSize=10&type=2&k=5910792',
  //       method: 'get',
  //       headers: headerObj
  //     }).then(res => {
  //       this.setState({ filmList: res.data.data.films })
  //     })
  //   }
  // }

  static getDerivedStateFromProps(nextProps, nextState) {
    return {
      currentTab: nextState.currentTab
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if(this.state.currentTab === prevState.currentTab) {
      return
    }
    if(this.state.currentTab === 1) {
      axios({
        url: "https://m.maizuo.com/gateway?cityId=110100&pageNum=1&pageSize=10&type=1&k=4669658",
        method: "get",
        headers: headerObj
      }).then(res => {
        this.setState({ filmList: res.data.data.films })
      })
    }else {
      axios({
        url: 'https://m.maizuo.com/gateway?cityId=110100&pageNum=1&pageSize=10&type=2&k=5910792',
        method: 'get',
        headers: headerObj
      }).then(res => {
        this.setState({ filmList: res.data.data.films })
      })
    }
  }

  render() {
    return (
      <globalContext.Provider value={{
        filmDetail: this.state.filmDetail,
        changeDetail: (value) => {
          this.setState({ filmDetail: value })
        }
      }}>
        <div>
          <div style={{ height: '200px', width: '100%', overflow: 'hidden' }}>
            <LSwiper loop={true}>
              {
                this.state.bannerList.map((item) => {
                  return <LSwiperItem key={item.bannerId}>
                    <img alt={item.name} src={item.imgUrl} style={{ width: '100%', height: '200px' }} />
                  </LSwiperItem>
                })
              }
            </LSwiper>
          </div>
          <div style={{
            height: '50px',
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'center',
            lineHeight: '50px'
          }}>
            <span style={{ 
              display: 'inline-block', 
              borderBottom: this.state.currentTab === 1 && '2px solid #FF5F16',
              color: this.state.currentTab === 1 && '#FF5F16'
            }} onClick={() => {
              this.setState({ currentTab: 1 })
            }}>正在热映</span>
            <span style={{ 
              display: 'inline-block', 
              borderBottom:  this.state.currentTab === 2 && '2px solid #FF5F16',
              color: this.state.currentTab === 2 && '#FF5F16'
            }} onClick={() => {
              this.setState({ currentTab: 2 })
            }}>即将上映</span>
          </div>
          <div>
            <ol>
              {
                this.state.filmList.map(item => 
                  <FilmItem key={ item.filmId } { ...item } globalContext={globalContext} />
                )
              }
              {/* {
                this.state.filmList.map(item => {
                  return (
                    <li key={ item.filmId } style={{ height: '120px', flexDirection: 'row', borderBottom: 'none' }}>
                      <div className='columnFlex' style={{ width: '25%', float: 'left'}}>
                        <img src={item.poster} alt={item.name} style={{ width: '65%', borderRadius: '3px' }} />
                      </div>
                      <div className='columnFlex' style={{ width: '60%', float: 'right', fontSize: '14px',alignItems: 'normal', color: 'gray' }}>
                        <p style={{ color: 'black' }}><b>{ item.name }</b> <span style={{ display: 'inline-block', backgroundColor: '#D2D6DC', color: 'white', borderRadius: '2px', fontSize: '12px', width: '20px', textAlign: 'center' }}> { item.item.name }</span></p>
                        <p>观众评分 <font color='orange'>{ item.grade }</font></p>
                        <p style={{ overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis' }} >
                          {
                            item.actors.map(actor => 
                              <span key={ actor.name }>主演：{ actor.name }</span>
                            )
                          }
                        </p>
                        <p>
                          <span>{ item.nation }</span> | <span>{ item.runtime } 分钟</span>
                        </p>
                      </div>
                      <div className='columnFlex' style={{ width: '15%', float: 'right' }}>
                        <button style={{ width: '50px', height: '25px', background: 'none', borderWidth: 'thin', borderColor: '#FF5F16', borderRadius: '3px', color: '#FF5F16'}}>购票</button>
                      </div>
                    </li>
                  )
                })
              } */}
            </ol>

          </div>
          {/* <DetailDiv globalContext={globalContext} /> */}
        </div>
      </globalContext.Provider>
    )
  }
}
