import Image from "next/image"
import { slugify } from '../utils/helpers'

function IsThereDesc(props){
    if(props.desc1 == ""){
        return ("")
    }else if(props.desc2 == ""){
        return(props.desc1 + " ")
    }else if(props.desc3 == ""){
        return(
            <div>
                {props.desc1}
                    <br></br><br></br>
                {props.desc2}
            </div>
        )
    }else if(props.desc4 == ""){
        return(
            <div>
                {props.desc1}
                <br></br><br></br>
                {props.desc2}
                <br></br><br></br>
                {props.desc3}
            </div>
        )
    }else{
        return(
            <div>
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
                        <IsThereDesc 
                            desc1={props.desc1}
                            desc2={props.desc2}
                            desc3={props.desc3}
                            desc4={props.desc4}
                        />
                    </div>
                </div>
            </a>
        </div>
    )
}