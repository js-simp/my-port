//Securities investment Analytics
import React from 'react';
import Slider from "react-slick";
import "./Securities.css"

function Securities() {
  const my_securities = [
    {asset : 'FD', initiated : '10/11/2021', period_in_years : 2, growth : 17.5, amount : '10,000'},
    {asset : 'MM', initiated : '06/01/2020', period_in_years : 0.5, growth : 12, amount : '10,000'},
    {asset : 'TR', initiated : '10/06/2020', period_in_years : 0.25, growth : 21, amount : '10,000'},
    {asset : 'FD', initiated : '10/10/2021', period_in_years : 1, growth : 17, amount : '10,000'},
    {asset : 'INS', initiated : '31/12/2021', period_in_years : 5, growth : 30, amount : '10,000'},
    {asset : 'IND', initiated : '10/11/2021', period_in_years : 10, growth : 18.9, amount : '10,000'}
]

const cards = my_securities.map(security => 
  <div className="wrapper">
    <div className= {`clash-card ${security.asset}`}>
      <div className="clash-card__image">
        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/barbarian.png" alt={`${security.asset}`} />
      </div>
      <div className="clash-card__level clash-card__level--barbarian">Level 4</div>
      <div className="clash-card__unit-name">The Barbarian</div>
      <div className="clash-card__unit-description">
        The Barbarian is a kilt-clad Scottish warrior with an angry, battle-ready expression, hungry for destruction. He has Killer yellow horseshoe mustache.
      </div>

      <div className="clash-card__unit-stats clash-card__unit-stats--barbarian clearfix">
        <div className="one-third">
          <div className="stat">${security.amount}<sup>S</sup></div>
          <div className="stat-value">Amount</div>
        </div>

        <div className="one-third" >
          <div className="stat">${security.growth}</div>
          <div className="stat-value">Growth</div>
        </div>

        <div className="one-third no-border">
          <div className="stat">${security.period_in_years}</div>
          <div className="stat-value">Years</div>
        </div>

      </div>
    </div>  
  </div>
  )

  const slider_settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
  }

  return (
    <div className="slide-container" display = 'flex'>
      {cards}
    </div> //end container
  )
}

export default Securities