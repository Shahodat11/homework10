import React, { Component } from 'react'
import mainLogo from '../../assets/CSmJnTefxM 1.svg'
import '../mainTop/mainTop.css'

export default class MainTop extends Component {
  render() {
    return (
      <div className='container'>
        <div className="nav-link">
            <div className="nav1">
                <h3>Making time a good time by making food the good food.</h3>
                <p>There are many things are needed to start the Fast Food Business. You need not only Just Food Stalls with Persons but also specialized equipment,</p>
                <button className='button1'>Order Now</button>
                <button className='button2'>Food Details</button>
            </div>
            <div className="nav2">
                <img className='img' src={mainLogo} alt="" />
            </div>
        </div>
      </div>
    )
  }
}
