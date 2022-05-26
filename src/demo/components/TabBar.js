import React, { Component } from 'react'

export default class TabBar extends Component {
  render() {
    return (
      <div>
        <ul>
          {
            this.props.bottomList.map((item, index) => 
              <li key={ item.id } 
                  className={ this.props.currentIndex === index ? 'active' : '' }
                  onClick={() => {
                    this.props.tbEvent(index)
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
