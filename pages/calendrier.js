import NavBar from '../components/navbar'
import Footer from '../components/footer'
import Calendrier from "../components/calendar"
import React, { useEffect } from 'react';
import ReactGA from 'react-ga';
import {Helmet} from "react-helmet";

export default function Home(){
    useEffect (() => {ReactGA.pageview("Calendrier de l'avent");}, []);
    return (
        <div>
            <Helmet>
                <title>DG8 Camping-cars - RDV Atelier</title>
                <meta name="description" content="."/>
            </Helmet>
            <div>
                {
                    <NavBar/>
                }
            </div>

            <div className=''>
                <Calendrier/>
            </div>
                
            <div>
                <Footer/>
            </div>
        </div>
    )
}