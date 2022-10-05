import React, { Component } from "react";
import Image from "next/image";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import "@splidejs/splide/dist/css/splide.min.css";
import axios from "axios";

export default class SimpleSlider extends Component {
    componentDidMount() {
        axios.get(`https://nunesaccount.alwaysdata.net/APIDG8/getMarques.php`)
          .then(res => {
            const marque = res.data;
            this.setState({ marque });
        });
    }

    state = {
        marque: [],
    }
    render() {
        return (
            <div>
                <div className="p-0 xl:pt-6 lg:pt-6 md:pt-6 sm:pt-2">
                <Splide
                        options={{
                            type: "loop",
                            rewind: true,
                            gap: "4.5rem",
                            arrows: false,
                            pagination: false,
                            autoplay: true,
                            lazyLoad: false,
                            arrows: true,
                            breakpoints: {
                                8000: {
                                    perPage: 7,
                                
                                },
                                1200: {
                                perPage: 4,
                                
                                },
                                767: {
                                perPage: 3,
                            
                                },
                                640: {
                                perPage: 2,
                            
                                },
                            },
                        }}
                    >
                        {
                            this.state.marque.map(marque =>
                                <SplideSlide>
                                    <div className="flex items-center justify-center h-36">
                                        <Image src={marque.linkIMG} layout={"intrinsic"} height={100} width={300} alt="LOGO MARQUE" />
                                    </div>
                                </SplideSlide>
                            )
                        }
                    </Splide>
                </div>
            </div>
        );
  }
}
