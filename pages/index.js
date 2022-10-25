import { useEffect } from "react";
import HomePage from "../components/home"
import React from "react"
import ReactGA from 'react-ga';
import MetaTags from 'react-meta-tags';

export default function Home(){
    useEffect (() => {ReactGA.pageview("Accueil");}, []);

    return (
      <div>
        <MetaTags>
            <title>DG8 Camping-cars</title>
            <meta name="description" content="Découvrez tous nos véhicules neufs et d'occasions. Plusieurs modèles vous sont proposés afin que vous trouviez la marque qui vous correspond !  "/>
            <meta property="og:title" content="DG8 Camping-cars" />
            {//<meta property="og:image" content="path/to/image.jpg" />
            }
        </MetaTags>
        
        <HomePage/>
      </div>
    )
}
