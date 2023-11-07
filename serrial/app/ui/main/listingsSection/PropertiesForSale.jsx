import Image from "next/image";

function PropertiesForSale({ property }) {
  return (
    <div className="property-item" id="property-card">
      <div className="w-auto h-auto">
        <Image
          src={property.image}
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "auto" }}
          alt={property.title}
        />
      </div>
      <div className="flex flex-col px-2 text-green-700 group group-hover:text-green-950">
        <div className="mb-5">
          <p className="text-sn text-left">{property.description}</p>
        </div>
        <div className="flex flex-row items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
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

          <p className="text-sm mt-2 pl-2 pb-2">
            {property.state}, {property.area}
          </p>
        </div>
      </div>
    </div>
  );
}

export default PropertiesForSale;
