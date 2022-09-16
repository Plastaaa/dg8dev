import React from 'react'
import axios from 'axios'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "@splidejs/splide/dist/css/splide.min.css";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import CardCC from './cardCC';
import SlideMarc from './slideMarc';

function IsThereHeight(props){
    const isSet = props.isSet;
    if(isSet == ""){
        return <NoHauteur/>
    }
    return <Hauteur isSet={isSet}/>
}
function NoHauteur(props){
    return <p></p>
}
function Hauteur(props){
    const isSet = props.isSet;
    return  "Hauteur : " + props.isSet + " m"
}

function IsThereWidth(props){
    const isSet= props.isSet;
    if(isSet == ""){
        return <NoLargeur/>
    }
    return <Largeur isSet={isSet}/>
}
function NoLargeur(props){
    return <p></p>
}
function Largeur(props){
    const isSet = props.isSet;
    return  "Largeur : " + props.isSet + " m"
}

function IsThereLenght(props){
    const isSet = props.isSet;
    if(isSet == ""){
        return <NoLongueur/>
    }
    return <Longueur isSet={isSet}/>
}
function NoLongueur(props){
    return <p></p>
}
function Longueur(props){
    const isSet = props.isSet;
    return  "Longueur : " + props.isSet + " m"
}

function IsThereYear(props){
    const isSet = props.isSet;
    if(isSet == ""){
        return <NoYear/>
    }
    return <Year isSet={isSet}/>
}
function NoYear(props){
    return <p></p>
}
function Year(props){
    const isSet = props.isSet;
    return  "Année : " + props.isSet
}

function IsThereRef(props){
    const isSet = props.isSet;
    if(isSet == ""){
        return <NoRef/>
    }
    return <Ref isSet={isSet}/>
}
function NoRef(props){
    return <p></p>
}
function Ref(props){
    const isSet = props.isSet;
    return  "Réference du véhicule : " + props.isSet
}

function IsThereType(props){
    const isSet = props.isSet;
    if(isSet == ""){
        return <NoType/>
    }
    return <Type isSet={isSet}/>
}
function NoType(props){
    return <p></p>
}
function Type(props){
    const isSet = props.isSet;
    return  "Type de véhicule : " + props.isSet
}

function IsThereModel(props){
    const isSet = props.isSet;
    if(isSet == ""){
        return <NoModel/>
    }
    return <Model isSet={isSet}/>
}
function NoModel(props){
    return <p></p>
}
function Model(props){
    const isSet = props.isSet;
    return  "Modèle : " + props.isSet
}

function IsThereConcess(props){
    const isSet = props.isSet;
    if(isSet == ""){
        return <NoConcess/>
    }
    return <Concess isSet={isSet}/>
}
function NoConcess(props){
    return <p></p>
}
function Concess(props){
    const isSet = props.isSet;
    return  "Concession : " + props.isSet
}

function IsThereMileage(props){
    const isSet = props.isSet;
    if(isSet == ""){
        return <NoMileage/>
    }
    return <Mileage isSet={isSet}/>
}
function NoMileage(props){
    return <p></p>
}
function Mileage(props){
    const isSet = props.isSet;
    return  "Kilométrage : " + props.isSet + " km"
}

function IsThereBed(props){
    const isSet = props.isSet;
    if(isSet == ""){
        return <NoBed/>
    }
    return <Bed isSet={isSet}/>
}
function NoBed(props){
    return <p></p>
}
function Bed(props){
    const isSet = props.isSet;
    return  "Type de lit : " + props.isSet + "."
}

export default class VehiculeUnique extends React.Component {
    componentDidMount() {
        axios.get(`http://nunesaccount.alwaysdata.net/APIDG8/getCCDetailById.php?id=${window.location.pathname.split('/')[1]}`)
          .then(res => {
            const campingcar = res.data;
            this.setState({ campingcar });
        })

        axios.get(`http://nunesaccount.alwaysdata.net/APIDG8/getAllVisualsByCC.php?id=${window.location.pathname.split('/')[1]}`)
          .then(res => {
            const imgCC = res.data;
            this.setState({ imgCC });
        })
        
        axios.get(`http://nunesaccount.alwaysdata.net/APIDG8/getAllEquipByCC.php?id=${window.location.pathname.split('/')[1]}`)
          .then(res => {
            const equips = res.data;
            this.setState({ equips });
        })

        axios.get(`http://nunesaccount.alwaysdata.net/APIDG8/get2CCSimi.php?id=${window.location.pathname.split('/')[1]}`)
          .then(res => {
            const ccsSimi = res.data;
            this.setState({ ccsSimi });
        })
    }

