import Image from "next/image"

export default function ConcessCard(props) {
    return (  
        <div className="px-24">
            <div className="p-16 flex flex-wrap border border-gray-100 shadow-lg rounded-3xl">
                <div className="w-1/3">
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
                    </p>
                </div>
                <div className="w-1/3">
                    {props.desc}
                </div>
                <div className="w-1/3">
                    <Image src={props.linkIMG} alt="me" layout="responsive" height={300} width={500}/>
                </div>
            </div>
        </div>
    )
}