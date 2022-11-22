import ImgCard from './imgCard'
import { slugify } from '../../../utils/helpers'
import Link from 'next/link';
import Image from 'next/image';
import React from 'react';

function BotInfoBdv(props){
    const bdv = props.bdv;

    if(bdv == ""){
        return <NoBDV/>
    }
    return <BDV bdv={bdv}/>
}
function NoBDV(props){
    return (
        <div className="w-full overflow-hidden">
            <div className="flex flex-wrap -mx-2 overflow-hidden sm:-mx-2 md:-mx-2 lg:-mx-2 xl:-mx-2">
                <div className="my-2 px-2 w-1/8 overflow-hidden sm:my-2 sm:px-2 sm:w-1/8 md:my-2 md:px-2 md:w-1/8 lg:my-2 lg:px-2 lg:w-1/8 xl:my-2 xl:px-2 xl:w-1/8">
                </div>
                <div className="my-2 px-2 w-7/8 overflow-hidden sm:my-2 sm:px-2 sm:w-7/8 md:my-2 md:px-2 md:w-7/8 lg:my-2 lg:px-2 lg:w-7/8 xl:my-2 xl:px-2 xl:w-7/8">
                    <br/>
                </div>
            </div>                        
        </div>
    )
}
function BDV(props){
    const bdv = props.bdv;
    return(
        <div className="w-full overflow-hidden">
            <div className="flex flex-wrap -mx-2 overflow-hidden sm:-mx-2 md:-mx-2 lg:-mx-2 xl:-mx-2">
                <div className="my-2 px-2 w-1/8 overflow-hidden sm:my-2 sm:px-2 sm:w-1/8 md:my-2 md:px-2 md:w-1/8 lg:my-2 lg:px-2 lg:w-1/8 xl:my-2 xl:px-2 xl:w-1/8">
                    {
                        <Image alt='icone kilometrage' src={"https://nunesaccount.alwaysdata.net/APIDG8/IMG/ICON/road.png"} height={20} width={20}/>
                    }
                </div>
                <div className="my-2 px-2 w-7/8 overflow-hidden sm:my-2 sm:px-2 sm:w-7/8 md:my-2 md:px-2 md:w-7/8 lg:my-2 lg:px-2 lg:w-7/8 xl:my-2 xl:px-2 xl:w-7/8">
                    {bdv}
                </div>
            </div>                        
        </div>
    )
}

function BotInfoKm(props){
    const km = props.km;

    if(km == "0"){
        return <NoKM/>
    }
    return <KM km={km}/>
}
function NoKM(props){
    return(
        <div className="w-full overflow-hidden">
            <div className="flex flex-wrap -mx-2 overflow-hidden sm:-mx-2 md:-mx-2 lg:-mx-2 xl:-mx-2">
                <div className="my-2 px-2 w-1/8 overflow-hidden sm:my-2 sm:px-2 sm:w-1/8 md:my-2 md:px-2 md:w-1/8 lg:my-2 lg:px-2 lg:w-1/8 xl:my-2 xl:px-2 xl:w-1/8">
                </div>
                <div className="my-2 px-2 w-7/8 overflow-hidden sm:my-2 sm:px-2 sm:w-7/8 md:my-2 md:px-2 md:w-7/8 lg:my-2 lg:px-2 lg:w-7/8 xl:my-2 xl:px-2 xl:w-7/8">
                    <br/>
                </div>
            </div>                        
        </div>
    )
}
function KM(props){
    const km = props.km;
    return(
        <div className="w-full overflow-hidden">
            <div className="flex flex-wrap -mx-2 overflow-hidden sm:-mx-2 md:-mx-2 lg:-mx-2 xl:-mx-2">
                <div className="my-2 px-2 w-1/8 overflow-hidden sm:my-2 sm:px-2 sm:w-1/8 md:my-2 md:px-2 md:w-1/8 lg:my-2 lg:px-2 lg:w-1/8 xl:my-2 xl:px-2 xl:w-1/8">
                
                    <Image alt='icone boite de vitesse' src={"https://nunesaccount.alwaysdata.net/APIDG8/IMG/ICON/gearbox.png"} height={20} width={20}/>
                    {
                        //<img alt='km' className='h-4' src='../icon/road.png'/>
                    }
                </div>
                <div className="my-2 px-2 w-7/8 overflow-hidden sm:my-2 sm:px-2 sm:w-7/8 md:my-2 md:px-2 md:w-7/8 lg:my-2 lg:px-2 lg:w-7/8 xl:my-2 xl:px-2 xl:w-7/8">
                    {km + " km"}
                </div>
            </div>  
        </div>
    )
}

export default class CardCC extends React.Component{
    
    render(){
        return (  
            <div>
                <script type="text/javascript" language="javascript" ></script>
                <script src="https://staging.boxauto.bnpparibas-pf.com/o/BoxAutoNG-Theme/js/export/rx.min.js"></script>
                <script src="https://staging.boxauto.bnpparibas-pf.com/o/BoxAutoNG-Theme/js/export/staging/ajax.js"></script>

                <button onClick={initBOXA('VEHICLE')}>coucou1</button>
                <button onClick={reloadVehicleData()}>coucou2</button>

                <Link href={`/stock/${slugify(this.props.refe)}`}>
                    <div className="c-card block dark:bg-gray-800 dark:border dark:border-gray-600 bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden">
                        <div className="relative overflow-hidden">
                            <ImgCard link={this.props.photo}/>
                        </div>
                        <div className="p-4">
                            <span className="inline-block px-2 py-1 leading-none dark:bg-green-600 dark:text-white bg-green-800 text-white rounded-full font-semibold uppercase tracking-wide text-xs">
                                {this.props.etat + " " + this.props.annee}
                            </span>
                            <h2 className="mt-2 mb-2 dark:text-gray-200 font-bold notranslate">
                                {this.props.marque}
                            </h2>
                            <p className="text-sm dark:text-gray-200">
                                {this.props.modele}
                            </p>
                            <p className="text-sm dark:text-gray-200">
                                {this.props.ver}
                            </p>
                            <p className="text-sm dark:text-gray-200">
                                {this.props.libelle}
                            </p>
                            <div className='flex flex-wrap'>
                                <div className='w-1/2'>
                                    {
                                        function() {
                                            initBOXA('VEHICLE');
                                            reloadVehicleData();
                                        }
                                
                                    }
                                    <div className='mt-3 items-center font-bold text-xl'>
                                        A partir de 
                                        <div class='apartirde'>
                                            <input 
                                                type='hidden' 
                                                name='box-auto-infos' 
                                                wmName='mozac_loisirs_63200' 
                                                vehicleCategory="V" 
                                                vehicleIsNewBo="N" 
                                                dateMiseCirc="2022-10-10" 
                                                vehicleMileAge="0" 
                                                proposalPrice="57000" 
                                                vehicleEngineRating="4" 
                                                vehicleHorsePower="130" 
                                                vehicleEnergy="D"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className='w-1/2'>
                                    <div className="mt-3 items-center">
                                        <span className="font-bold dark:text-gray-200">
                                            {
                                                Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' }).format(this.props.prix)
                                            }
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="p-4 dark:border-gray-600 dark:text-gray-200 border-t border-b text-xs text-gray-700">
                            <div className="flex flex-wrap overflow-hidden">
                            {
                                <BotInfoKm km={this.props.km}/>
                            }
                            {    
                                <BotInfoBdv bdv={this.props.bdv}/>
                            }
                            </div>      
                        </div>
                    </div>
                </Link>
            </div>
        )
    }
}