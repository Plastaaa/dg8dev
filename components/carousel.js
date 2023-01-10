import React, { Component } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import img1 from '../public/slider/slide1.jpg';
import img1mobile from '../public/slider/slide1-mobile.png';
import img3 from '../public/slider/pap.jpg';
import img3mobile from '../public/slider/pap-mobile.png';
import "@splidejs/splide/dist/css/splide.min.css";
import { Splide, SplideSlide } from '@splidejs/react-splide';

export default class SimpleSlider extends Component {
  render() {
    return (
      <div>
        <div className="hidden md:block md:px-8 lg:px-24 xl:px-48">
          <Splide
            options={{
              type: "loop",
              autoplay: true,
            }}
            className={"border border-gray-400 rounded-2xl shadow-xl"}
          >

{
  /*
            <SplideSlide>
              <Image className="rounded-2xl border border-gray-500" alt="Image Slider" priority={true} src={img4} width={800} layout="responsive" height={320} quality={100}/>
            </SplideSlide>*/
}
            
            {/*
              <SplideSlide>
                <Image className="rounded-2xl border border-gray-500" alt="Image Slider" priority={true} src={img2} width={800} layout="responsive" height={320} quality={100}/>
                <div className="absolute text-sm md:text-xl lg:text-2xl text-gray left-1/2 bottom-0 -translate-x-1/2 -translate-y-1/2">
                  <a href="./jeuconcours">
                    <button className='flex flex-wrap bg-red-900 text-white hover:bg-red-800 hover:dark:text-white hover:dark:bg-green-700 dark:text-gray-100 hover:text-white border shadow-lg hover:border-white border-white rounded-lg p-2'>
                      <div className='w-full'>
                          Je veux jouer !
                      </div>
                    </button>
                  </a>
                </div>
              </SplideSlide>
          */}
            
              
            
            <SplideSlide>
              <Image className="rounded-2xl border border-gray-500" alt="Image Slider" priority={true} src={img3} width={800} layout="responsive" height={320} quality={100}/>
            </SplideSlide>
            
            <SplideSlide>
              <Image className="rounded-2xl border border-gray-500" alt="Image Slider" priority={true} src={img1} width={800} layout="responsive" height={320} quality={100}/>
            </SplideSlide>
          </Splide>
        </div>
        {/* Mobile Navbar */}
        <div className="block md:hidden md:px-8 lg:px-24 xl:px-48">
          <Splide
            options={{
              type: "loop",
              autoplay: true,
            }}
            className={"border border-gray-400 rounded-2xl shadow-xl"}
          >
            {/*
              <SplideSlide>
                <Image className="rounded-2xl border border-gray-500" alt="Image Slider" priority={true} src={img4mobile} width={414} layout="responsive" height={414} quality={100}/>
              </SplideSlide>*/
            }
              {
                /*
                <SplideSlide>
                <Image className="rounded-2xl border border-gray-500" alt="Image Slider" priority={true} src={img2mobile} width={414} layout="responsive" height={414} quality={100}/>
                <div className="absolute text-sm md:text-xl lg:text-2xl text-gray left-1/2 bottom-0 -translate-x-1/2 -translate-y-1/2">
                  <a href="./jeuconcours">
                    <button className='flex flex-wrap bg-red-900 text-white hover:bg-red-800 hover:dark:text-white hover:dark:bg-green-700 dark:text-gray-100 hover:text-white border shadow-lg hover:border-white border-white rounded-lg p-2'>
                      <div className='w-full'>
                          Je veux jouer !
                      </div>
                    </button>
                  </a>
                </div>
              </SplideSlide>*/
              }
              
              
              <SplideSlide>
                <Image className="rounded-2xl border border-gray-500" alt="Image Slider" priority={true} src={img3mobile} width={414} layout="responsive" height={414} quality={100}/>
              </SplideSlide>
              
              <SplideSlide>
                <Image className="rounded-2xl border border-gray-500" alt="Image Slider" priority={true} src={img1mobile} width={414} layout="responsive" height={414} quality={100}/>
              </SplideSlide>
          </Splide>
        </div>
      </div>
    );
  }
}
