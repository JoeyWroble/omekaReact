import './App.css';
import { useState } from 'react';
import API from './hms.js';
 
function App() {
  const apiEndpoint = 'https://morrisarchive.lib.uiowa.edu/api/';
  const collectionEndpoint = 'https://morrisarchive.lib.uiowa.edu/api/files?item=11';
  const [output, setOutput] = useState()
 
  const getSiteInfo = async () => {
      setOutput('Fetching site info...');
      const data = await API.getSiteInfo(apiEndpoint);
      setOutput(JSON.stringify(data, null, 2));
  };
 
  const getItems = async () => {
      setOutput('Fetching items...');
      const data = await API.getItems(apiEndpoint);
      setOutput(JSON.stringify(data, null, 2));
  };

  const getItemsInCollection = async () => {
    setOutput('Fetching items in collection...');
    const data = await API.getItemsInCollection(collectionEndpoint)
    setOutput(JSON.stringify(data, null, 2));
  }
 
  return (
      <div classname="body">
        <h1>HMS API Test</h1>
          <div>
            <button onClick={getSiteInfo}>Get Site Info</button>
            <button onClick={getItems} >Get Items</button>
            <button onClick={getItemsInCollection}>Get Items in Collection</button>
            <pre className="output">{output}</pre>
          </div>
      </div>
  );
}
 
export default App;
 
 