import React from 'react'

const CardComponent = ({ id, imageUrl, countryName, population, region, capital }) => {
  return (
    <div className="flex  justify-center ">
      <div className="w-8/12 rounded overflow-hidden shadow-lg mb-2 p-2 ml-5 cursor-pointer hover:scale-105 transition-transform duration-300 h-5/6 ">
        {id}
        <img className="w-full" src={imageUrl} />
        <p className="font-bold text-center text-lg  ">{countryName}</p>
        <p>
          <span className="text-gray-600 font-bold ">Population: </span> {population}
        </p>
        <p>
          <span className="text-gray-600 font-bold ">Region: </span>
          {region}
        </p>
        <p>
          {" "}
          <span className="text-gray-600 font-bold ">Capital: </span>
          {capital}
        </p>
      </div>
    </div>
  );
}

export default CardComponent