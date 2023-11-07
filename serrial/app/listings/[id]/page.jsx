"use client";
import { useParams } from "next/navigation";
import { properties } from "@/scripts/data";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";

function ListingItems() {
  const params = useParams();
  const details = properties[params.id];

  if (!details) return <p>Not Found</p>;
  console.log(params);

  return (
    <div className="flex flex-col   p-10 space-y-4">
      <div className="text-3xl font-bold">
        <h1 className="text-left">{details.title}</h1>
      </div>
      <div className="md:first:w-1/2 text-center">
        <p>{details.description}</p>
      </div>
      <div className="p-20 grid grid-cols-1 md:grid-cols-5">
        <img alt="one" src="" />
        <img alt="two" src="" />
        <img alt="three" src="" />
        <img alt="four" src="" />
        <img alt="five" src="" />
      </div>
      <div className="flex flex-col md:flex-row">
        <div>
          <h3>Details</h3>
          <div className="flex flex-row p-5 w-1/2">
            <ul>
              <li>
                <p>Price : 000NGN / Yearly</p>
              </li>
              <li>
                Location : {details.area}, {details.state}
              </li>
              <li>
                Additional Details : Lorem ipsum dolor sit amet, consectetur
                adipisicing elit. Esse, inventore.
              </li>
            </ul>
          </div>
        </div>
        <div>
          <MapContainer
            center={details.coord}
            zoom={11}
            scrollWheelZoom={false}
            className="h-96 w-full md:w-[500px] shadow-lg border-2 rounded-2xl"
          >
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

            <Marker position={details.coord}>
              <Popup>
                <div className="rounded-lg  text-green-600 text-sm ">
                  <p>{details.title}</p> <p>{details.description}</p>
                </div>
              </Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
    </div>
  );
}

export default ListingItems;
