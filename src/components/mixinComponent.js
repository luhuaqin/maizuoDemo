import React, { Component } from "react";

function NavChildren() {
  return <div>navbarChildren</div>
}

class Nav extends Component {
  render() {
    return <div>
      navbar
      <NavChildren />
    </div>
  }
}

function Swiper() {
  return (
    <div>Swiper</div>
  )
}

const Tabbar = () => <div>Tabbar</div>

export default class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Swiper />
        <Tabbar />
      </div>
    )
  }
}
