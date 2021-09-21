import { useEffect, useState } from 'react';
import './App.css';


function App() {
  return (
    <div className="App">
      <Countries></Countries>
    </div>
  );
}

function Countries() {

  const [countries, setCountries] = useState([]);

  useEffect(() => {

    fetch("https://restcountries.eu/rest/v2/all")
      .then(res => res.json())
      .then(data => setCountries(data));

  }, [])

  return (

    <div>
      <h2>Travelling around the globe !!</h2>
      <h3>total countries {countries.length}</h3>
    </div>
    
  );
}

export default App;
