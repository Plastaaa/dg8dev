import React, { useEffect } from 'react'
import axios from 'axios'
import Image from 'next/image';
import CardCC from './cardCC';
import MapBis from '../components/mapBis';
import {Helmet} from "react-helmet";
import ReactGA from 'react-ga'

import nature from "../public/concessionUnique/test.png"
import atelier from "../public/concessionUnique/atelier.png"
import financement from "../public/concessionUnique/tirelire.png"
import rachat from "../public/concessionUnique/cle.png"
import equipe from "../public/concessionUnique/team.png"

function IsThereStock(props){
    const ccs = props.ccs;
    if(ccs == ""){
        return <NoStock/>
    }
    return <Stock libelle={props.libelle}/>
}
function NoStock(props){
    return <p></p>
}
function Stock(props){
    return  (
        <h2 className="pb-8 mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
            Notre stock à {props.libelle}.
        </h2>
    );
}

function IsThereHoraire(props){
    const lundiEte = props.lundiEte;

    var lundi = props.lundi;
    var mardi = props.mardi;
    var mercredi = props.mercredi;
    var jeudi = props.jeudi;
    var vendredi = props.vendredi;
    var samedi = props.samedi;
    var dimanche = props.dimanche;

    var lundiE = props.lundiE;
    var mardiE = props.mardiE;
    var mercrediE = props.mercrediE;
    var jeudiE = props.jeudiE;
    var vendrediE = props.vendrediE;
    var samediE = props.samediE;
    var dimancheE = props.dimancheE;

    var dateEte = props.dateEte;
    var dateHiver = props.dateHiver;

    if(lundiEte == ""){
        return (
            <div className='w-full'>
                <br></br>
                <ul>
                    <li><p className='text-center'>Lundi : {lundi}</p></li>
                    <li><p className='text-center'>Mardi : {mardi}</p></li>
                    <li><p className='text-center'>Mercredi : {mercredi}</p></li>
                    <li><p className='text-center'>Jeudi : {jeudi}</p></li>
                    <li><p className='text-center'>Vendredi : {vendredi}</p></li>
                    <li><p className='text-center'>Samedi : {samedi}</p></li>
                    <li><p className='text-center'>Dimanche : {dimanche}</p></li>
                </ul>
            </div>
        )
    }else{
        return(
            <div className='flex flex-wrap'>
                <div className='w-full sm:w-full md:w-full xl:w-1/2'>
                        <h2 className="mb-4 pt-4 text-xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">Hiver</h2>
                        <p className="font-light text-center text-gray-500 dark:text-gray-400 sm:text-l">{dateHiver}.</p>
                    <br></br>
                    <ul>
                        <li><p className='text-center'>Lundi : {lundi}</p></li>
                        <li><p className='text-center'>Mardi : {mardi}</p></li>
                        <li><p className='text-center'>Mercredi : {mercredi}</p></li>
                        <li><p className='text-center'>Jeudi : {jeudi}</p></li>
                        <li><p className='text-center'>Vendredi : {vendredi}</p></li>
                        <li><p className='text-center'>Samedi : {samedi}</p></li>
                        <li><p className='text-center'>Dimanche : {dimanche}</p></li>
                    </ul>
                </div>
                <div className='w-full sm:w-full md:w-full xl:w-1/2'>
                    <h2 className="mb-4 pt-4 text-xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">Été</h2>
                    <p className="font-light text-center text-gray-500 dark:text-gray-400 sm:text-l">{dateEte}.</p>
                    <br></br>
                    <ul>
                        <li><p className='text-center'>Lundi : {lundiE}</p></li>
                        <li><p className='text-center'>Mardi : {mardiE}</p></li>
                        <li><p className='text-center'>Mercredi : {mercrediE}</p></li>
                        <li><p className='text-center'>Jeudi : {jeudiE}</p></li>
                        <li><p className='text-center'>Vendredi : {vendrediE}</p></li>
                        <li><p className='text-center'>Samedi : {samediE}</p></li>
                        <li><p className='text-center'>Dimanche : {dimancheE}</p></li>
                    </ul>
                </div>
            </div>
        )
    }
}

function IsThereDesc(props){
    const desc = props.desc;
    if(desc == ""){
        return ("");
    }else{
        return(
            <div>
                <br></br>
                <p className='pl-4'>{desc}</p>
            </div>
        )
    }
}

