import NavBar from '../components/navbar'
import Footer from '../components/footer'
import Groupe from "../components/groupe"
import React, { useEffect } from 'react';
import ReactGA from 'react-ga';
import { MetaTags } from 'react-meta-tags';

export default function Home(){
    useEffect (() => {ReactGA.pageview("LeGroupeDavidGerbier");}, []);
    return (
        <div>
            <MetaTags>
                <title>DG8 Camping-cars - Groupe David Gerbier</title>
                <meta name="description" content="Spécialiste dans le secteur automobile, le groupe Gerbier s'est développer il y a 10ans dans les véhicules de loisir et créé la filiale DG8 camping-car."/>
                <meta property="og:title" content="DG8 Camping-cars - Groupe David Gerbier" />
                {//<meta property="og:image" content="path/to/image.jpg" />
                }
            </MetaTags>
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