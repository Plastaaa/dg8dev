import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import img1 from '../public/slider/slide1.jpg';
import img2 from '../public/slider/slide2.png';
import img3 from '../public/slider/slide3.jpg';
import "@splidejs/splide/dist/css/splide.min.css";
import { Splide, SplideSlide } from '@splidejs/react-splide';

export default class SimpleSlider extends Component {
  render() {
    return (
      <div>
        {/*
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
    */}
        <Splide
          options={{
            type: "loop",
            autoplay: true,
          }}
        >
          <SplideSlide>
            <Image alt="Image Slider" src={img1} width={800} layout="responsive" height={320}/>
          </SplideSlide>
          <SplideSlide>
            <Image alt="Image Slider" src={img2} width={800} layout="responsive" height={320}/>
          </SplideSlide>
          <SplideSlide>
            <Image alt="Image Slider" src={img3} width={800} layout="responsive" height={320}/>  
          </SplideSlide>
        </Splide>
      </div>
    );
  }
}
