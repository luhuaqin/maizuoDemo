import React from "react"
// 引入css文件
import '../css/index.css'
class App extends React.Component {
  render() {
    let a = 5
    const obj = {
      background: 'red'
    }
    return (
      <div>
        {/* 页面显示25 */}
        {10 + 20 - a} 
        <div style={{background: 'green'}}>11111111111</div>
        <div style={obj}>11111111111</div>
        {/* 直接使用css中的样式，原生class属性写成className，react为提高辨识度而设置 */}
        <div className="active">11111111111</div>
        <div id="box">11111111111</div>
        {/* 原生label中for属性写成htmlForm */}
        <label htmlFor="userName">姓名：</label>
        <input id="userName"></input>
      </div>
    )
  }
}

export default App