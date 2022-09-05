import Image from 'next/image';
import logoImg from '../public/logo/groupe/gdglogo.png'

export default function CardImage({imageSrc, imageAltText}) {
    return (
        <div className="cardImageWrapper">
            <a className="text-2xl font-semibold" href="/">
                <Image alt='Logo DG8CC' src={logoImg} height={60} width={80} layout="intrinsic"/>
            </a>
        </div>
    )
}