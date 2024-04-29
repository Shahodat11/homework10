import React, { Component } from 'react'
import '../navbar/navbar.css'
import logo from '../../assets/615px-Food_Network_New_Logo 2.svg'

export default class Navbar extends Component {
  render() {
    return (
      <div className='container'>
        <div className="navbar__nav-links">
            <div className="nav">
                <img src={logo} alt="" />
                <ul className="nav-items" id="navbar-responsive">
                    <li>
                        <a className='a' href="#">Home </a>
                    </li>
                    <li>
                        <a className='a' href="#">About us</a>
                    </li>
                    <li>
                        <a className='a' href="#">Menu</a>
                    </li>
                    <li>
                        <a className='a' href="#">Features</a>
                    </li>
                    <li>
                        <a className='a' href="#">Contact us</a>
                    </li>
                </ul>
            </div>
          <button>Booking Now</button>
        </div>
      </div>
    )
  }
}