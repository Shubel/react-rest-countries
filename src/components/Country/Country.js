import React from 'react';
import './Country.css';

const Country = (props) => {
    const {name, capital, flag, population, region} = props.country;
    // console.log(props.country)
    
    return (
        <div className="country">
            <img src={flag} alt="" />
            <h3>Region: {region}</h3>
            <h2>Country: {name}</h2>
            <h4>Capital: {capital} and, population {population}</h4>
        </div>
    );
};

export default Country;