import NavBar from '../components/navbar'
import Footer from '../components/footer'
import RDVAtelier from "../components/rdvAtelier"
import React, { useEffect } from 'react';
import ReactGA from 'react-ga';

export default function Home(){
    useEffect (() => {ReactGA.pageview("RDV Atelier");}, []);
    return (
        <div>
            <meta name="description" content="Pour prendre soins de votre véhicules, prenez rendez-vous avec notre atelier, expert dans le domaine des campings-cars, vans et fourgons. "/>
            <div>
                {
                    <NavBar/>
                }
            </div>

            <div className='pt-10'>
                <RDVAtelier/>
            </div>
                
            <div>
                <Footer/>
            </div>
        </div>
    )
}