import CardWithDetails from '../CardWithDetails/CardWithDetails';
import { CardWithDetailsInfo } from '../CardWithDetails/CardWithDetailsInfo';

import Slider from "react-slick";
// import "slick-carousel/slick/slick.css"; 
// import "slick-carousel/slick/slick-theme.css";
import React, { Component, useRef } from 'react';
import { ReactComponent as Arrow } from "../../assets/img/carousel_arrow_left.svg";
import cn from "./CustomSlider.module.scss";




// type Props = {}

const CustomSlider = () => {

  const sliderEl = useRef(null);

  const cardsWithDetails = CardWithDetailsInfo.map(
    el => <CardWithDetails
      type_card='ordinary'
      key={el.key}
      gold={el.gold}
      price={el.price}
      duration={el.duration}
      // people={el.people}
      amount_rooms={el.amount_rooms}
      square={el.square}
      city={el.city}
      address={el.address}
      subway_station={el.subway_station}
      neighborhood={el.neighborhood}
    />)

  const next = () => {
    console.log(sliderEl)
    sliderEl.current.slickNext();
  }
  const previous = () => {
    sliderEl.current.slickPrev();
  }

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1020,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 710,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          // initialSlide: 2
        }
      },
      // {
      //   breakpoint: 480,
      //   settings: {
      //     slidesToShow: 1,
      //     slidesToScroll: 1
      //   }
      // }
    ]
  }
  return (
    <div  className={cn.cards_with_details}>
      <Slider ref={sliderEl} {...settings}>
        {cardsWithDetails}
      </Slider>
      <div className={cn.wrapper_buttons} style={{ textAlign: "center" }}>
        <button className={`${cn.btn}`} onClick={previous}>
          {/* Previous */}
          <Arrow />
        </button>
        <button className={`${cn.btn} ${cn.btn_right}`} onClick={next}>
          <Arrow />

        </button>
      </div>
    </div>
  )
}

export default CustomSlider;

class CustomSlider_0 extends Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }
  next() {
    this.slider.slickNext();
  }
  previous() {
    this.slider.slickPrev();
  }
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };

    const cardsWithDetails = CardWithDetailsInfo.map(
      el => <CardWithDetails
        type_card='ordinary'
        key={el.key}
        gold={el.gold}
        price={el.price}
        duration={el.duration}
        // people={el.people}
        amount_rooms={el.amount_rooms}
        square={el.square}
        city={el.city}
        address={el.address}
        subway_station={el.subway_station}
        neighborhood={el.neighborhood}
      />)
    return (
      <div>
        <h2>Previous and Next methods</h2>
        <Slider ref={c => (this.slider = c)} {...settings}>
          {cardsWithDetails}
          {/* <div key={1}>
            <h3>1</h3>
          </div>
          <div key={2}>
            <h3>2</h3>
          </div>
          <div key={3}>
            <h3>3</h3>
          </div>
          <div key={4}>
            <h3>4</h3>
          </div>
          <div key={5}>
            <h3>5</h3>
          </div>
          <div key={6}>
            <h3>6</h3>
          </div> */}
        </Slider>
        <div style={{ textAlign: "center" }}>
          <button className="button" onClick={this.previous}>
            Previous
          </button>
          <button className="button" onClick={this.next}>
            Next
          </button>
        </div>
      </div>
    );
  }
}