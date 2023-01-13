import NavBar from '../components/navbar'
import Footer from '../components/footer'
import ContactLoc from "../components/contactLoc"
import React, { useEffect } from 'react';
import ReactGA from 'react-ga';
import {Helmet} from "react-helmet";

export default function Home(){
    useEffect (() => {ReactGA.pageview("Location");}, []);
    return (
        <div className='h-screen'>
            <Helmet>
                <title>DG8 Camping-car - Location</title>
                <meta name="description" content="Pour partir en vacances plus sereinement, découvrez notre gamme de camping car en location. Prenez contact pour discuter de votre projet voyage. "/>
            </Helmet>
            <div>
                <NavBar/>
            </div>
            <section>
                <ContactLoc/>
            </section>
            <div>
                <Footer/>
            </div>
        </div>
    )
}