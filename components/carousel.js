import React, { Component } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import img1 from '../public/slider/slide1.jpg';
import img2 from '../public/slider/slide2.png';
import img3 from '../public/slider/slide3.jpg';
import img4 from '../public/slider/slide4.jpg';
import "@splidejs/splide/dist/css/splide.min.css";
import { Splide, SplideSlide } from '@splidejs/react-splide';

export default class SimpleSlider extends Component {
  render() {
    return (
      <div>
        <Splide
          options={{
            type: "loop",
            autoplay: true,
          }}
        >
          <SplideSlide>
            <Image alt="Image Slider" priority={true} src={img1} width={800} layout="responsive" height={320} quality={100}/>
          </SplideSlide>
          <SplideSlide>
            <Image alt="Image Slider" priority={true} src={img2} width={800} layout="responsive" height={320} quality={100}/>
          </SplideSlide>
          <SplideSlide>
            <Image alt="Image Slider" priority={true} src={img3} width={800} layout="responsive" height={320} quality={100}/>  
          </SplideSlide>
          <SplideSlide>
            <Image alt="Image Slider" priority={true} src={img4} width={800} layout="responsive" height={320} quality={100}/>  
          </SplideSlide>
        </Splide>
      </div>
    );
  }
}
