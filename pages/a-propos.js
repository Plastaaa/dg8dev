import NavBar from '../components/navbar'
import Footer from '../components/footer'
import React, { useEffect } from 'react';
import ReactGA from 'react-ga';
import Groupe from '../components/groupe';

export default function Home(){
    useEffect (() => {ReactGA.pageview("A-propos");}, []);
    return (
        <div>
            <title>DG8 Camping-cars - A propos</title>
            <meta name="description" content="DG8 camping-car vous propose différents services, tels que la vente de véhicules, d'accessoires, la mise en location ainsi qu'un atelier de professionnel."/>
            <div>
                {
                    <NavBar/>
                }
            </div>
            <div>
                <Groupe/>
            </div>
            <div>
                <Footer/>
            </div>
        </div>
    )
}