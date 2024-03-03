import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import getData from './DataServices/DataServices';
import { userInfo } from 'os';
import astronaut from './Interfaces/interfaces';
import AstronautComponet from './components/AstronautComponet';

function App() {
  const [astroInfo, setAstroInfo] = useState<astronaut>();
  let [count, setCount] = useState<number>(0)

  const nextPage = () => {
    setCount(count + 1)
  }

  useEffect(() => {
    const astroData = async () => {
      const fetchedData = await getData();
      setAstroInfo(fetchedData);

    }
    astroData()

  }, [])


  return (
    <div>
      <button onClick={() => nextPage()}>Next Page</button>


      {
        astroInfo && <AstronautComponet shipName={astroInfo.crafts[count].shipName} members={astroInfo.crafts[count].members} />
      }

    </div>
  );
}

export default App;
