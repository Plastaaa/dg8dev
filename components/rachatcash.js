import React from "react";
import Image from "next/image";
import imgRachat from "../public/rachatcash.JPG"

export default class RachatCash extends React.Component {

    render(){
        return (
            <div className="overflow-hidden">
                <div className="flex flex-wrap py-8">
                    <Image src={imgRachat}/>           
                </div>
            </div>
        )
    }
}