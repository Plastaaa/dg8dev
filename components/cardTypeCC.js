import ImgCard from './imgCard'
import { slugify } from '../utils/helpers'
import img1 from "../public/typeCC/img1.png"

export default function CardCC(props) {
    return (  
        <div>
            <a href={`/${slugify(props.refe)}`} class="c-card block bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden">
                <div class="relative pb-48 overflow-hidden">
                    <ImgCard link={img1}/>                
                </div>
                <div class="p-4">
                    <span class="inline-block px-2 py-1 leading-none bg-orange-200 text-orange-800 rounded-full font-semibold uppercase tracking-wide text-xs">
                        {props.etat + " " + props.annee}
                    </span>
                    <h2 class="mt-2 mb-2  font-bold">
                        {props.marque}
                    </h2>
                    <p class="text-sm">
                        {props.modele}
                    </p>
                    <p class="text-sm">
                        {props.ver}
                    </p>
                    <div class="mt-3 flex items-center">
                        <span class="font-bold text-xl">
                            {
                                Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' }).format(props.prix)
                            }
                        </span>
                    </div>
                </div>
                <div class="p-4 border-t border-b text-xs text-gray-700">
                    <div class="flex flex-wrap overflow-hidden">
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