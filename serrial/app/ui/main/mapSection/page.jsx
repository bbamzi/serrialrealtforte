import { properties } from "@/scripts/data";
import { MapContainer, Marker, Popup, TileLayer, Tooltip } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import { icon } from "leaflet";

function MapSection() {
  const position = [7.1122, 3.3222];
  return (
    <section>
      <div className="p-6 flex row items-center justify-around">
        <div className="hidden md:block w-1/2 pl-36">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="green"
            className="w-56 h-52 drop-shadow-2xl"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
            />
          </svg>
        </div>
        <MapContainer
          center={position}
          zoom={11}
          scrollWheelZoom={false}
          className="h-96 w-full md:w-1/2 shadow-lg border-2 rounded-2xl"
        >
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

          {properties.map((property, index) => {
            return (
              <Marker position={property.coord} key={property.id}>
                <Popup>
                  <div className="rounded-lg  text-green-600 text-sm ">
                    <p>{property.title}</p> <p>{property.description}</p>
                  </div>
                </Popup>
              </Marker>
            );
          })}
        </MapContainer>
      </div>
    </section>
  );
}

export default MapSection;
