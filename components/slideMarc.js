import React, { Component } from "react";
import Image from "next/image";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import "@splidejs/splide/dist/css/splide.min.css";
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
    return (
        <div>
            <div className="p-0 xl:pt-6 lg:pt-6 md:pt-6 sm:pt-2">
            <Splide
                    options={{
                        type: "loop",
                        gap: "4.5rem",
                        drag: "free",
                        arrows: false,
                        pagination: false,
                        autoplay: true,
                        breakpoints: {
                            8000: {
                                perPage: 9,
                               
                            },
                            1200: {
                              perPage: 5,
                             
                            },
                            767: {
                              perPage: 4,
                          
                            },
                            640: {
                              perPage: 3,
                        
                            },
                          },
                    }}
                >
                    <SplideSlide>
                        <div className="flex items-center justify-center h-36">
                            <Image src={img1} alt="MCLOUIS LOGO" />
                        </div>
                    </SplideSlide>
                    <SplideSlide>
                        <div className="flex items-center justify-center h-36">
                            <Image src={img2} alt="DETHLEFFS LOGO" />
                        </div>
                    </SplideSlide>
                    <SplideSlide>
                        <div className="flex items-center justify-center h-36">
                            <Image src={img3} alt="BENIMAR LOGO" />
                        </div>
                    </SplideSlide>
                    <SplideSlide>
                        <div className="flex items-center justify-center h-36">
                            <Image src={img4} alt="NIESMANN LOGO" />
                        </div>
                    </SplideSlide>
                    <SplideSlide>
                        <div className="flex items-center justify-center h-36">
                            <Image src={img5} alt="RIMOR LOGO" />
                        </div>
                    </SplideSlide>
                    <SplideSlide>
                        <div className="flex items-center justify-center h-36">
                            <Image src={img6} alt="MOBILVETTA LOGO" />
                        </div>
                    </SplideSlide>
                    <SplideSlide>
                        <div className="flex items-center justify-center h-36">
                            <Image src={img7} alt="ELIOS LOGO" />
                        </div>
                    </SplideSlide>
                    <SplideSlide>
                        <div className="flex items-center justify-center h-36">
                            <Image src={img8} alt="LEVOYAGEUR LOGO" />
                        </div>
                    </SplideSlide>
                    <SplideSlide>
                        <div className="flex items-center justify-center h-36">
                            <Image src={img9} alt="BAVARIA LOGO" />
                        </div>
                    </SplideSlide>
                    <SplideSlide>
                        <div className="flex items-center justify-center h-36">
                            <Image src={img10} alt="BURSTNER LOGO" />
                        </div>
                    </SplideSlide>
                    <SplideSlide>
                        <div className="flex items-center justify-center h-36">
                            <Image src={img11} alt="CHALLENGER LOGO" />
                        </div>
                    </SplideSlide>
                    <SplideSlide>
                        <div className="flex items-center justify-center h-36">
                            <Image src={img12} alt="CHAUSSON LOGO" />
                        </div>
                    </SplideSlide>
                    <SplideSlide>
                        <div className="flex items-center justify-center h-36">
                            <Image src={img13} alt="CI LOGO" />
                        </div>
                    </SplideSlide>
                    <SplideSlide>
                        <div className="flex items-center justify-center h-36">
                            <Image src={img14} alt="CROSSCAMP LOGO" />
                        </div>
                    </SplideSlide>
                    <SplideSlide>
                        <div className="flex items-center justify-center h-36">
                            <Image src={img15} alt="CARTHAGO LOGO" />
                        </div>
                    </SplideSlide>
                    <SplideSlide>
                        <div className="flex items-center justify-center h-36">
                            <Image src={img16} alt="RAPIDO LOGO" />
                        </div>
                    </SplideSlide>
                    <SplideSlide>
                        <div className="flex items-center justify-center h-36">
                            <Image src={img17} alt="ECOCAMPERS LOGO" />
                        </div>
                    </SplideSlide>
                    <SplideSlide>
                        <div className="flex items-center justify-center h-36">
                            <Image src={img18} alt="EURAMOBIL LOGO" />
                        </div>
                    </SplideSlide>
                    <SplideSlide>
                        <div className="flex items-center justify-center h-36">
                            <Image src={img19} alt="GLOBECAR LOGO" />
                        </div>
                    </SplideSlide>
                    <SplideSlide>
                        <div className="flex items-center justify-center h-36">
                            <Image src={img20} alt="HYMERCV LOGO" />
                        </div>
                    </SplideSlide>
                    <SplideSlide>
                        <div className="flex items-center justify-center h-36">
                            <Image src={img21} alt="HYMER LOGO" />
                        </div>
                    </SplideSlide>
                    <SplideSlide>
                        <div className="flex items-center justify-center h-36">
                            <Image src={img22} alt="JOACAMP LOGO" />
                        </div>
                    </SplideSlide>
                    <SplideSlide>
                        <div className="flex items-center justify-center h-36">
                            <Image src={img23} alt="KNAUS LOGO" />
                        </div>
                    </SplideSlide>
                    <SplideSlide>
                        <div className="flex items-center justify-center h-36">
                            <Image src={img24} alt="CAMPSTER LOGO" />
                        </div>
                    </SplideSlide>
                    <SplideSlide>
                        <div className="flex items-center justify-center h-36">
                            <Image src={img25} alt="CARADO LOGO" />
                        </div>
                    </SplideSlide>
                    <SplideSlide>
                        <div className="flex items-center justify-center h-36">
                            <Image src={img26} alt="MALIBU LOGO" />
                        </div>
                    </SplideSlide>
                    <SplideSlide>
                        <div className="flex items-center justify-center h-36">
                            <Image src={img27} alt="LMC LOGO" />
                        </div>
                    </SplideSlide>
                    <SplideSlide>
                        <div className="flex items-center justify-center h-36">
                            <Image src={img28} alt="FLEURETTE LOGO" />
                        </div>
                    </SplideSlide>
                    <SplideSlide>
                        <div className="flex items-center justify-center h-36">
                            <Image src={img29} alt="WESTFALIA LOGO" />
                        </div>
                    </SplideSlide>
                    <SplideSlide>
                        <div className="flex items-center justify-center h-36">
                            <Image src={img30} alt="ROADCAR LOGO" />
                        </div>
                    </SplideSlide>
                    <SplideSlide>
                        <div className="flex items-center justify-center h-36">
                            <Image src={img31} alt="SUNLIGHT LOGO" />
                        </div>
                    </SplideSlide>
                    <SplideSlide>
                        <div className="flex items-center justify-center h-36">
                            <Image src={img32} alt="ETRUSCO LOGO" />
                        </div>
                    </SplideSlide>
                    <SplideSlide>
                        <div className="flex items-center justify-center h-36">
                            <Image src={img33} alt="PILOTE LOGO" />
                        </div>
                    </SplideSlide>
                    <SplideSlide>
                        <div className="flex items-center justify-center h-36">
                            <Image src={img34} alt="POSSL LOGO" />
                        </div>
                    </SplideSlide>
                    <SplideSlide>
                        <div className="flex items-center justify-center h-36">
                            <Image src={img35} alt="STYLEVAN LOGO" />
                        </div>
                    </SplideSlide>
                    <SplideSlide>
                        <div className="flex items-center justify-center h-36">
                            <Image src={img36} alt="RANDGER LOGO" />
                        </div>
                    </SplideSlide>
                    <SplideSlide>
                        <div className="flex items-center justify-center h-36">
                            <Image src={img37} alt="FONTVENDOME LOGO" />
                        </div>
                    </SplideSlide>
                    <SplideSlide>
                        <div className="flex items-center justify-center h-36">
                            <Image src={img38} alt="WEINSBERG LOGO" />
                        </div>
                    </SplideSlide>
                </Splide>
            </div>
        </div>
    );
  }
}
