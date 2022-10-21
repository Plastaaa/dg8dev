import Stock from "../components/stock"
import NavBar from '../components/navbar'
import Footer from '../components/footer'
import React, { useEffect } from 'react';
import ReactGA from 'react-ga';


export default function Home(){
    useEffect (() => {ReactGA.pageview("Stock");}, []);
    return (
        <div>
            <meta name="description" content="Choisissez la marque de camping car qui vous correspond et découvrez tous nos véhicules pour conduire confortablement . "/>
            <NavBar/>
            <Stock/>
            <Footer/>
        </div>
    )
}