import VehiculeUnique from "../components/vu"
import React from 'react';
import {Route, Link, Routes, useLocation} from 'react-router-dom';
import NavBar from '../components/navbar'
import Footer from '../components/footer'

export default function Home(props){

    return (
        <div>
            <div>
                {
                    <NavBar/>
                }
            </div>
            <VehiculeUnique/>
            <div>
                <Footer/>
            </div>
        </div>
    )
}