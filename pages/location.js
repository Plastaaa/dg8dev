import NavBar from '../components/navbar'
import Footer from '../components/footer'
import ContactLoc from "../components/contactLoc"
import React, { useEffect } from 'react';
import ReactGA from 'react-ga';
import { MetaTags } from 'react-meta-tags';

export default function Home(){
    useEffect (() => {ReactGA.pageview("Location");}, []);
    return (
        <div className='h-screen'>
            <MetaTags>
                <title>DG8 Camping-cars - Location</title>
                <meta name="description" content="Pour partir en vacances plus sereinement, découvrez notre gamme de camping car en location. Prenez contact pour discuter de votre projet voyage. "/>
                <meta property="og:title" content="DG8 Camping-cars - Location" />
                {//<meta property="og:image" content="path/to/image.jpg" />
                }
            </MetaTags>
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