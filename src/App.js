// import { useEffect, useState } from 'react';
import './App.css';
import Countries from './components/Countries/Countries';


function App() {
  return (
    <div className="App">
      <Countries></Countries>
    </div>
  );
}

// function Countries() {
//   const [countries, setCountries] = useState([]);

//   useEffect(() => {
//     fetch("https://restcountries.eu/rest/v2/all")
//       .then(res => res.json())
//       .then(data => setCountries(data));
//   }, [])

//   return (
//     <div>
//       <h2>Travelling around the globe !!</h2>
//       <h3>total countries {countries.length}</h3>
//       {
//         countries.map(country => <Country name={country.name} capital={country.capital}></Country>)
//       }
//     </div>
//   );
// }

// function Country(props) {
//   return(
//     <div>
//       <h2>Name: {props.name}</h2>
//       <h4>Capital: {props.capital}</h4>
//     </div>
//   );
// }

export default App;
