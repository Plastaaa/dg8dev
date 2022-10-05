import Image from "next/image"
import { slugify } from '../utils/helpers'

export default function ConcessCard(props) {
    return (  
        <div className="px-8">
            <a href={`/${slugify(props.soc)}`}>
                <div className="p-8 flex flex-wrap border border-gray-100 shadow-lg rounded-3xl">
                    <div className="w-full sm:w-full md:w-1/2 lg:w-1/2 xl:w-1/2">
                        <div className="flex flex-wrap">
                            <div className="w-full sm:w-full md:w-full lg:w-1/2 xl:w-1/2">
                                <Image src={props.linkIMG} alt="me" layout="responsive" height={150} width={250}/>
                            </div>
                            <div className="w-full sm:w-full md:w-full lg:w-1/2 xl:w-1/2">
                                <p className="text-xl font-bold">
                                    {props.nom}
                                </p>
                                <p className="px-2 font-thin">
                                    {props.adress}
                                </p>
                                <br></br>
                                <p className="">
                                    Tel : {props.tel}
                                </p>
                                <p className="">
                                    Mail : {props.mail}
                                    <br></br>
                                    <br></br>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full sm:w-full md:w-1/2 lg:w-1/2 xl:w-1/2">
                        {props.desc}
                    </div>
                </div>
            </a>
        </div>
    )
}