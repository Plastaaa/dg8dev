import NavBar from '../../components/navbar'
import Footer from '../../components/footer'
import React, { useEffect } from 'react';
import ReactGA from 'react-ga';
import ArticleVenture from '../../components/article/venture';
import {Helmet} from "react-helmet";

export default function Home(){
    useEffect (() => {ReactGA.pageview("VENTURE HYMER");}, []);
    return (
        <div>
            <Helmet>
                <title>DG8 Camping-cars - HYMER Venture S</title>
                <meta name="description" content="DG8 camping-car vous propose de découvrir, le tout nouveau HYMER VENTURE S un véhicule d'exception aux courbes anguleuses et futuristes."/>
            </Helmet>
            <div>
            {
                <NavBar/>
            }
            </div>
            <div>
                <ArticleVenture/>
            </div>
            <div>
                <Footer/>
            </div>
        </div>
    )
}