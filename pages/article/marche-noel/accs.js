import NavBar from '../../../components/navbar'
import Footer from '../../../components/footer'
import React, { useEffect } from 'react';
import ReactGA from 'react-ga';
import ArticleMarcheNoel from '../../../components/article/marchenoelaccs';
import {Helmet} from "react-helmet";

export default function Home(){
    useEffect (() => {ReactGA.pageview("MarchéNoel ACCS");}, []);
    return (
        <div>
            <Helmet>
                <title>DG8 Camping-cars - Marché de Noel ACCS</title>
                <meta name="description" content="."/>
            </Helmet>
            <div>
            {
                <NavBar/>
            }
            </div>
            <div>
                <ArticleMarcheNoel/>
            </div>
            <div>
                <Footer/>
            </div>
        </div>
    )
}