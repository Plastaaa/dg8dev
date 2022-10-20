import NavBar from '../components/navbar'
import Footer from '../components/footer'
import React, { useEffect } from 'react';
import ReactGA from 'react-ga';
import Groupe from '../components/groupe';

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
                <Groupe/>
            </div>
            <div>
                <Footer/>
            </div>
        </div>
    )
}