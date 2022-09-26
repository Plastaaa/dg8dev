import ImgCard from './imgCard'
import { slugify } from '../utils/helpers'

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
                    <img alt='bdv' className='h-4' src='../icon/gearbox.png'/>
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
                {
                    <img alt='km' className='h-4' src='../icon/road.png'/>
                }
                </div>
                <div className="my-2 px-2 w-7/8 overflow-hidden sm:my-2 sm:px-2 sm:w-7/8 md:my-2 md:px-2 md:w-7/8 lg:my-2 lg:px-2 lg:w-7/8 xl:my-2 xl:px-2 xl:w-7/8">
                    {km + " km"}
                </div>
            </div>  
        </div>
    )
}

export default function CardCC(props) {
    return (  
        <div>
            <a href={`/${slugify(props.refe)}`} className="c-card block bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden">
                <div className="relative pb-48 overflow-hidden">
                    <ImgCard link={props.photo}/>                
                </div>
                <div className="p-4">
                    <span className="inline-block px-2 py-1 leading-none bg-red-200 text-red-800 rounded-full font-semibold uppercase tracking-wide text-xs">
                        {props.etat + " " + props.annee}
                    </span>
                    <h2 className="mt-2 mb-2  font-bold">
                        {props.marque}
                    </h2>
                    <p className="text-sm">
                        {props.modele}
                    </p>
                    <p className="text-sm">
                        {props.ver}
                    </p>
                    <div className="mt-3 flex items-center">
                        <span className="font-bold text-xl">
                            {
                                Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' }).format(props.prix)
                            }
                        </span>
                    </div>
                </div>
                <div className="p-4 border-t border-b text-xs text-gray-700">
                    <div className="flex flex-wrap overflow-hidden">
                    {
                        <BotInfoKm km={props.km}/>
                    }
                    {    
                        <BotInfoBdv bdv={props.bdv}/>
                    }
                    </div>      
                </div>
            </a>
        </div>
    )
}