import { useEffect } from "react";
import HomePage from "../components/home"
import React from "react"
import ReactGA from 'react-ga';

//const { generateRobotText } = require("react-seo-robotstxt");

export default function Home(){
    useEffect (() => {ReactGA.pageview("Accueil");}, []);


    //generateRobotText();

    return (
      <div>
        
        <HomePage/>
      </div>
    )
}
