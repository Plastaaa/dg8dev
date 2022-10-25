import Image from 'next/image';
import { useState } from 'react';

export default function imgCard(props) {
    return (
        <div className="cardImageWrapper">
            <img alt='Camping-car image' src={props.link} className="absolute inset-0 h-full w-full object-cover" />
        </div>
    )
}