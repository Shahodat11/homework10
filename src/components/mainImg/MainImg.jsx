import React, { Component } from 'react'
import '../mainImg/mainImg.css'
import womanLogo from '../../assets/Mask Group.svg'

export default class MainImg extends Component {
  render() {
    return (
      <div className='container'>
        <div className="nav-link3">
            <img src={womanLogo} alt="" />
            <div className="nav4">
                <h4 className='h4'>About us</h4>
                <h2 className='h2'>Food Stalls with Persons but  to  Product marketing plane catlogues etc to. </h2>
                <p>There are many things are needed to start the Fast Food Business. You need not only Just Food Stalls with Persons but also equipment  make your marketing plane Effective.</p>
                <button>Read More</button>
            </div>
        </div>
      </div>
    )
  }
}
