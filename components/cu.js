import React from 'react'
import axios from 'axios'
import Image from 'next/image';
import CardCC from './cardCC';
import MapBis from '../components/mapBis';
import {Helmet} from "react-helmet";

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
                {/*
                    <h2 className="mb-4 pt-4 text-xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">Hiver</h2>
                
                    <p className="font-light text-center text-gray-500 dark:text-gray-400 sm:text-l">{concess.dateHiver}.</p>
                */}
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
        return (
            <div className=''>
                {
                this.state.concess.map((concess) => (
                    <div>
                        {
                            useEffect (() => {ReactGA.pageview("Concession unique" + concess.libelle);}, [])
                        }
                        <Helmet>
                            <title>DG8 Camping-car - {concess.libelle}</title>
                            <meta name="description" content="Découvrez tous nos véhicules neufs et d'occasions. Plusieurs modèles vous sont proposés afin que vous trouviez la marque qui vous correspond !  "/>
                        </Helmet>
                        <div>
                            <body class="">
                                <div class="relative">
                                    <Image alt='banniere concession' src={"/bannTest.png"} layout={"responsive"} objectFit={"fill"} height={150} width={1500}/>
                                    {
                                    //    <img alt='banniere concession' src={"/bannTest.png"} />
                                    }
                                    <h1 class="absolute text-xl md:text-2xl lg:text-5xl text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                                        {concess.libelle}
                                    </h1>
                                </div>
                            </body>
                        </div>

                        <div className='px-8 pb-8 sm:px-16 md:px-24 xl:px-36 '>
                            <div className='flex flex-wrap'>
                                <div className='w-full sm:w-full md:w-full xl:w-2/3 sm:pt-12 pt-16'>
                                    <IsThereDesc desc={concess.desc1}/>
                                    <IsThereDesc desc={concess.desc2}/>
                                    <IsThereTitle fonted={concess.fonted1}/>
                                    <IsThereDesc desc={concess.desc3}/>
                                    <IsThereDesc desc={concess.desc4}/>
                                    <IsThereDescHref ref={concess.rs1} lib={concess.libellers1} desc={concess.desc5}/>
                                    <IsThereTitle fonted={concess.fonted2}/>
                                    <IsThereDesc desc={concess.desc6}/>
                                    <IsThereTitle fonted={concess.fonted3}/>
                                    <IsThereDesc desc={concess.desc7}/>
                                    <IsThereTitle fonted={concess.fonted4}/>
                                    <IsThereDesc desc={concess.desc8}/>
                                    <IsThereDesc desc={concess.desc9}/>
                                    <IsThereRs rs2={concess.rs2} rs3={concess.rs3} rs4={concess.rs4} libellers2={concess.libellers2} libellers3={concess.libellers3} libellers4={concess.libellers4}/>
                                </div>
                                <div className='w-full sm:w-full md:w-full xl:w-1/3 sm:pt-12 pt-16 pb-16'>
                                    <div className='p-8 pr-16'>
                                        <div className='p-4 border border-gray-200 rounded-lg shadow-lg'>
                                            <Image alt='Logo concession' src={concess.linkIMG2Concess} objectFit={"cover"} layout={"responsive"} height={150} width={250} className={'rounded-xl'}/>
                                        </div>
                                    </div>
                                    <div className='lg:pl-32'>
                                        <div className='p-4 border border-gray-200 rounded-lg shadow-lg'>
                                            <Image alt='Logo concession' src={concess.linkIMGConcess} className={'rounded-xl'} objectFit={"contain"} layout={"responsive"} height={150} width={400}/>
                                        </div>
                                    </div>
                                </div>
                                <div className='w-full pb-8 md:pb-0 md:w-1/2'>
                                    <h2 className="pt-8 mb-4 text-2xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">Nos horaires</h2>
                                    
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
                                <div className='w-full md:w-1/2'>
                                    <MapBis concess={concess.libelle} latitude={concess.latitude} longitude={concess.longitude}/>
                                </div>
                            </div>
                        </div>

                            
                        <div>
                            <h2 className="pb-4 mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
                                <IsThereStock libelle={concess.libelle} ccs={this.state.ccs}/>
                            </h2>
                        </div>
                        <div>
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
                                            )
                                        }
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