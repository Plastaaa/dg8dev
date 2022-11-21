import Image from 'next/image';

export default function imgCard(props) {
    return (
        <div className="cardImageWrapper">
            <Image alt={props.nom} src={props.link} objectFit={"cover"} layout={"responsive"} height={200} width={250} className={'rounded-xl'}/>
        </div>
    )
}