function IsThereRs(props){
    const rs2 = props.rs2;
    const rs3 = props.rs3;
    const rs4 = props.rs4;

    if(rs2 == ""){
        return("")
    }else if(rs3 == "" && rs2 == ""){
        return("")
    }else if(rs3 == "" && rs2 == "" && rs4 == ""){
        return("")
    }else{
        return(
            <ul className='pl-8'>
                <li><a className='font-bold hover:text-green-700' href={rs2}>{props.libellers2}</a></li>
                <li><a className='font-bold hover:text-green-700' href={rs3}>{props.libellers3}</a></li>
                <li><a className='font-bold hover:text-green-700' href={rs4}>{props.libellers4}</a></li>
            </ul>
        )
    }
}

function IsThereTitle(props){
    const fonted = props.fonted;

    if(fonted == ""){
        return ("")
    }else{
        return (
            <div>
                <br></br>
                <h2 className="mb-4 text-xl tracking-tight font-bold text-gray-900 dark:text-white">{fonted}</h2>
            </div>
        )
    }
}

function IsThereDescHref(props){
    const ref = props.ref;
    const lib = props.lib;
    const desc = props.desc;

    if(desc == ""){
        return('')
    }else{
        return(
            <div>
                <br></br>
                <p className='pl-4'>{desc}<a className='font-bold hover:text-green-700' href={ref}>{lib}</a></p>
            </div>
        )
    }
}

export default class ConcessionUnique extends React.Component {
    componentDidMount() {
        var splitted = window.location.pathname.split('/')[1];
        var splittedSquare = splitted.split('-')[0];
        axios.get(`https://nunesaccount.alwaysdata.net/APIDG8/getConcessByName.php?concess=${splittedSquare}`)
          .then(res => {
            const concess = res.data;
            this.setState({ concess });
        })
        axios.get(`https://nunesaccount.alwaysdata.net/APIDG8/getAllCCByConcess.php?concess=${splittedSquare}`)
            .then(res => {
                const ccs = res.data;
                this.setState({ ccs });
            })
    }
    state = {
        concess: [],
        ccs: [],
    }

