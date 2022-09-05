import React from 'react'
import axios from 'axios'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {useEffect} from 'react'

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

export default class VehiculeUnique extends React.Component {
    componentDidMount() {
        axios.get(`http://nunesaccount.alwaysdata.net/APIDG8/getCCDetailById.php?id=${window.location.pathname.split('/')[1]}`)
          .then(res => {
            const campingcar = res.data;
            this.setState({ campingcar });
            console.log(campingcar);
        })

        axios.get(`http://nunesaccount.alwaysdata.net/APIDG8/getAllVisualsByCC.php?id=${window.location.pathname.split('/')[1]}`)
          .then(res => {
            const imgCC = res.data;
            this.setState({ imgCC });
            console.log(imgCC);
        })
        
        axios.get(`http://nunesaccount.alwaysdata.net/APIDG8/getAllEquipByCC.php?id=${window.location.pathname.split('/')[1]}`)
          .then(res => {
            const equips = res.data;
            this.setState({ equips });
            console.log(equips);
        })
    }

    state = {
        campingcar: [],
        imgCC: [],
        equips: []
    }

    render() {
        const settings = {
            dots: true,
            infinite: true,
            lazyLoad: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode: false,
            adaptiveHeight: false,
            arrows: true,
            variableWidth: false,
        };
        
        return (
        <div>
            {
            this.state.campingcar.map((cc) => (
                <div>
                <div className="md:flex items-start justify-center py-12 2xl:px-20 md:px-6 px-4">
                    <div className="xl:w-3/6 lg:w-3/5 w-80 md:block hidden">
                        {
                            //Emplacement slider desktop & tablette
                            <Slider {...settings}>
                                {
                                    this.state.imgCC.map((img) => (
                                        <div className='' style={"width: 600px; height: 400px"}>
                                            <img src={img.linkIMG} className="" layout="fill" objectFit='contains'/>
                                        </div>
                                    ))
                                }
                                
                            </Slider>
                    
                        }
                    </div>
                    <div className="md:hidden">
                        {
                            //Emplacement slider mobile
                            <Slider {...settings}>
                                {
                                    this.state.imgCC.map((img) => (
                                        <div className='' style={"width: 600px; height: 400px"}>
                                            <img src={img.linkIMG} layout="fill" objectFit='contains'/>
                                        </div>
                                    ))
                                }
                            </Slider>
                        }
                        
                        <div className="flex items-center justify-between mt-3 space-x-4 md:space-x-0">
                            {
                                /*
                                <img alt="img-tag-one" className="md:w-48 md:h-48 w-full" src="https://i.ibb.co/cYDrVGh/Rectangle-245.png" />
                                <img alt="img-tag-one" className="md:w-48 md:h-48 w-full" src="https://i.ibb.co/f17NXrW/Rectangle-244.png" />
                                <img alt="img-tag-one" className="md:w-48 md:h-48 w-full" src="https://i.ibb.co/cYDrVGh/Rectangle-245.png" />
                                <img alt="img-tag-one" className="md:w-48 md:h-48 w-full" src="https://i.ibb.co/f17NXrW/Rectangle-244.png" />
                                */
                            }
                            
                        </div>
                    </div>
                    <div className="xl:w-2/5 md:w-1/2 lg:ml-8 md:ml-6 md:mt-0 mt-6">
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
                            <p className="md:w-96 text-base leading-normal text-gray-600 mt-4">
                            {
                                /*Zone à couper en 4 pour intégration icon SVG sympa*/
                                cc.porteur + " " + cc.energie + " " + cc.version
                            }
                                
                            </p>
                        </div>
                        <div>
                        {/*<div className="border-t py-4 mt-7 border-gray-200">
                                <div className="flex justify-between items-center cursor-pointer">
                                    <p className="text-base leading-4 text-gray-800">
                                        <h1>Kilométrage du véhicule : {cc.kilometrage + " " + "km"} </h1>
                                    </p>
                                </div>
                                <div className={"pt-4 text-base leading-normal pr-12 mt-4"} id="sect">
                                    <p>
                                        <h1>Type de lit : {cc.typeLit} </h1>
                                    </p>
                                </div>
                            </div>
                            <div className="border-t py-4 mt-7 border-gray-200">
                                
                            </div>*/}

                            <div className="border-t border-b py-4 mt-7 border-gray-200">
                                <button class="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 w-full rounded-lg">
                                    {
                                        Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' }).format(cc.prixTTC)
                                    }
                                </button>
                            </div>
                            <div className="py-4 mt-2">
                                <div class="collapse">
                                    <input type="checkbox" /> 
                                    <div class="collapse-title text-xl font-medium">
                                        Voir les équipements
                                    </div>
                                    <div class="collapse-content"> 
                                        <ul>
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
                    </div>
                </div>
            </div>                 
            ))
        }
        </div>
        )
    }
  }