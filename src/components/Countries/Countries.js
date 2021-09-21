import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css';

const Countries = () => {

    const [countries, setCountries] = useState([]);

    useEffect(() => {
        fetch("https://restcountries.eu/rest/v2/all")
        .then(res => res.json())
        .then(data => setCountries(data));
    },[])

    return (
        <div>
            <h2 className="style">Country list: {countries.length}</h2>
            {
                countries.map(country => <Country name={country.name} capital={country.capital}></Country>)
            }
        </div>
    );
};

export default Countries;