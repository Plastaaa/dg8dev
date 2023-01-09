import Stock from "../components/stock"
import NavBar from '../components/navbar'
import Footer from '../components/footer'
import React, { useEffect } from 'react';
import ReactGA from 'react-ga';
import {Helmet} from "react-helmet";

export default class Home extends React.Component{
    /*componentDidMount(){
        const script = document.createElement("script");
        script.src = "https://boxauto.bnpparibas-pf.com/o/BoxAutoNG-Theme/js/export/ajax.js";
        script.async = false;
        document.head.appendChild(script)
        const script2 = document.createElement("script");
        script2.src = "https://boxauto.bnpparibas-pf.com/o/BoxAutoNG-Theme/js/export/rx.min.js";
        script2.async = false;
        document.head.appendChild(script2)

    }*/

    render(){
        try {
            ReactGA.pageview("Stock")
        } catch (error) {
            console.log(error)
        }
        return (
            <div>
                <Helmet>
                    <title>DG8 Camping-cars - Notre stock</title>
                    <meta name="description" content="Choisissez la marque de camping car qui vous correspond et découvrez tous nos véhicules pour conduire confortablement . "/>
                </Helmet>
                <NavBar/>
                <Stock/>
                <Footer/>
            </div>
        )
    }
}