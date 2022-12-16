import Stock from "../components/stock"
import NavBar from '../components/navbar'
import Footer from '../components/footer'
import React, { useEffect } from 'react';
import ReactGA from 'react-ga';
import {Helmet} from "react-helmet";

export default function Home(){
    useEffect (() => {ReactGA.pageview("Stock");}, []);
    return (
        <div>
            <Helmet>
                <title>DG8 Camping-cars - Notre stock</title>
                <meta name="description" content="Choisissez la marque de camping car qui vous correspond et découvrez tous nos véhicules pour conduire confortablement . "/>
            </Helmet>
            <NavBar/>
            <Stock/>
            <Footer/>
        </div>
    )
}