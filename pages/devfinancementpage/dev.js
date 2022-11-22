import NavBar from '../../components/navbar'
import Footer from '../../components/footer'
import React, { useEffect } from 'react';
import DevStock from '../../components/dashboard/devfinancement/stock'

export default function Home(){
    return (
        <div>
            <div>
                {
                    <NavBar/>
                }
            </div>
            <div className='pt-10'>
                <DevStock/>
            </div>
            <div>
                <Footer/>
            </div>
        </div>
    )
}