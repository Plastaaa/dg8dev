import NavBar from '../components/navbar'
import Footer from '../components/footer'
import Recrutement from '../components/recrutement'
import React, { useEffect } from 'react';
import ReactGA from 'react-ga';


export default function Home(){
    useEffect (() => {ReactGA.pageview("Recrutement");}, []);
    return (
        <div>
            <meta name="description" content="DG8 camping-car recrute ! Prenez-contact avec notre équipe pour nous parler de votre projet et discuter avec nous. "/>
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