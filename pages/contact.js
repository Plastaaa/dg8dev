import NavBar from '../components/navbar'
import Footer from '../components/footer'
import Contact from '../components/contact'
import React, { useEffect } from 'react';
import ReactGA from 'react-ga';
import { MetaTags } from 'react-meta-tags';

export default function Home(){
    useEffect (() => {ReactGA.pageview("Contact");}, []);
    return (
        <div>
            <MetaTags>
                <title>DG8 Camping-cars - Contact</title>
                <meta name="description" content="Prenez contact avec notre équipe, afin de parler de votre projet d'acquisition ou de vente de véhicule. Elle sera heureuse de répondre à vos questions."/>
                <meta property="og:title" content="DG8 Camping-cars - Contact" />
                {//<meta property="og:image" content="path/to/image.jpg" />
                }
            </MetaTags>
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