import NavBar from '../components/navbar'
import Footer from '../components/footer'
import Recrutement from '../components/recrutement'
import React, { useEffect } from 'react';
import ReactGA from 'react-ga';


export default function Home(){
    useEffect (() => {ReactGA.pageview("Recrutement");}, []);
    return (
        <div>
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