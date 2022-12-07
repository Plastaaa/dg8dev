import VehiculeUnique from "../../components/vu"
import React from 'react';
import Script from "next/script";

export default function Home(props){

    return (
        <div>
            <Script strategy='lazyOnload' src="https://staging.boxauto.bnpparibas-pf.com/o/BoxAutoNG-Theme/js/export/rx.min.js"/>
            <Script strategy='lazyOnload' src="https://staging.boxauto.bnpparibas-pf.com/o/BoxAutoNG-Theme/js/export/staging/ajax.js"/>
            <VehiculeUnique/>
        </div>
    )
}