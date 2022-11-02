import React from 'react'
import axios from 'axios'
import Image from 'next/image';
import CardCC from './cardCC';
import MapBis from '../components/mapBis';
import { MetaTags } from 'react-meta-tags';

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

function IsThereDesc(props){
    if(props.desc1 == ""){
        return ("")
    }else if(props.desc2 == ""){
        return(props.desc1 + " ")
    }else if(props.desc3 == ""){
        return(
            <div className='sm:pt-4 pt-4 px-16'>
                {props.desc1}
                    <br></br><br></br>
                {props.desc2}
            </div>
        )
    }else if(props.desc4 == ""){
        return(
            <div className='sm:pt-4 pt-4'>
                {props.desc1}
                <br></br><br></br>
                {props.desc2}
                <br></br><br></br>
                {props.desc3}
            </div>
        )
    }else{
        return(
            <div className='sm:pt-4 pt-4'>
                {props.desc1}
                <br></br><br></br>
                {props.desc2}
                <br></br><br></br>
                {props.desc3}
                <br></br><br></br>
                {props.desc4}
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
                        <MetaTags>
                            <title>DG8 Camping-car - {concess.libelle}</title>
                            <meta name="description" content="Découvrez tous nos véhicules neufs et d'occasions. Plusieurs modèles vous sont proposés afin que vous trouviez la marque qui vous correspond !  "/>
                            <meta property="og:title" content="DG8 Camping-car" />
                            {//<meta property="og:image" content="path/to/image.jpg" />
                            }
                        </MetaTags>
                        <div>
                            <body class="">
                                <div class="relative">
                                    <img alt='banniere concession' src={"/bannTest.png"} />
                                    <h1 class="absolute text-5xl text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                                        {concess.libelle}
                                    </h1>
                                </div>
                            </body>
                        </div>

                        <div className='px-8 pb-8 sm:px-16 md:px-24 xl:px-36 '>
                            <div className='flex flex-wrap'>
                                <div className='w-full sm:w-full md:w-full xl:w-2/3 sm:pt-12 pt-16'>
                                    <p className='pl-4'>{concess.desc1}</p>
                                    <br></br>
                                    <p className='pl-4'>{concess.desc2}</p>
                                    <br></br>
                                    <h2 className="mb-4 text-xl tracking-tight font-bold text-gray-900 dark:text-white">{concess.fonted1}</h2>
                                    <p className='pl-4'>{concess.desc3}</p>
                                    <br></br>
                                    <p className='pl-4'>{concess.desc4}</p>
                                    <br></br>
                                    <p className='pl-4'>{concess.desc5}<a className='font-bold hover:text-green-700' href={concess.rs1}>{concess.libellers1}</a></p>
                                    <br></br>
                                    <h2 className="mb-4 text-xl tracking-tight font-bold text-gray-900 dark:text-white">{concess.fonted2}</h2>
                                    <p className='pl-4'>{concess.desc6}</p>
                                    <br></br>
                                    <h2 className="mb-4 text-xl tracking-tight font-bold text-gray-900 dark:text-white">{concess.fonted3}</h2>
                                    <p className='pl-4'>{concess.desc7}</p>
                                    <br></br>
                                    <h2 className="mb-4 text-xl tracking-tight font-bold text-gray-900 dark:text-white">{concess.fonted4}</h2>
                                    <p className='pl-4'>{concess.desc8}</p>
                                    <br></br>
                                    <p className='pl-4'>{concess.desc9}</p>
                                    <ul className='pl-8'>
                                        <li><a className='font-bold hover:text-green-700' href={concess.rs2}>{concess.libellers2}</a></li>
                                        <li><a className='font-bold hover:text-green-700' href={concess.rs3}>{concess.libellers3}</a></li>
                                        <li><a className='font-bold hover:text-green-700' href={concess.rs4}>{concess.libellers4}</a></li>
                                    </ul>
                                </div>
                                <div className='w-full sm:w-full md:w-full xl:w-1/3 sm:pt-12 pt-16 pb-16'>
                                    <div className='p-8 pr-16'>
                                        <div className='p-4 border border-gray-200 rounded-lg shadow-lg'>
                                            <Image alt='Logo concession' src={concess.linkIMG2Concess} objectFit={"cover"} layout={"responsive"} height={150} width={250} className={'rounded-xl'}/>
                                        </div>
                                    </div>
                                    <div className='lg:pl-32'>
                                        <div className='p-4 border border-gray-200 rounded-lg shadow-lg'>
                                            <Image alt='Logo concession' src={concess.linkIMGConcess} className={'rounded-xl'} objectFit={"cover"} layout={"responsive"} height={150} width={400}/>
                                        </div>
                                    </div>
                                </div>
                                <div className='w-1/2'>
                                    <h2 className="mb-4 text-2xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">Nos horaires</h2>
                                    <div className='flex flex-wrap'>
                                        <div className='w-full sm:w-full md:w-full xl:w-1/2'>
                                            <h2 className="mb-4 pt-4 text-xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">Été</h2>
                                            <p className="font-light text-center text-gray-500 dark:text-gray-400 sm:text-l">{concess.dateEte}.</p>
                                            <br></br>
                                            <ul>
                                                <li><p className='text-center'>Lundi : {concess.lundiEte}</p></li>
                                                <li><p className='text-center'>Mardi : {concess.mardiEte}</p></li>
                                                <li><p className='text-center'>Mercredi : {concess.mercrediEte}</p></li>
                                                <li><p className='text-center'>Jeudi : {concess.jeudiEte}</p></li>
                                                <li><p className='text-center'>Vendredi : {concess.vendrediEte}</p></li>
                                                <li><p className='text-center'>Samedi : {concess.samediEte}</p></li>
                                                <li><p className='text-center'>Dimanche : {concess.dimancheEte}</p></li>
                                            </ul>
                                        </div>
                                        <div className='w-full sm:w-full md:w-full xl:w-1/2'>
                                            <h2 className="mb-4 pt-4 text-xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">Hiver</h2>
                                            <p className="font-light text-center text-gray-500 dark:text-gray-400 sm:text-l">{concess.dateHiver}.</p>
                                            <br></br>
                                            <ul>
                                                <li><p className='text-center'>Lundi : {concess.lundi}</p></li>
                                                <li><p className='text-center'>Mardi : {concess.mardi}</p></li>
                                                <li><p className='text-center'>Mercredi : {concess.mercredi}</p></li>
                                                <li><p className='text-center'>Jeudi : {concess.jeudi}</p></li>
                                                <li><p className='text-center'>Vendredi : {concess.vendredi}</p></li>
                                                <li><p className='text-center'>Samedi : {concess.samedi}</p></li>
                                                <li><p className='text-center'>Dimanche : {concess.dimanche}</p></li>
                                            </ul>
                                        </div>
                                    </div>
                                    
                                </div>
                                <div className='w-1/2'>
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