import React, { useState } from "react";
import CountryCard from "./CountryCard";

const Countries = () => {
//   const allFlags = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  const [flags, setFlags] = useState([]);
  const API_END_POINTS = "https://xcountries-backend.azurewebsites.net/all";
  //useEffect is use to get the data
  console.log({flags})
  useState(() => {
    fetch(API_END_POINTS)
      .then((response) => response.json())
      .then((flagData) => setFlags(flagData))
      .catch((error) => console.error("Error fetching data: ", error));
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
      }}
    >
      {flags.map((flag) => (
        <CountryCard key={flag.abbr} name={flag.name} flagImg={flag.flag} flagAltText={flag.abbr} />
      ))}
    </div>
  );
};

export default Countries;
