import NavBar from '../components/navbar'
import Footer from '../components/footer'
import RDVAtelier from "../components/rdvAtelier"
import React, { useEffect } from 'react';
import ReactGA from 'react-ga';
import {Helmet} from "react-helmet";
import img2 from './../public/logo/groupe/gdglogo.png'

export default function Home(){
    useEffect (() => {ReactGA.pageview("Conditions générales de participation");}, []);
    return (
        <div>
            <Helmet>
                <title>DG8 Camping-cars - Conditions de participation</title>
                <meta name="description" content="Conditions de participation au grand jeu de noel DG8 Camping-car"/>
                <meta property="og:url"           content="https://www.dg8campingcar.com/conditions-participation"/>
                <meta property="og:type"          content="website"/>
                <meta property="og:title"         content="DG8 Camping-car : Grand jeu de Noël"/>
                <meta property="og:description"   content="Conditions de participation du grand de Noël"/>
                <meta property="og:image"         content={img2}/>
            </Helmet>
            <div>
                {
                    <NavBar/>
                }
            </div>

            <div className='pt-10 px-16 pb-8'>
                <div className='border border-gray border-1 rounded rounded-lg shadow-lg p-12'>
                    <h3 className="text-2xl font-bold text-center">
                        Conditions générales de participation
                    </h3>
                    <p className="py-4">
                        Les informations recueillies sur ce formulaire sont enregistrées dans un fichier informatisé par C.A.B.+ au 40 Rue Ronsard pour notre calendrier de l'avent. La base légale du traitement est le consentement.
                    </p>
                    <p className='py-4'>
                        Les données collectées seront communiquées aux seuls destinataires suivants : C.A.B.+.
                    </p>
                    <p className='py-4'>
                        Les données sont conservées pendant 1 an.
                    </p>
                    <p className='py-4'>
                        Vous pouvez accéder aux données vous concernant, les rectifier, demander leur effacement ou exercer votre droit à la limitation du traitement de vos données. Vous pouvez retirer à tout moment votre consentement au traitement de vos données ; Vous pouvez également vous opposer au traitement de vos données.
                    </p>
                    <p className='py-4'>
                        Consultez le site cnil.fr pour plus d’informations sur vos droits.
                    </p>
                    <p className='py-4'>
                        Pour exercer ces droits ou pour toute question sur le traitement de vos données dans ce dispositif, vous pouvez contacter (le cas échéant, notre délégué à la protection des données ou le service chargé de l’exercice de ces droits) :
                    </p>
                    <p className='py-4'>
                        <ul>
                            <li>Voie postale : C.A.B.+, 40 Rue Ronsard, 64000 Pau</li>
                            <li>Voie électronique : contact@dg8campingcar.com</li>
                            <li>Voie télephonique : 09 69 39 69 73</li>
                        </ul>
                    </p>
                    <p className='py-4'>
                        Si vous estimez, après nous avoir contactés, que vos droits « Informatique et Libertés » ne sont pas respectés, vous pouvez adresser une réclamation à la CNIL.
                    </p>
                </div>
                
            </div>
                
            <div>
                <Footer/>
            </div>
        </div>
    )
}