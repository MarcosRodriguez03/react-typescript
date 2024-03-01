import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import getData from './DataServices/DataServices';
import { userInfo } from 'os';
import astronaut from './Interfaces/interfaces';

function App() {
  const [astroInfo, setAstroInfo] = useState<astronaut>();

  useEffect(() => {
    const astroData = async () => {
      const fetchedData = await getData();
      setAstroInfo(fetchedData);

    }
    astroData()

  }, [])


  return (
    <div>
      <h1>{astroInfo?.people.map((person) => {
        return person.name + " " + person.craft
      })}</h1>
    </div>
  );
}

export default App;
