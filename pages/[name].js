import ConcessionUnique from "../components/cu"
import NavBar from '../components/navbar'
import Footer from '../components/footer'
import React, { useEffect } from 'react';
import ReactGA from 'react-ga';

export default function Home(props){
    return (
        <div>
            <div>
            {
                <NavBar/>
            }
            </div>
            <ConcessionUnique/>
            <div>
                <Footer/>
            </div>
        </div>
    )
}