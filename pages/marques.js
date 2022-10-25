import NavBar from '../components/navbar'
import Footer from '../components/footer'
import Marques from '../components/nosMarques'
import React, { useEffect } from 'react';
import ReactGA from 'react-ga';
import { MetaTags } from 'react-meta-tags';

export default function Home(){
    useEffect (() => {ReactGA.pageview("Marques");}, []);
    return (
        <div>
            <MetaTags>
                <title>DG8 Camping-cars - Marques ditribuées</title>
                <meta name="description" content="DG8 camping-car à su depuis sa création se créer un réseaux, plus de quarante marques lui font confiance. Découvrez toutes nos marques partenaires. "/>
                <meta property="og:title" content="DG8 Camping-cars - Marques ditribuées" />
                {//<meta property="og:image" content="path/to/image.jpg" />
                }
            </MetaTags>
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