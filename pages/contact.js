import NavBar from '../components/navbar'
import Footer from '../components/footer'
import Contact from '../components/contact'
import React, { useEffect } from 'react';
import ReactGA from 'react-ga';

export default function Home(){
    useEffect (() => {ReactGA.pageview("Contact");}, []);
    return (
        <div>
            <meta name="description" content="Prenez contact avec notre équipe, afin de parler de votre projet d'acquisition ou de vente de véhicule. Elle sera heureuse de répondre à vos questions."/>
            <div>
                {
                    <NavBar/>
                }
            </div>
            <section className="bg-white dark:bg-gray-900">
                <Contact/>
            </section>
            <div>
                <Footer/>
            </div>
        </div>
    )
}