import React, { Component } from 'react'
import '../css/index.css'

export default class App extends Component {
  // value = new createRef()
  state = {
    list: [],
    addValue: ''
  }
  handleClick = () => {
    let newList = [ ...this.state.list ]
    newList.push({
      id: Number(Math.random().toString().substr(2,newList) + Date.now()).toString(36),
      // text: this.value.current.value
      text: this.state.addValue,
      isFinish: false
    })
    this.setState({ 
      list: newList,
      addValue: ''
    })

    // this.value.current.value = ''
  }
  render() {
    let showList = this.state.list.map((item, index) => 
      <li key={ item.id }>
        {/* { item.text } */}
        <input type="checkbox" checked={item.isFinish} onChange={() => {
          if(this.state.list.length > 0) {
            let showList = [ ...this.state.list ]
            if(showList.length > 0) {
              showList[index].isFinish = !showList[index].isFinish
            }
            this.setState({ list: showList })
          }
        }} />
        {/* 富文本展示，可以解析带有html标签的文本，为了安全一般不使用 */}
        <span dangerouslySetInnerHTML={
          {
            __html: item.text
          }
        } style={{ textDecoration: item.isFinish && "line-through" }} ></span>
        <button onClick={() => {
          let showList = [ ...this.state.list ]
          showList.splice(index, 1)
          this.setState({ list: showList })
        }}>删除</button> 
      </li>
    )
    return (
      <div>
        <input value={ this.state.addValue } onChange = {(event)=>{
          this.setState({ addValue: event.target.value })
        }} />
        <button onClick={ this.handleClick }>addItem</button>
        <div className='list-box'>
          <ol>{ showList }</ol>
          { this.state.list.length === 0 && <h3>暂无数据</h3> } {/* 动态创建节点*/}
        </div>
      </div>
    )
  }
}
