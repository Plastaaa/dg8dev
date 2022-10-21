import NavBar from '../components/navbar'
import Footer from '../components/footer'
import Marques from '../components/nosMarques'
import React, { useEffect } from 'react';
import ReactGA from 'react-ga';

export default function Home(){
    useEffect (() => {ReactGA.pageview("Marques");}, []);
    return (
        <div>
            <meta name="description" content="DG8 camping-car à su depuis sa création se créer un réseaux, plus de quarante marques lui font confiance. Découvrez toutes nos marques partenaires. "/>
            <div>
                {
                    <NavBar/>
                }
            </div>
            <div>
                <Marques/>
            </div>
            <div>
                <Footer/>
            </div>
        </div>
    )
}