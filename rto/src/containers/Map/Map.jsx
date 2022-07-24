import React, { useContext } from "react";
import "./Map.css";
import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  Rectangle,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from 'leaflet';
import UserContext from '../../components/UserContext';

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});

export default function Map() {
  const user = useContext(UserContext)
  if (user?.homeCoordinates) {
    console.log("have homeCoords")
    const position = [user.homeCoordinates.latitude, user.homeCoordinates.longitude];
    const blackOptions = { color: "black" };
    const rectangle = [
      [51.49, -0.08],
      [51.5, -0.06],
    ];
    return (
      <div class = "card  leaflet-container">
          <div class="card-body "  >
              <MapContainer center={position} zoom={20} scrollWheelZoom={false}>
                  <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  />
                  <Marker position={position}>
                  <Popup>
                      Your pet is here. <br /> zoom in to find
                  </Popup>
                  </Marker>
                  <Rectangle bounds={rectangle} pathOptions={blackOptions} />
              </MapContainer>
          </div>
      </div>
    );
  } else {
    console.log("no home coords")
    console.log( { user })
    const position = [40.712776, -74.005974];
    const blackOptions = { color: "black" };
    const rectangle = [
      [51.49, -0.08],
      [51.5, -0.06],
    ];
    return (
      <div class = "card  leaflet-container">
          <div class="card-body "  >
              <MapContainer center={position} zoom={20} scrollWheelZoom={false}>
                  <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  />
                  <Marker position={position}>
                  <Popup>
                      Your pet is here. <br /> zoom in to find
                  </Popup>
                  </Marker>
                  <Rectangle bounds={rectangle} pathOptions={blackOptions} />
              </MapContainer>
          </div>
      </div>
    );
  }
}
