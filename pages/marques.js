import NavBar from '../components/navbar'
import Footer from '../components/footer'
import Marques from '../components/nosMarques'
import React, { useEffect } from 'react';
import ReactGA from 'react-ga';

export default function Home(){
    useEffect (() => {ReactGA.pageview("Marques");}, []);
    return (
        <div>
            <div>
                {
                    <NavBar/>
                }
            </div>
            <div>
                <Marques/>
            </div>
            <div>
                <Footer/>
            </div>
        </div>
    )
}