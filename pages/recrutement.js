import NavBar from '../components/navbar'
import Footer from '../components/footer'
import Recrutement from '../components/recrutement'
import React, { useEffect } from 'react';
import ReactGA from 'react-ga';
import {Helmet} from "react-helmet";

export default function Home(){
    useEffect (() => {ReactGA.pageview("Recrutement");}, []);
    return (
        <div>
            <Helmet>
                <title>DG8 Camping-cars - Rectrutement</title>
                <meta name="description" content="DG8 camping-car recrute ! Prenez-contact avec notre équipe pour nous parler de votre projet et discuter avec nous. "/>
            </Helmet>
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