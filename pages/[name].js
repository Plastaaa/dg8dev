import ConcessionUnique from "../components/cu"
import React from 'react';
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

            <ConcessionUnique/>

            <div>
                <Footer/>
            </div>
        </div>
    )
}