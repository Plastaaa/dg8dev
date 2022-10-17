import Stock from "../components/stock"
import NavBar from '../components/navbar'
import Footer from '../components/footer'
import React, { useEffect } from 'react';
import ReactGA from 'react-ga';


export default function Home(){
    useEffect (() => {ReactGA.pageview("Stock");}, []);
    return (
        <div>
            <NavBar/>
            <Stock/>
            <Footer/>
        </div>
    )
}