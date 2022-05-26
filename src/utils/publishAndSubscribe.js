// 发布订阅模式

// 容器
const container = {
  list: [],
  // 订阅
  subscribe(callback) {
    console.log('订阅模式', callback)
    this.list.push(callback)
  },

  // 发布
  publish(value) {
    // 发布模式
    this.list.forEach(callback => {
      callback && callback(value)
    })
  }
}

container.subscribe((value) => {
  console.log(value)
})

container.publish('aaa')


export default container
