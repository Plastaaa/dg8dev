import NavBar from '../components/navbar'
import Footer from '../components/footer'
import Groupe from "../components/groupe"
import React, { useEffect } from 'react';
import ReactGA from 'react-ga';

export default function Home(){
    useEffect (() => {ReactGA.pageview("LeGroupeDavidGerbier");}, []);
    return (
        <div>
            <meta name="description" content="Spécialiste dans le secteur automobile, le groupe Gerbier s'est développer il y a 10ans dans les véhicules de loisir et créé la filiale DG8 camping-car."/>
            <div>
                {
                    <NavBar/>
                }
            </div>

            <div className='pt-10'>
                <Groupe/>
            </div>
                
            <div>
                <Footer/>
            </div>
        </div>
    )
}