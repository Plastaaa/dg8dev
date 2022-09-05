import Image from 'next/image';
import { useState } from 'react';

export default function imgCard(props) {
    const [ratio, setRatio] = useState(16/9)

    return (
        <div className="cardImageWrapper">
            <a className="text-2xl font-semibold">
                <img alt='ccPhoto' src={props.link} class="absolute inset-0 h-full w-full object-cover" />
            </a>
        </div>
    )
}