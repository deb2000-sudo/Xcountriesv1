import React, { useState } from "react";
import CountryCard from "./CountryCard";

const Countries = () => {
  const allFlags = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  const [flags,setFlags]=useState([]);
  const API_END_POINTS="https://xcountries-backend.azurewebsites.net/all";
  //useEffect is use to get the data
  useState(()=>{},[])

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        
      }}
    >
      {allFlags.map((flag) => (
        <CountryCard key={flag} />
      ))}
    </div>
  );
};

export default Countries;
