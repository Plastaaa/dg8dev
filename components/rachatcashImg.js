import React from "react";
import Image from "next/image";
import imgRachat from "../public/rachatcash.png"

export default class RachatCash extends React.Component {

    render(){
        return (
            <div className="overflow-hidden">
                <div className="flex flex-wrap py-8">
                    <a href="./rachat-cash">
                        <Image alt={"Rachat cash logo"} src={imgRachat}/>   
                    </a>
                </div>
            </div>
        )
    }
}