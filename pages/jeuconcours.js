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
                <title>DG8 Camping-cars - Calendrier de l'Avent</title>
                <meta name="description" content="DG8 camping car organise un jeu concours qui vous permettra de gagner des centaines de cadeaux juste avant les fêtes !"/>
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