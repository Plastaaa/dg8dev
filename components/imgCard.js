import Image from 'next/image';
import { useState } from 'react';

export default function imgCard(props) {
    return (
        <div className="cardImageWrapper">
            <a className="text-2xl font-semibold">
                <img alt='Camping-car image' src={props.link} class="absolute inset-0 h-full w-full object-cover" />
            </a>
        </div>
    )
}