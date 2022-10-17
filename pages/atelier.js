import NavBar from '../components/navbar'
import Footer from '../components/footer'
import RDVAtelier from "../components/rdvAtelier"
import React, { useEffect } from 'react';
import ReactGA from 'react-ga';

export default function Home(){
    useEffect (() => {ReactGA.pageview("RDV Atelier");}, []);
    return (
        <div>
            <div>
                {
                    <NavBar/>
                }
            </div>

            <div className='pt-10'>
                <RDVAtelier/>
            </div>
                
            <div>
                <Footer/>
            </div>
        </div>
    )
}