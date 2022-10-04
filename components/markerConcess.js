import React from "react";
import axios from 'axios';
import { Marker, Popup, Tooltip } from 'react-leaflet';
import Image from "next/image";

export default class MarkerConcess extends React.Component {
    componentDidMount() {
        axios.get(`https://nunesaccount.alwaysdata.net/APIDG8/getConcess.php`)
          .then(res => {
            const concess = res.data;
            this.setState({ concess });
        });
    }

    state = {
        concess: [],
    }

    render(){
        const BoatIcon = L.icon({
            iconUrl: "/markermap.png",
            iconSize: [60, 60],
            iconAnchor: [30, 30],
            popupAnchor: [0, 0],
        });

        return (
            <div>
                {
                    this.state.concess.map(concess =>
                        <Marker position={[concess.latitude, concess.longitude]} icon={BoatIcon}>
                            <Tooltip>
                                {concess.libelle}
                            </Tooltip>
                            <Popup>
                                <h2>
                                    <Image height={150} width={250} src={concess.linkIMG} layout={"responsive"}/>
                                </h2>
                            </Popup>
                        </Marker>
                    )
                }
            </div>
        )
    }
}