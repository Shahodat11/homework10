import React, { Component } from 'react'
import '../cards/cards.css'
import card1 from '../../assets/Group 94.svg'
import card2 from '../../assets/Group 24.svg'
import card3 from '../../assets/Group 93.svg'

export default class Cards extends Component {
  render() {
    return (
      <div className='container'>
        <div className="nav-link2">
            <h5>Features</h5>
            <h2>Food with a New Passion</h2>
            <div className="cards">
                <div className="card1">
                    <img className='img2' src={card1} alt="" />
                    <h4>Quality Food</h4>
                    <p className='p'>It can be a very secure path to earn good money and make you very successful creative entrepreneur.</p>
                </div>
                <div className="card1">
                    <img className='img2' src={card2} alt="" />
                    <h4>Food Delivery</h4>
                    <p className='p'>It can be a very secure path to earn good money and make you very successful creative entrepreneur.</p>
                </div>
                <div className="card1">
                    <img className='img2' src={card3} alt="" />
                    <h4>Super Taste</h4>
                    <p className='p'>It can be a very secure path to earn good money and make you very successful creative entrepreneur.</p>
                </div>
            </div>
        </div>
      </div>
    )
  }
}
