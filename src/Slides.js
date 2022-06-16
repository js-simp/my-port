import React from 'react'
import './Slides.css'
function Slides(props) {

  const my_securities = props.securities;

  const cards = my_securities.map(security => (
    <div className="wrapper">
      <div className= {`clash-card ${security.asset}`}>
        <div className="clash-card__image">
          <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/barbarian.png" alt={`${security.asset}`} />
        </div>
        <div className="clash-card__level">Level 4</div>
        <div className="clash-card__unit-name">{`${security.asset}`}</div>
        <div className="clash-card__unit-description">
          {`LKR ${security.amount}`}
        </div>
  
        <div className="clash-card__unit-stats clearfix">
        
          <div className="sixty" >
            <div className="stat">${security.growth}</div>
            <div className="stat-value">Growth</div>
          </div>
  
          <div className="thirty no-border">
            <div className="stat">${security.period_in_years}</div>
            <div className="stat-value">Years</div>
          </div>
  
        </div>
      </div>  
    </div>
  ))

  return (
    <div className="slide-container" display = 'flex'>
    {cards}
    </div>
  )

  }

export default Slides