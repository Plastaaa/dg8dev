import NavBar from '../components/navbar'
import Footer from '../components/footer'
import Recrutement from '../components/recrutement'
import React, { useEffect } from 'react';
import ReactGA from 'react-ga';
import { MetaTags } from 'react-meta-tags';

export default function Home(){
    useEffect (() => {ReactGA.pageview("Recrutement");}, []);
    return (
        <div>
            <MetaTags>
                <title>DG8 Camping-cars - Rectrutement</title>
                <meta name="description" content="DG8 camping-car recrute ! Prenez-contact avec notre équipe pour nous parler de votre projet et discuter avec nous. "/>
                <meta property="og:title" content="DG8 Camping-cars - Rectrutement" />
                {//<meta property="og:image" content="path/to/image.jpg" />
                }
            </MetaTags>
            <div>
                {
                    <NavBar/>
                }
            </div>
            <div>
                <Recrutement/>
            </div>
            <div>
                <Footer/>
            </div>
        </div>
    )
}