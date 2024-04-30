import React, { Component } from 'react'
import '../mainBottom/mainBottom.css'
import img from '../../assets/Testimonial.svg'

export default class MainBottom extends Component {
  render() {
    return (
      <div className='container'>
        <div className="nav-links1">
          <img src={img} alt="" />
        </div>
      </div>
    )
  }
}
