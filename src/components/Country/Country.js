import React from 'react';

const Country = (props) => {
    // console.log(props)
    return (
        <div>
            <h2>This is a {props.capital}</h2>
            <h4>From {props.name}</h4>
        </div>
    );
};

export default Country;