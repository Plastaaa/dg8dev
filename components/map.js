import { useState, useEffect } from 'react';
import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, Marker, useMap, Popup, Tooltip } from 'react-leaflet';
import L from "leaflet";
import MarkerConcess from './markerConcess'

export function ChangeView({ coords }) {
  const map = useMap();
  map.setView(coords, 12);
  return null;
}

export default function Map(props) {
    const [geoData, setGeoData] = useState({ lat: 45.30387, lng: 5.62648 });

    const center = [geoData.lat, geoData.lng];

    if(props.concess == "Grenoble Camping-car"){
        console.log(props.concess);
        const position = [35.72428729739558, 51.447000503540046]
    }

    const BoatIcon = L.icon({
        iconUrl: "/markermap.png",
        iconSize: [60, 60],
        iconAnchor: [30, 30],
        popupAnchor: [0, 0],
    });

  return (
    <MapContainer center={center} zoom={1} style={{ height: '40vh' }}>
        <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> Contributeurs'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

            <Marker position={[45.32363, 5.59048]} icon={BoatIcon}>
                <Tooltip>
                    Expo Clavel
                </Tooltip>
                <Popup>
                    <h2>coucou</h2>
                </Popup>
            </Marker>

            <MarkerConcess/>

        <ChangeView coords={center} />
    </MapContainer>
  );
}
