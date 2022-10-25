import Image from "next/image"
import imgLogo from '../public/logo/groupe/gdglogo.png'

export default function Groupe() {
    return (
        <div className="px-4 md:px-12 pb-12">
            <div className="flex flex-wrap shadow-lg border border-gray-100 rounded-2xl pb-4">
                <div className="w-full">
                    <h2 className="mb-4 pt-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white pb-10">Le groupe David Gerbier</h2>
                </div>
                <div className="w-full md:w-full lg:w-1/2 px-8">
                    <p>
                        Depuis sa création en 1984, le groupe David Gerbier est spécialisé dans le secteur automobile. 
                    </p>
                    <br></br>
                    <p>
                        Composé aujourd’hui de plus d’une vingtaine de concessions automobiles et distributeur de marques fortes comme : Abarth, Alfa Romeo, Fiat, Peugeot, Renault, Jeep…
                    </p>
                    <br></br>
                    <p>
                        Il y a 10 ans, le groupe décide de se diversifier et développe alors son activité sur le marché du véhicule de loisirs.
                    </p>
                    <br></br>
                    <p>
                        Plus tard viendra la création de la filiale DG8 camping-car qui possède aujourd’hui 10 concessions principalement situées d’Annecy à Clermont-Ferrand en passant par Grenoble et Nancy. 
                    </p>
                    <br></br>
                    <p>
                        Avec plus de 30 marques distribuées, le groupe David Gerbier est en phase de devenir un acteur incontournable sur ce marché.
                    </p>
                    <br></br>
                    <div className="px-4">
                        <p className="text-lg font-bold">
                            Nos services : 
                        </p>
                        <ul className="list-disc px-8">
                            <li>
                                La vente de camping-car, van et fourgon aménagé neufs et occasion 
                            </li>
                            <li>
                                La vente d’accessoires 
                            </li>
                            <li>
                                Un service atelier et carrosserie
                            </li>
                            <li>
                                La location
                            </li>
                        </ul>
                        <br></br>
                        <p className="text-lg font-bold">
                            Nos magasins d'accessoires :
                        </p>
                        <ul className="list-disc px-8">
                            <li>
                                Expo Clavel réseau master à Moirans (38)
                            </li>
                            <li>
                                Curioz Loisirs réseau master à Annecy (74)
                            </li>
                            <li>
                                Cap Liberté réseau Destiné à Cournon d’Auvergne (63)
                            </li>
                            <li>
                                Evasion 63 réseau Narbonne Accessoires à Lempdes (63) 
                            </li>
                        </ul>
                    </div>
                    <br></br>
                    <p>
                        Dans le groupe David Gerbier, votre satisfaction est notre priorité ! 
                    </p>
                </div>
                <div className="w-full md:w-full lg:w-1/2 px-8">
                    <div className="p-10">
                        <Image alt="Logo groupe david gerbier" src={imgLogo}/>
                    </div>
                </div>
            </div>
        </div>
    )
  }