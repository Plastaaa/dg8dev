import { useEffect } from "react";
import HomePage from "../components/home"
import React from "react"
import ReactGA from 'react-ga';

export default function Home(){
    useEffect (() => {ReactGA.pageview("Accueil");}, []);

    return (
      <div>
        <meta name="description" content="Découvrez tous nos véhicules neufs et d'occasions. Plusieurs modèles vous sont proposés afin que vous trouviez la marque qui vous correspond !  "/>
        <HomePage/>
      </div>
    )
}
