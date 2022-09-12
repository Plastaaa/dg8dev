import React, { Component } from "react";
import Slider from "react-slick";
import Image from "next/image";
import img1 from '../public/slider/marques/11836.png';
import img2 from '../public/slider/marques/dethleffs.png';
import img3 from '../public/slider/marques/11826.png';
import img4 from '../public/slider/marques/11837.png';
import img5 from '../public/slider/marques/11840.png';
import img6 from '../public/slider/marques/mobilvetta.png';
import img7 from '../public/slider/marques/elios.png';
import img8 from '../public/slider/marques/levoyageur.png';
import img9 from '../public/slider/marques/bavaria.png';
import img10 from '../public/slider/marques/burstner.png';
import img11 from '../public/slider/marques/challenger.png';
import img12 from '../public/slider/marques/chausson.png';
import img13 from '../public/slider/marques/ci.png';
import img14 from '../public/slider/marques/crosscamp.png';
import img15 from '../public/slider/marques/cartha.png';
import img16 from '../public/slider/marques/rapido.png';
import img17 from '../public/slider/marques/ecocampers.png';
import img18 from '../public/slider/marques/eura-mobil.png';
import img19 from '../public/slider/marques/globe.png';
import img20 from '../public/slider/marques/hymercar.png';
import img21 from '../public/slider/marques/hymer.png';
import img22 from '../public/slider/marques/joa-camp.png';
import img23 from '../public/slider/marques/knaus-logo.png';
import img24 from '../public/slider/marques/campster.png';
import img25 from '../public/slider/marques/carado.png';
import img26 from '../public/slider/marques/malibu.png';
import img27 from '../public/slider/marques/lmc.jpg';
import img28 from '../public/slider/marques/fleurette.png';
import img29 from '../public/slider/marques/west.png';
import img30 from '../public/slider/marques/roadcar.png';
import img31 from '../public/slider/marques/sun.png';
import img32 from '../public/slider/marques/etrusco.png';
import img33 from '../public/slider/marques/pilote.png';
import img34 from '../public/slider/marques/possl.png';
import img35 from '../public/slider/marques/stylevan.png';
import img36 from '../public/slider/marques/randger.png';
import img37 from '../public/slider/marques/font.png';
import img38 from '../public/slider/marques/weins.png';

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      lazyLoad: false,
      speed: 100,
      slidesToShow: 6,
      slidesToScroll: 3,
      centerMode: true,
      arrows: true,
      variableWidth: false,
      adaptiveHeight: false,
    };
    return (
      <div className="p-0">
        <Slider {...settings}>
            <div className="grid place-items-center">
                <Image alt="Image Slider Marque" src={img1} layout="responsive"/>
            </div>
            <div className="grid place-items-center">
                <Image alt="Image Slider Marque" src={img2} layout="responsive"/>
            </div>
            <div>
                <Image alt="Image Slider Marque" src={img3} layout="responsive"/>
            </div>
            <div>
                <Image alt="Image Slider Marque" src={img4} layout="responsive"/>
            </div>
            <div>
                <Image alt="Image Slider Marque" src={img5} layout="responsive"/>
            </div>
            <div>
                <Image alt="Image Slider Marque" src={img6} layout="responsive"/>
            </div>
            <div>
                <Image alt="Image Slider Marque" src={img7} layout="responsive"/>
            </div>
            <div>
                <Image alt="Image Slider Marque" src={img8} layout="responsive"/>
            </div>
            <div>
                <Image alt="Image Slider Marque" src={img9} layout="responsive"/>
            </div>
            <div>
                <Image alt="Image Slider Marque" src={img10} layout="responsive"/>
            </div>
            <div>
                <Image alt="Image Slider Marque" src={img11} layout="responsive"/>
            </div>
            <div>
                <Image alt="Image Slider Marque" src={img12} layout="responsive"/>
            </div>
            <div>
                <Image alt="Image Slider Marque" src={img13} layout="responsive"/>
            </div>
            <div>
                <Image alt="Image Slider Marque" src={img14} layout="responsive"/>
            </div>
            <div>
                <Image alt="Image Slider Marque" src={img15} layout="responsive"/>
            </div>
            <div>
                <Image alt="Image Slider Marque" src={img16} layout="responsive"/>
            </div>
            <div>
                <Image alt="Image Slider Marque" src={img17} layout="responsive"/>
            </div>
            <div>
                <Image alt="Image Slider Marque" src={img18} layout="responsive"/>
            </div>
            <div>
                <Image alt="Image Slider Marque" src={img19} layout="responsive"/>
            </div>
            <div>
                <Image alt="Image Slider Marque" src={img20} layout="responsive"/>
            </div>
            <div>
                <Image alt="Image Slider Marque" src={img21} layout="responsive"/>
            </div>
            <div>
                <Image alt="Image Slider Marque" src={img22} layout="responsive"/>
            </div>
            <div>
                <Image alt="Image Slider Marque" src={img23} layout="responsive"/>
            </div>
            <div>
                <Image alt="Image Slider Marque" src={img24} layout="responsive"/>
            </div>
            <div>
                <Image alt="Image Slider Marque" src={img25} layout="responsive"/>
            </div>
            <div>
                <Image alt="Image Slider Marque" src={img26} layout="responsive"/>
            </div>
            <div>
                <Image alt="Image Slider Marque" src={img27} layout="responsive"/>
            </div>
            <div>
                <Image alt="Image Slider Marque" src={img28} layout="responsive"/>
            </div>
            <div>
                <Image alt="Image Slider Marque" src={img29} layout="responsive"/>
            </div>
            <div>
                <Image alt="Image Slider Marque" src={img30} layout="responsive"/>
            </div>
            <div>
                <Image alt="Image Slider Marque" src={img31} layout="responsive"/>
            </div>
            <div>
                <Image alt="Image Slider Marque" src={img32} layout="responsive"/>
            </div>
            <div>
                <Image alt="Image Slider Marque" src={img33} layout="responsive"/>
            </div>
            <div>
                <Image alt="Image Slider Marque" src={img34} layout="responsive"/>
            </div>
            <div>
                <Image alt="Image Slider Marque" src={img35} layout="responsive"/>
            </div>
            <div>
                <Image alt="Image Slider Marque" src={img36} layout="responsive"/>
            </div>
            <div>
                <Image alt="Image Slider Marque" src={img37} layout="responsive"/>
            </div>
            <div>
                <Image alt="Image Slider Marque" src={img38} layout="responsive"/>
            </div>
        </Slider>
      </div>
    );
  }
}
