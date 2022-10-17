import NavBar from '../components/navbar'
import Footer from '../components/footer'
import React, { useEffect } from 'react';
import ReactGA from 'react-ga';

export default function Home(){
    useEffect (() => {ReactGA.pageview("A-propos");}, []);
    return (
        <div>
            <div>
                {
                    <NavBar/>
                }
            </div>
            <div>
                <Footer/>
            </div>
        </div>
    )
}