import NavBar from '../components/navbar'
import Footer from '../components/footer'
import Contact from '../components/contact'
import React, { useEffect } from 'react';
import ReactGA from 'react-ga';

export default function Home(){
    useEffect (() => {ReactGA.pageview("Contact");}, []);
    return (
        <div>
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