    state = {
        campingcar: [],
        imgCC: [],
        equips: [],
        ccsSimi: []
    }

    render() {
        return (
        <div>
            {
            this.state.campingcar.map((cc) => (
                <div>
                <div className="md:flex items-start justify-center py-12 2xl:px-20 md:px-8 px-4">
                    <div className="xl:w-3/6 lg:w-3/5 md:block hidden">
                        {
                            <Splide
                                options={{
                                    type: "loop",
                                    autoplay: true,
                                    heightRatio: 0.7,
                                }}
                                >
                                    {
                                        this.state.imgCC.map((img) => (
                                            <SplideSlide>
                                                <a href={img.linkIMG}>
                                                    <img alt="Image Slider" src={img.linkIMG} layout="responsive"/>
                                                </a>
                                            </SplideSlide>
                                        ))}
                            </Splide>
                        }
                    </div>
                    <div className="md:hidden">
                        {
                            <Splide
                            options={{
                                type: "loop",
                                autoplay: true,
                                heightRatio: 0.7,
                            }}
                            >
                                {
                                    this.state.imgCC.map((img) => (
                                        <SplideSlide>
                                            <a href={img.linkIMG}>
                                                <img alt="Image Slider" src={img.linkIMG} layout="responsive"/>
                                            </a>
                                        </SplideSlide>
                                    ))}
                            
                            </Splide>
                        }
                    </div>
                    <div className="xl:w-2/5 md:w-2/5 lg:ml-8 md:ml-6 md:mt-0 mt-6">
                        <div className="border-b border-gray-200 pb-6">
                            <p className="text-sm leading-none text-gray-600">{cc.famille}</p>
                            <h1
                                className="
                                    lg:text-2xl
                                    text-xl
                                    font-semibold
                                    lg:leading-6
                                    leading-7
                                    text-gray-800
                                    mt-2
                                "
                            >
                                {cc.marque + " " + cc.modele + " " + cc.version}
                            </h1>
                        </div>
                        <div>
                            <p className="text-base leading-4 mt-7 text-gray-600">
                                <IsThereRef isSet={cc.idCC}/>
                            </p>
                            <p className="text-base leading-4 mt-4 text-gray-600">
                                <IsThereConcess isSet={cc.libelle}/>
                            </p>
                            <p className="text-base leading-4 mt-4 text-gray-600">
                                <IsThereType isSet={cc.gamme}/>
                            </p>
                            <p className="text-base leading-4 mt-4 text-gray-600">
                                <IsThereModel isSet={cc.modele}/>
                            </p>
                            <p className="text-base leading-4 mt-4 text-gray-600">
                                <IsThereMileage isSet={cc.kilometrage}/>
                            </p>
                            <p className="text-base leading-4 mt-4 text-gray-600">
                                <IsThereYear isSet={cc.annee}/>
                            </p>
                            <p className="text-base leading-4 mt-4 text-gray-600">
                                <IsThereLenght isSet={cc.longueur}/>
                            </p>
                            <p className="text-base leading-4 mt-4 text-gray-600">
                                <IsThereWidth isSet={cc.largeur}/>
                            </p>
                            <p className="text-base leading-4 mt-4 text-gray-600">
                                <IsThereHeight isSet={cc.hauteur}/>
                            </p>
                            <p className="text-base leading-4 mt-4 text-gray-600">
                                <IsThereBed isSet={cc.typeLit}/>
                            </p>
                        </div>
                        <div>
                            <div className="border-t border-b py-4 mt-7 border-gray-200">
                                <button class="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 w-full rounded-lg">
                                    {
                                        Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' }).format(cc.prixTTC)
                                    }
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="flex flex-wrap -mx-2 overflow-hidden">
                    <div class="my-2 px-2 w-full overflow-hidden sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2">
                        <div className="2xl:px-20 xl:px-20 md:px-8 px-4">
                            <div class="">
                                <div class="text-xl font-medium">
                                    Fiche technique
                                </div>
                                <div class=""> 
                                    <div class="flex flex-wrap -mx-2 overflow-hidden">
                                        <div class="my-2 px-2 w-1/2 overflow-hidden">
                                            <ul className='px-4'>
                                                <li>
                                                    <p className='text-gray-400'>
                                                        Puissance Fiscale
                                                    </p>
                                                    <p className='text-gray-800 px-2'>
                                                        {cc.puissFisc + " cv."}
                                                    </p>
                                                </li>
                                                <li>
                                                    <p className='text-gray-400'>
                                                        Réservoir d'eau propre
                                                    </p>
                                                    <p className='text-gray-800 px-2'>
                                                        {cc.reservoirPropre + " l."}
                                                    </p>
                                                </li>
                                                <li>
                                                    <p className='text-gray-400'>
                                                        Énergie
                                                    </p>
                                                    <p className='text-gray-800 px-2'>
                                                        {cc.energie + "."}
                                                    </p>
                                                </li>
                                                <li>
                                                    <p className='text-gray-400'>
                                                        Boîte de vitesse
                                                    </p>
                                                    <p className='text-gray-800 px-2'>
                                                        {cc.bdv + "."}
                                                    </p>
                                                </li>
                                                <li>
                                                    <p className='text-gray-400'>
                                                        Moteur
                                                    </p>
                                                    <p className='text-gray-800 px-2'>
                                                        {cc.porteur + "."}
                                                    </p>
                                                </li>
                                                <li>
                                                    <p className='text-gray-400'>
                                                        Cylindrée
                                                    </p>
                                                    <p className='text-gray-800 px-2'>
                                                        {cc.cylindre + " cm3."}
                                                    </p>
                                                </li>
                                            </ul>
                                        </div>
                                        <div class="my-2 px-2 w-1/2 overflow-hidden">
                                            <ul className='px-4'>
                                                <li>
                                                    <p className='text-gray-400'>
                                                        Puissance DIN
                                                    </p>
                                                    <p className='text-gray-800 px-2'>
                                                        {cc.puissDin + " cv."}
                                                    </p>
                                                </li>
                                                <li>
                                                    <p className='text-gray-400'>
                                                        Réservoir d'eau sale
                                                    </p>
                                                    <p className='text-gray-800 px-2'>
                                                        {cc.reservoirSale + " l."}
                                                    </p>
                                                </li>
                                                <li>
                                                    <p className='text-gray-400'>
                                                        Nombre de places carte grise
                                                    </p>
                                                    <p className='text-gray-800 px-2'>
                                                        {cc.placeCG}
                                                    </p>
                                                </li>
                                                <li>
                                                    <p className='text-gray-400'>
                                                        Poids à vide
                                                    </p>
                                                    <p className='text-gray-800 px-2'>
                                                        {cc.poidsVide + " kg."}
                                                    </p>
                                                </li>
                                                <li>
                                                    <p className='text-gray-400'>
                                                        Poids en charge
                                                    </p>
                                                    <p className='text-gray-800 px-2'>
                                                        {cc.poidsCharge + " kg."}
                                                    </p>
                                                </li>
                                                <li>
                                                    <p className='text-gray-400'>
                                                        Nombre de portes
                                                    </p>
                                                    <p className='text-gray-800 px-2'>
                                                        {cc.nbPortes}
                                                    </p>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="my-2 px-2 w-full overflow-hidden sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2">
                        <div className="">
                            <div class="px-4">
                                <div class="text-xl font-medium">
                                    Équipements
                                </div>
                                <div class=""> 
                                    <ul className='px-4'>
                                        {
                                            this.state.equips.map((equip) => (
                                                    <li>
                                                        {equip.libelle}
                                                    </li>
                                            ))
                                        }
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="my-2 px-2 w-full overflow-hidden sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2">
                        <div className="flex flex-wrap overflow-hidden">
                            <div className="w-full overflow-hidden">
                                <div className="text-xl font-medium 2xl:px-20 xl:px-20 md:px-8 px-4">
                                    D'autres véhicules de la même marque :
                                </div>
                                <div className="flex flex-wrap -mx-1 overflow-hidden px-8 md:px-16 lg:px-24 xl:32">
                                    {
                                        this.state.ccsSimi.map(cc =>
                                            <div class="w-screen items-center sm:w-full md:w-full xl:w-1/2 p-4">
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

                    <div class="my-2 px-2 w-full overflow-hidden sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2 bg-gray-700">
                        <div className=''>

                        </div>
                    </div>
                </div>
                <SlideMarc/>
            </div>                 
            ))
        }
        </div>
        )
    }
  }