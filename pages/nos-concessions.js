import NavBar from '../components/navbar'
import Footer from '../components/footer'
import Concessions from '../components/concessions'
import React, { useEffect } from 'react';
import ReactGA from 'react-ga';

export default function Home(){
    useEffect (() => {ReactGA.pageview("Nos Concessions");}, []);
    return (
        <div>
            <meta name="description" content="Découvrez nos différentes concessions, plus d'une dizaines situées de la frontière Suisse jusqu'à Lyon. Contactez nous pour plus d'informations. "/>
            <div>
                {
                    <NavBar/>
                }
            </div>
            <div className='pt-10'>
                <Concessions/>
            </div>
            <div>
                <Footer/>
            </div>
        </div>
    )
}