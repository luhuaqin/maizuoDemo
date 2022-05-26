import React, { Component } from 'react'
import './css/index.css'
import Film from './components/Film'
import Cinema from './components/Cinema'
import Center from './components/Center'

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
        {/* 组件切换一种写法 */}
        {/* { this.state.currentIndex === 0 && <Film /> }
        { this.state.currentIndex === 1 && <Cinema /> }
        { this.state.currentIndex === 2 && <Center /> } */}
        {/* 切换组件的另一种写法 */}
        {
          this.which()
        }
        <ul>
          {
            this.state.bottomList.map((item, index) => 
              <li key={ item.id } 
                  className={ this.state.currentIndex === index ? 'active' : '' }
                  onClick={() => {
                    this.setState({ currentIndex: index })
                  }}>
                { item.text }
              </li>
            )
          }
        </ul>
      </div>
    )
  }
}
