import axios from 'axios'
import React, { useState, useEffect } from 'react';
import './App.scss';
import ResultTable from './ResultTable/ResultTable';
import SearchField from './SearchField/SearchField';


const App = () => {
  const [isInitialState, setIsInitialState] = useState(true)
  const [data, setData] = useState();
  const [error, setError] = useState(false)

  const handleSubmit = async(e, keyword) => {
    e.preventDefault();
    setError('');
    setIsInitialState(false);
    try {
      const formattedKeyword = keyword.toLowerCase();
      const result = await axios.get(`https://pokeapi.co/api/v2/pokemon/${formattedKeyword}`)
      setData(result?.data)
    } catch (e) {
      setError(true);
      console.error(e)
    }
  }

  const renderDisplay = () => {
    if (isInitialState) {
      return !data ? <div>Type to make a search.</div> : null;
    }
    
    if (error || !data) {
      return <div className="no-results" >No Results</div>
    }

    return <ResultTable data={data}/>;

  }


  return (
        <div className="App">
          <header>
            <img src={''}/>
            <h1>  
              Pokemon Search 
            </h1>       
          </header>
          <SearchField onSubmit={handleSubmit}/>
          {renderDisplay()}
        </div>
      );
}

export default App;
