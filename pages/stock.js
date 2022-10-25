import Stock from "../components/stock"
import NavBar from '../components/navbar'
import Footer from '../components/footer'
import React, { useEffect } from 'react';
import ReactGA from 'react-ga';
import { MetaTags } from "react-meta-tags";

export default function Home(){
    useEffect (() => {ReactGA.pageview("Stock");}, []);
    return (
        <div>
            <MetaTags>
                <title>DG8 Camping-cars - Notre stock</title>
                <meta name="description" content="Choisissez la marque de camping car qui vous correspond et découvrez tous nos véhicules pour conduire confortablement . "/>
                <meta property="og:title" content="DG8 Camping-cars - Notre stock" />
                {//<meta property="og:image" content="path/to/image.jpg" />
                }
            </MetaTags>
            <NavBar/>
            <Stock/>
            <Footer/>
        </div>
    )
}