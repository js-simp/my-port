import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import './Slides.css'
function Slides(props) {

const responsive = {
    superLargeDesktop: {
        breakpoint: {
            max: 4000,
            min: 2150
        },
        items: 6
    },
    desktop: {
        breakpoint: {
            max: 2150,
            min: 1024
        },
        items: 5
    },
    tablet: {
        breakpoint: {
            max: 1024,
            min: 464
        },
        items: 3
    },
    mobile: {
        breakpoint: {
            max: 464,
            min: 0
        },
        items: 1
    }
};

const my_securities = props.securities;
const cards = my_securities.map(security => (

<div className = "wrapper" key={security.id}>

      <div className= {`clash-card ${security.asset}`}>
        <div className="clash-card__image">
          <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/barbarian.png" alt={`${security.asset}`} />
        </div>
        <div className="clash-card__level">Level 4</div>
        <div className="clash-card__unit-name">{`${security.asset}`}</div>
        <div className="clash-card__unit-description">{`LKR ${security.amount}`}</div>
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

  <Carousel responsive = {responsive}
      swipeable={true}
      draggable={false}
      showDots={props.deviceType !== "mobile" ? false : true}
      ssr={false} // means to render carousel on server-side.
      infinite={true}
      autoPlay={props.deviceType !== "mobile" ? true : false}
      autoPlaySpeed={3000}
      keyBoardControl={true}
      customTransition="all 1s ease"
      transitionDuration={1000}
      containerClass="carousel-container"
      removeArrowOnDeviceType={["tablet", "mobile"]}
      deviceType={props.deviceType}>

  {cards}

    </Carousel>
  )}


export default Slides