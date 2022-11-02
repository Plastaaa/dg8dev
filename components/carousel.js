import React, { Component } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import img1 from '../public/slider/slide1.jpg';
import img2 from '../public/slider/slide2.jpg';
import "@splidejs/splide/dist/css/splide.min.css";
import { Splide, SplideSlide } from '@splidejs/react-splide';

export default class SimpleSlider extends Component {
  render() {
    return (
      <div className={"px-48 pb-8"}>
        <Splide
          options={{
            type: "loop",
            autoplay: true,
          }}
          className={"border border-gray-400 rounded-2xl shadow-xl"}
        >
          <SplideSlide>
            <Image className="rounded-2xl border border-gray-700" alt="Image Slider" priority={true} src={img1} objectFit={"cover"} layout={"fill"} quality={100}/>
          </SplideSlide>
          <SplideSlide>
            <Image className="rounded-2xl border border-gray-500" alt="Image Slider" priority={true} src={img2} width={800} layout="responsive" height={320} quality={100}/>
          </SplideSlide>
        </Splide>
      </div>
    );
  }
}
