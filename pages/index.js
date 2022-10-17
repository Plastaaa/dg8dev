import { useEffect } from "react";
import HomePage from "../components/home"
import React from "react"
import ReactGA from 'react-ga';

export default function Home(){
    useEffect (() => {ReactGA.pageview("Accueil");}, []);

    return (
      <div>
        <HomePage/>
      </div>
    )
}
