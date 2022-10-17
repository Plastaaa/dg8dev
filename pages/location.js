import NavBar from '../components/navbar'
import Footer from '../components/footer'
import ContactLoc from "../components/contactLoc"
import React, { useEffect } from 'react';
import ReactGA from 'react-ga';

export default function Home(){
    useEffect (() => {ReactGA.pageview("Location");}, []);
    return (
        <div className='h-screen'>
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