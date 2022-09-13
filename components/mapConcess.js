import React from "react";
import 'leaflet/dist/leaflet.css';

export default class MapConcess extends React.Component {
    constructor() {
        super();
        this.state = {
          lat: 51.505,
          lng: -0.09,
          zoom: 13,
        };
    }

    render(){
        const position = [51.505, -0.09]
        return (
            <div>
            </div>
        )
    }
}