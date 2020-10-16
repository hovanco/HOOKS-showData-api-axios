import React, { useState, useEffect } from "react";
import axios from "axios";

const Country = () => {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get("https://5eddc236ae06ed0016ee3821.mockapi.io/api/products")
      .then((res) => {
        console.log("res", res);
        console.log("res data", res.data);
        setCountries(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="app">
      <h1>List of Products</h1>

      {loading && <p>Loading...</p>}

      {!loading && (
        <>
          {countries.map((country, index) => (
            <div key={index}>
              {country.name} &emsp;&emsp; {country.price} &emsp;&emsp; {country.quantity}
              
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default Country;
