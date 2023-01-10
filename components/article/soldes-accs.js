import Image from "next/image"
import img from "../../public/asset/marchnoel.png"
import "@splidejs/splide/dist/css/splide.min.css";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import une from "../../public/asset/soldeshiveraccs/001.jpg"
import deux from "../../public/asset/soldeshiveraccs/002.jpg"
import trois from "../../public/asset/soldeshiveraccs/003.jpg"
import quatre from "../../public/asset/soldeshiveraccs/004.jpg"
import cinq from "../../public/asset/soldeshiveraccs/005.jpg"
import six from "../../public/asset/soldeshiveraccs/006.jpg"

export default function SoldesHiverAccs() {
    return (
        <div className="px-4 md:px-12 pb-12 pt-8">
            <div className="w-full">
                <h2 className="mb-4 pt-4 text-2xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white pb-8 pt-8">Ouverture des soldes chez Auto Camping-car Service !</h2>
            </div>
            <div className="flex flex-wrap">
                <div className="w-full md:w-full lg:w-2/3 px-8">
                    <p className="indent-8">
                        Du 11 janvier au 07 février les soldes d'hiver débarquent chez Auto Camping-car service. Venez profiter des soldes et des nombreuses offres en concessions. Jusqu’à -50% sur une sélection de produits.
                    </p><br></br>
                    <p className="indent-8">
                        Rendez-vous dès le 11 janvier à Auto Camping-car Service - 4 & 6 Av. des Carrières, 14760 Bretteville-sur-Odon.
                    </p>
                </div>
                
                <div className="w-full md:w-1/2 lg:w-1/3 px-8">
                    <div className="">
                        {
                            <Splide
                                options={{
                                    type: "loop",
                                    autoplay: false,
                                    lazyLoad: false,
                                }}
                            >
                                    
                                <SplideSlide>
                                    <Image className={"rounded-xl"} src={une} width={200} height={300} objectFit={"cover"} alt={"Page garde marché noel ACCS"} layout={"responsive"}/>
                                </SplideSlide>
                                <SplideSlide>
                                    <Image className={"rounded-xl"} src={deux} width={200} height={300} objectFit={"cover"} alt={"Page 1 marché noel ACCS"} layout={"responsive"}/>
                                </SplideSlide>
                                <SplideSlide>
                                    <Image className={"rounded-xl"} src={trois} width={200} height={300} objectFit={"cover"} alt={"Page 2 marché noel ACCS"} layout={"responsive"}/>
                                </SplideSlide>
                                <SplideSlide>
                                    <Image className={"rounded-xl"} src={quatre} width={200} height={300} objectFit={"cover"} alt={"Page 3 marché noel ACCS"} layout={"responsive"}/>
                                </SplideSlide>
                                <SplideSlide>
                                    <Image className={"rounded-xl"} src={cinq} width={200} height={300} objectFit={"cover"} alt={"Page 4 marché noel ACCS"} layout={"responsive"}/>
                                </SplideSlide>
                                <SplideSlide>
                                    <Image className={"rounded-xl"} src={six} width={200} height={300} objectFit={"cover"} alt={"Page 5 marché noel ACCS"} layout={"responsive"}/>
                                </SplideSlide>
                            </Splide>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}