
import { useEffect, useState } from "react";
import Header from "./Header";
import CardComponent from "../components/CardComponent";

export default function CountriesFlag() {
  const[ data, setData] = useState('');

    useEffect(()=>{
        async function fetchCountries(){
          try{
            const response = await fetch(
              "https://restcountries.com/v3.1/all?fields=name,flags,region,population,capital"
            );
            if(!response.ok){
              throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            setData(data);
          }catch(error){
            console.error(error);
          }
        }
        fetchCountries();
    },[])

  return (
    <>
      <Header />
      <ul className="columns-4 mt-6 ">
        {data ? (
          data.map((item, index) => 
            <CardComponent
              key={index}
              imageUrl={item.flags.png}
              countryName={item.name.official}
              population={item.population}
              region={item.region}
              capital={item.capital}
            />
          )
        ) : (
          <p>loading</p>
        )}
      </ul>
    </>
  );
}
