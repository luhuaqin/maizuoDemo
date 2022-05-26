import React, { Component } from 'react'
import CenterList from './subComponents/centerList'
import centerBg from '../../images/centerbg.png'
import filmOrder from '../../images/电影订单.png'
import productOrder from '../../images/商品订单.png'
import rightArrow from '../../images/右箭头.png'
import wallet from '../../images/钱包.png'
import Coupons from '../../images/卖座券.png'
import redEnvelopes from '../../images/组合红包.png'
import help from '../../images/help.png'
import setting from '../../images/setting.png'
import loginImg from '../../images/登录.png'

export default class Center extends Component {
  state = {
    centerList: [
      {
        imgUrl: Coupons,
        rightUrl: rightArrow,
        text: '卖座券',
        id: '001'
      },
      {
        imgUrl: redEnvelopes,
        rightUrl: rightArrow,
        text: '组合红包',
        id: '002'
      },
      {
        imgUrl: wallet,
        rightUrl: rightArrow,
        text: '余额',
        id: '003'
      },
      {
        imgUrl: help,
        rightUrl: rightArrow,
        text: '帮助与客服',
        id: '004'
      },
      {
        imgUrl: setting,
        rightUrl: rightArrow,
        text: '设置',
        id: '005'
      }
    ]
  }
  render() {
    return (
      <div style={{ backgroundColor: '#f4f4f4', height: window.innerHeight - 50 }}>
        <div style={{ width: '100%', height: '160px', overflow: 'hidden', backgroundImage: `url(${centerBg})`, backgroundSize: '100%', backgroundRepeat: 'no-repeat' }}>
          <span style={{ position: 'relative', left: '25%', top: '48%', color: '#fff', fontSize: '16px' }}>立即登录</span>
          <div style={{ width: '16%', height: '40%', border: '1px solid #fff', borderRadius: '50%', margin: '8% 20px' }}>
            <img src={loginImg} alt='' style={{ display: 'inline-block', width: '100%', borderRadius: '50%' }} />
          </div>
        </div>
        <div style={{
            height: '70px',
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'center',
            lineHeight: '30px',
            backgroundColor: '#fff',
            color: '#797d82',
            fontSize: '14px'
        }}>
          <span onClick={() => {
            alert('电影订单')
          }}>
            <img src={filmOrder} alt='' style={{ display: 'block',  margin: '0 auto',  height: '30px', width: '30px' }} />
            电影订单
          </span>
          <span onClick={() => {
            alert('商品订单')
          }}>
            <img src={productOrder} alt='' style={{ display: 'block',  margin: '0 auto', height: '30px', width: '30px' }} />
            商品订单
          </span>
        </div>
        <div style={{ width: '100%', marginTop: '10px' }}>
          <CenterList centerList={this.state.centerList} />
        </div>
      </div>
    )
  }
}
