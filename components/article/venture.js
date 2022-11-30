import ventureS from "../../public/article/venture.webp"
import Image from "next/image"

export default function Venture() {
    return (
        <div className="px-4 md:px-12 pb-12 pt-8">
            <div className="flex flex-wrap shadow-lg border border-gray-100 rounded-2xl pb-4">
                <div className="w-full">
                    <h2 className="mb-4 pt-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white pb-8 pt-8">Hymer Venture S</h2>
                </div>
                <div className="w-full md:w-full lg:w-1/2 px-8">
                    <p className="indent-8">
                        Du <p className="font-bold inline">1er au 03 décembre</p>, le Hymer <p className="font-bold inline">Venture S</p> fait une escale dans votre concession <p className="font-bold inline">Carpiquet Camping-car. </p>
                    </p>
                    <br></br>
                    <p className="indent-8">
                        Sur ces 3 jours, vous aurez la chance de pouvoir visiter et découvrir en avant-première ce <p className="font-bold inline">véhicule d’exception</p> au design sensationnel et à l’aménagement inédit et optimal. Ce <p className="font-bold inline">4x4 tout terrain</p> à 9 rapports et au moteur 190ch <p className="font-bold inline">Mercedes</p>, vous offre une liberté de mouvement sans compromis accompagnée d’un confort inégalable.  
                    </p>
                    <br></br>
                    <p className="indent-8">
                        L’espace de vie vous offre <p className="font-bold inline">une vue à 180°</p> sur vos panoramas favoris et se prolonge par le biais d’une <p className="font-bold inline">terrasse privée</p>. 
                    </p>
                    <br></br>
                    <p className="indent-8">
                        L’espace couchage vous offre quant à lui, <p className="font-bold inline">un confort sans précédent</p> et vous surprendra par le sentiment d’espace qu’il procure grâce à sa hauteur sous plafond et à la vue qu’il vous offre.  
                    </p>
                    <br></br>
                    <p className="indent-8">
                        Alliant <p className="font-bold inline">design, espace de rangement et fonctionnalité</p>, votre espace cuisine vous permettra de concocter des plats savoureux dans vos lieux favoris.  
                    </p>
                    <br></br>
                    <p className="indent-8">
                        Composée de bambou véritable et de l’aspect ardoise, votre <p className="font-bold inline">salle de bain amovible</p> au design moderne vous offre deux espaces en un pour allier fonctionnalité et confort sans compromis. 
                    </p>
                    <br></br>
                    <p className="indent-8">
                        La visite exclusive de ce véhicule est réalisable <p className="font-bold inline">sur rendez-vous</p> uniquement, par le biais de <a className="underline font-bold" href="https://my.weezevent.com/decouverte-exclusive-du-hymer-venture-s-carpiquet-camping-car">ce lien.</a>
                    </p>
                </div>
                <div className="w-full md:w-full lg:w-1/2 px-8">
                    <div className="p-10">
                        {
                        <Image className="rounded-xl" alt="Logo groupe david gerbier" src={ventureS}/>
                        }
                    </div>
                </div>
                <div className="w-full p-8">
                    <video autoPlay loop className="rounded-xl">
                        <source src="/vid.mp4"/>
                    </video>
                </div>
            </div>
        </div>
    )
}