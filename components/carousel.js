import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import img1 from '../public/slider/slide1.jpg';
import img2 from '../public/slider/slide2.PNG';
import img3 from '../public/slider/slide3.jpg';

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      lazyLoad: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      centerMode: false,
      arrows: false,
    };
    return (
      <div className="p-2">
        <Slider {...settings}>
          <div>
            <Image alt="Image Slider" src={img1} width={800} layout="responsive" height={320}/>
          </div>
          <div>
            <Image alt="Image Slider" src={img2} width={800} layout="responsive" height={320}/>
          </div>
          <div>
            <Image alt="Image Slider" src={img3} width={800} layout="responsive" height={320}/>
          </div>
        </Slider>
      </div>
    );
  }
}
