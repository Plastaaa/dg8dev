import Image from 'next/image';
import { useState } from 'react';

export default function imgCard(props) {
    return (
        <div className="cardImageWrapper">
            <Image alt="Image d'un camping car" src={props.link} objectFit={"cover"} layout={"responsive"} height={200} width={250} className={'rounded-xl'}/>
        </div>
    )
}