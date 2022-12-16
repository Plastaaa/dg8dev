import { useEffect } from "react";
import HomePage from "../components/home"
import React from "react"
import ReactGA from 'react-ga';
import {Helmet} from "react-helmet";

//const { generateRobotText } = require("react-seo-robotstxt");

export default class Home extends React.Component{
    //useEffect (() => {ReactGA.pageview("Accueil");}, []);
    //generateRobotText();

    componentDidMount(){
      const script = document.createElement("script");
      script.src = "https://boxauto.bnpparibas-pf.com/o/BoxAutoNG-Theme/js/export/ajax.js";
      script.async = false;
      document.head.appendChild(script)
      const script2 = document.createElement("script");
      script2.src = "https://boxauto.bnpparibas-pf.com/o/BoxAutoNG-Theme/js/export/rx.min.js";
      script2.async = false;
      document.head.appendChild(script2)

    }

    render(){
      return (
        <div>
          {
            ReactGA.pageview("Accueil")
          }
          <Helmet>
            <title>DG8 Camping-car</title>
            <meta name="description" content="Découvrez tous nos véhicules neufs et d'occasions. Plusieurs modèles vous sont proposés afin que vous trouviez la marque qui vous correspond !  "/>
          </Helmet>
          <HomePage/>
        </div>
      )
    }
}
