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
                            <title>DG8 Camping-cars - {concess.libelle}</title>
                            <meta name="description" content="Découvrez tous nos véhicules neufs et d'occasions. Plusieurs modèles vous sont proposés afin que vous trouviez la marque qui vous correspond !  "/>
                            <meta property="og:title" content="DG8 Camping-cars" />
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
                        <div className='flex flex-wrap'>
                            <div className='w-full sm:w-1/2 sm:pt-12 pt-16'>
                                {
                                    <IsThereDesc 
                                        desc1={concess.desc1}
                                        desc2={concess.desc2}
                                        desc3={concess.desc3}
                                        desc4={concess.desc4}
                                    />
                                }
                            </div>
                            <div className='w-full sm:w-1/2'>
                                <div className='p-4 pr-8 pt-16'>
                                    {
                                        <Image alt='Logo concession' src={concess.linkIMG} height={350} width={600} className={'rounded-xl'} layout={'responsive'}/>
                                    }
                                </div>
                            </div>
                            {
                                /*
                                <div className='w-full sm:w-1/2 p-4 pr-8 pt-16'>
                                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">Nos points forts</h2>
                                </div>
                                <div className='w-full sm:w-1/2 p-4 pr-8 pt-16'>
                                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">Coordonnées</h2>
                                </div>
                                */
                            }
                            
                            <div className='w-full pb-8 px-8'>
                                <MapBis concess={concess.libelle} latitude={concess.latitude} longitude={concess.longitude}/>
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