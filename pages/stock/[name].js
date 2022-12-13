import VehiculeUnique from "../../components/vu"
import React from 'react';
import Script from "next/script";

export default class Home extends React.Component{
    componentDidMount(){
        const script = document.createElement("script");
        script.src = "https://staging.boxauto.bnpparibas-pf.com/o/BoxAutoNG-Theme/js/export/staging/ajax.js";
        script.async = false;
        document.head.appendChild(script)
        const script2 = document.createElement("script");
        script2.src = "https://staging.boxauto.bnpparibas-pf.com/o/BoxAutoNG-Theme/js/export/rx.min.js";
        script2.async = false;
        document.head.appendChild(script2)
        
    }

    render(){
        return (
            <div>
                <VehiculeUnique/>
            </div>
        )
    }
}