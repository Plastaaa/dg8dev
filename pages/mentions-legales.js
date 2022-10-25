import NavBar from '../components/navbar'
import Footer from '../components/footer'
import ML from '../components/mentionslegales'
import Confidentialite from '../components/confidentialite'
import Cookies from '../components/cookies'
import React, { useEffect } from 'react';
import ReactGA from 'react-ga';

export default function Home(){
    useEffect (() => {ReactGA.pageview("Mentions Legales");}, []);
    return (
        <div>
            <title>DG8 Camping-cars - Mentions légales</title>
            <div>
                {
                    <NavBar/>
                }
            </div>
            <div>
                <ML/>
            </div>
            <div>
                <Confidentialite/>
            </div>
            <div>
                <Cookies/>
            </div>
            <div>
                <Footer/>
            </div>
        </div>
    )
}