    render() {
        try {
            ReactGA.pageview("Concession unique - " + this.state.concess[0].societe)
        } catch (error) {
            console.log(error)
        }

        return (
            <div className=''>
                {
                this.state.concess.map((concess) => (
                    <div>
                        <Helmet>
                            <title>DG8 Camping-car - {concess.libelle}</title>
                            <meta name="description" content="Découvrez tous nos véhicules neufs et d'occasions. Plusieurs modèles vous sont proposés afin que vous trouviez la marque qui vous correspond !  "/>
                        </Helmet>
                        <div>
                        {
                            /*

                            <div class="e0_90">
                                <div class="e0_91">
                                    <div class="e0_92">

                                    </div>
                                    <span class="e0_93">
                                    Financement
                                    </span>
                                    <div class="e0_94">

                                    </div>
                                </div>
                                <div class="e0_95">
                                    <div  class="e0_96">

                                    </div>
                                    <span class="e0_97">
                                    Atelier
                                    </span>
                                    <div class="e0_98">

                                    </div>
                                </div>
                                <div class="e0_99">
                                    <div class="e0_100">

                                    </div>
                                    <span class="e0_101">
                                    Atout 3
                                    </span>
                                    <div class="e0_102">

                                    </div>
                                </div>
                                <div class="e0_103">
                                    <div class="e0_104">

                                    </div>
                                    <span class="e0_105">
                                    Atout 4
                                    </span>
                                    <div class="e0_106">

                                    </div>
                                </div>
                                <div class="e0_74">

                                </div>
                                
                                <div class="e0_75">

                                </div>
                                <div class="e6_2">

                                </div>
                                <div class="e0_79">
                                    <Image width={350} height={350} src={concess.linkIMGConcess}/>
                                    {
                                        console.log(concess.linkIMGConcess)
                                    }

                                </div>
                                <div class="e0_80">
                                    <div  class="e0_81">

                                    </div>
                                    <div class="e0_82">
                                        <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" class="svgwhite" clip-rule="evenodd">
                                            <path d="M12 0c6.623 0 12 5.377 12 12s-5.377 12-12 12-12-5.377-12-12 5.377-12 12-12zm0 1c6.071 0 11 4.929 11 11s-4.929 11-11 11-11-4.929-11-11 4.929-11 11-11zm-3 5.753l6.44 5.247-6.44 5.263.678.737 7.322-6-7.335-6-.665.753z"/>
                                        </svg>                                        
                                    </div>
                                    <span  class="e0_85">
                                        Voir le stock
                                    </span>
                                </div>
                                <span  class="e0_88">
                                    {concess.libelle}
                                </span>
                                <div>
                                    <p>
                                        coucou
                                    </p>
                                </div>
                                </div>
                                */
                        }
                        </div>
                            <div className='flex flex-wrap shadow-xl border-b-2 border-gray-300'>
                                <div className='w-2/5 bg-green-800'>
                                    <Image objectFit={"cover"} height={800} width={800} layout={"responsive"} src={nature}/>
                                </div>
                                <div className='w-3/5 bg-orange-100'>
                                    
                                </div>
                            </div>
                            <div className="absolute h-72 w-full text-sm md:text-xl lg:text-2xl text-gray top-56">
                                <div className='flex flex-wrap '>
                                    <div className='w-1/4'>

                                    </div>
                                    <div className='w-1/4'>
                                        <div>
                                            <Image className={"rounded-full bg-white"} src={concess.linkIMGConcess} height={400} width={400} alt={"Image camping car"} layout={"intrinsic"}/>
                                        </div>
                                    </div>
                                    <div className='w-1/4 pt-8'>
                                        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">{concess.libelle}</h2>
                                        <p className="mb-8 lg:mb-8 font-light text-gray-500 dark:text-gray-400 sm:text-xl">{concess.desc1}</p>
                                    </div>
                                </div>
                            </div>

                            <div className='pt-8 pb-8'>
                                <div className='flex flex-wrap'>
                                    <div className='w-1/6 rounded-xl'>

                                    </div>
                                    <div className='w-1/6 px-8 py-4 content-center'>
                                        <a href='./atelier'>
                                            <div className='bg-green-800 w-full rounded-2xl text-white pb-2'>
                                                <p className="pt-2 font-bold text-center sm:text-xl">Atelier</p>
                                                <div className='pt-2 text-center'>
                                                    <div className='rounded-full'>
                                                        <Image className={"rounded-full bg-white border-2 border-black"} src={atelier} height={100} width={100} alt={"Image camping car"} layout={"fixed"}/>
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                    <div className='w-1/6 px-8 py-4 content-center'>
                                        <a href='./article/financement'>
                                            <div className='bg-green-800 w-full rounded-2xl text-white pb-2'>
                                                <p className="pt-2 font-bold text-center sm:text-xl">Financement</p>
                                                <div className='pt-2 text-center'>
                                                    <div className='rounded-full'>
                                                        <Image className={"rounded-full bg-white border-2 border-black"} src={financement} height={100} width={100} alt={"Image camping car"} layout={"fixed"}/>
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                    <div className='w-1/6 px-8 py-4 content-center'>
                                        <a href='./rachat-cash'>
                                            <div className='bg-green-800 w-full rounded-2xl text-white pb-2'>
                                                <p className="pt-2 font-bold text-center sm:text-xl">Rachat Cash</p>
                                                <div className='pt-2 text-center'>
                                                    <div className='rounded-full'>
                                                        <Image className={"rounded-full bg-white border-2 border-black"} src={rachat} height={100} width={100} alt={"Image camping car"} layout={"fixed"}/>
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                    <div className='w-1/6 px-8 py-4 content-center'>
                                        <a href='./'>
                                            <div className='bg-green-800 w-full rounded-2xl text-white pb-2'>
                                                <p className="pt-2 font-bold text-center sm:text-xl">Équipe à l'écoute</p>
                                                <div className='pt-2 text-center'>
                                                    <div className='rounded-full'>
                                                        <Image className={"rounded-full bg-white border-2 border-black"} src={equipe} height={100} width={100} alt={"Image camping car"} layout={"fixed"}/>
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                    <div className='w-1/6 rounded-xl '>

                                    </div>
                                </div>
                            </div>

                            <div className='flex flex-wrap'>

                                <div className='w-2/3 pl-32 pr-4'>
                                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">{concess.fonted1}</h2>
                                    <p className="mb-8 lg:mb-8 font-light text-justify text-gray-500 dark:text-gray-400 sm:text-xl indent-8">{concess.desc1 + " " + concess.desc2}</p>
                                </div>
                                <div className='w-1/3 pr-32 pb-8'>
                                    <Image className={"rounded-xl"} src={concess.img1} objectFit={"cover"} alt={"Image camping car"} height={1000} width={2000} layout={"responsive"}/>
                                </div>

                                <div className='w-1/3 pl-32 pb-8'>
                                    <Image className={"rounded-xl"} src={concess.img2} objectFit={"cover"} alt={"Image camping car"} height={1000} width={2000} layout={"responsive"}/>
                                </div>
                                <div className='w-2/3 pr-32 pl-4'>
                                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">{concess.fonted2}</h2>
                                    <p className="mb-8 lg:mb-8 font-light text-justify text-gray-500 dark:text-gray-400 sm:text-xl indent-8">{concess.desc3 + " " + concess.desc4}</p>
                                </div>

                                <div className='w-2/3 pl-32 pr-4'>
                                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">{concess.fonted3}</h2>
                                    <p className="mb-8 lg:mb-8 font-light text-justify text-gray-500 dark:text-gray-400 sm:text-xl indent-8">{concess.desc5 + " " + concess.desc6}</p>
                                </div>
                                <div className='w-1/3 pr-32 pb-8'>
                                    <Image className={"rounded-xl"} src={concess.img3} objectFit={"cover"} alt={"Image camping car"} height={1000} width={2000} layout={"responsive"}/>
                                    
                                    {
                                        //<Image className={"rounded-3xl bg-white"} src={concess.img3} height={300} width={300} alt={"Image camping car"} layout={"intrinsic"}/>
                                    }
                                </div>
                            </div>

                            <div className='flex flex-wrap'>
                                <div className='w-1/2 pb-10'>
                                    <h2 className="mb-4 text-4xl tracking-tight text-center font-extrabold text-gray-900 dark:text-white">Nos horaires :</h2>
                                    <IsThereHoraire 
                                        lundiEte={concess.lundiEte}
                                        lundi={concess.lundi}
                                        mardi={concess.mardi}
                                        mercredi={concess.mercredi}
                                        jeudi={concess.jeudi}
                                        vendredi={concess.vendredi}
                                        samedi={concess.samedi}
                                        dimanche={concess.dimanche}
                                        dateEte={concess.dateEte}
                                        dateHiver={concess.dateHiver}
                                        lundiE={concess.lundiEte}
                                        mardiE={concess.mardiEte}
                                        mercrediE={concess.mercrediEte}
                                        jeudiE={concess.jeudiEte}
                                        vendrediE={concess.vendrediEte}
                                        samediE={concess.samediEte}
                                        dimancheE={concess.dimancheEte}
                                    />
                                </div>
                                <div className='w-1/2'>
                                    <div className='pr-16 pb-10'>
                                        <h2 className="mb-4 text-4xl tracking-tight text-center font-extrabold text-gray-900 dark:text-white">Nous trouver :</h2>
                                        <MapBis concess={concess.libelle} latitude={concess.latitude} longitude={concess.longitude}/>
                                    </div>
                                </div>
                            </div>
                            
                            <div>
                                <h2 className="w-full mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
                                    <IsThereStock libelle={concess.libelle} ccs={this.state.ccs}/>
                                </h2>
                            </div>
                            <div className='px-16'>
                                <div className="flex flex-wrap overflow-hidden">
                                    <div className="w-full overflow-hidden">
                                        <div className="flex flex-wrap -mx-1 overflow-hidden">
                                            {
                                                this.state.ccs.map(cc =>
                                                    <div className="w-screen items-center sm:w-1/2 md:w-1/2 xl:w-1/4 p-4">
                                                        <CardCC 
                                                            refe={cc.RefDMS}
                                                            marque={cc.marque} 
                                                            modele={cc.modele} 
                                                            ver={cc.ver} 
                                                            prix={cc.prixTTC} 
                                                            photo={cc.linkIMG} 
                                                            km={cc.kilometrage} 
                                                            bdv={cc.boitedevitesse}
                                                            etat={cc.etat}
                                                            famille={cc.famille}
                                                            gamme={cc.gamme}
                                                            annee={cc.année}
                                                            premiereMain={cc.premiereMain}
                                                        />
                                                    </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                            
                        ))
                        }
                    </div>
        )
    }
}