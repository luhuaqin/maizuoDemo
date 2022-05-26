import React, { Component } from 'react'


export default class centerList extends Component {
  render() {
    return (
      <div>
        <ol>
          {
            this.props.centerList.map(item => {
              return (
                <li style={{ 
                      height: '50px', 
                      backgroundColor: '#fff', 
                      borderBottom: '0.5px solid #D2D6DC', 
                      display: 'flex', 
                      flexDirection: 'row', 
                      justifyContent: 'space-between', 
                      alignItems: 'center' 
                }} key={item.id}>
                  <span style={{ width: '10%' }}>
                    <img alt={item.text} src={item.imgUrl} style={{ width: '50%', margin: '0 25%' }} />
                  </span>
                  
                  <span style={{ width: '80%' }}>{item.text}</span>
                  <span style={{ width: '10%' }}>
                    <img alt={item.text} src={item.rightUrl} style={{ width: '15%', margin: '0 42%' }} />
                  </span>
                </li>
              )
            })
          }
          
        </ol>
      </div>
    )
  }
}
