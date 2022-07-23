import React from "react";
import "./Map.css"
import { MapContainer,Marker, Popup,  TileLayer, Rectangle } from 'react-leaflet'
import "leaflet/dist/leaflet.css"

export default function Map(){
    const position = [51.505, -0.09]
    const blackOptions = { color: 'black' }
    const rectangle = [
        [51.49, -0.08],
        [51.5, -0.06],
      ]
    return(
        <div class = "card-body leaflet-constainer" >Map
            <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={position}>
                    <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                </Marker>
                <Rectangle bounds={rectangle} pathOptions={blackOptions} />
            </MapContainer>
        </div>
    )
}