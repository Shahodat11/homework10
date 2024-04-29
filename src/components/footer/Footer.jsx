import React, { Component } from 'react'
import '../footer/footer.css'
import logo from '../../assets/615px-Food_Network_New_Logo 1.svg'

export default class Footer extends Component {
  render() {
    return (
        <div className="nav-link5">
          <div className='container'>
            <div className="nav-link6">
              <div className="nav6">
                <img className='nav-h4' src={logo} alt="" />
                <h6 className='nav-h5'>www.company name.com</h6>
                <h6 className='nav-h5'>companyname@gmail.com</h6>
                <h6 className='nav-h5'>Phone: +7 485-118-03-25</h6>
            </div>
            <div className="nav6">
                <h4 className='nav-h4'>Home</h4>
                <h6 className='nav-h5'>Landingpage</h6>
                <h6 className='nav-h5'>Documentation</h6>
                <h6 className='nav-h5'>Referral Program</h6>
                <h6 className='nav-h5'>UI & UX Design</h6>
                <h6 className='nav-h5'>Web Design</h6>
            </div>
            <div className="nav6">
                <h4 className='nav-h4'>Menu</h4>
                <h6 className='nav-h5'>Landingpage</h6>
                <h6 className='nav-h5'>Documentation</h6>
                <h6 className='nav-h5'>Referral Program</h6>
                <h6 className='nav-h5'>UI & UX Design</h6>
                <h6 className='nav-h5'>Web Design</h6>
            </div>
            <div className="nav6">
                <h4 className='nav-h4'>Menu</h4>
                <h6 className='nav-h5'>Landingpage</h6>
                <h6 className='nav-h5'>Documentation</h6>
                <h6 className='nav-h5'>Referral Program</h6>
              </div>
            </div>
          </div>
      </div>
    )
  }
}
