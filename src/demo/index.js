import React, { Component } from 'react'
import Film from './components/Film'
import Cinema from './components/Cinema'
import Center from './components/Center'
import TabBar from './components/TabBar'
// import Navbar from './components/Navbar'

export default class App extends Component {
  state = {
    bottomList: [
      {
        id: 1,
        text: '电影'
      },
      {
        id: 2,
        text: '影院'
      },
      {
        id: 3,
        text: '我的'
      }
    ],
    currentIndex: 0
  }
  which() {
    switch(this.state.currentIndex) {
      case 0:
        return <Film />
      case 1:
        return <Cinema />
      case 2:
        return <Center />
      default:
        return null
    }
  }
  render() {
    return (
      <div>
        {/* <Navbar nvEvent={() => {
          this.setState({ currentIndex: 2 })
        }} /> */}
        {
          this.which()
        }
        <TabBar tbEvent={(index) => {
                  this.setState({ currentIndex: index })
                }} 
                bottomList={ this.state.bottomList } 
                currentIndex={ this.state.currentIndex } 
        />
      </div>
    )
  }
}
