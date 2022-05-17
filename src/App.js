import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [paragraphs, setParagraphs] = useState([]);
  const [inputValue, setInputValue] = useState(4);
  const [includeHtml, setIncludeHtml] = useState("text");
  
  useEffect(() => {
    const url = `https://baconipsum.com/api/?type=all-meat&paras=${inputValue}&start-with-lorem=1`;
  
    fetch(url)
       .then((res) => res.json())
       .then((data) => setParagraphs(data));
  }, [inputValue]);



  return (
    <div id="root">
      <div className="App container">
        <h1>React sample text generator app</h1>
        <hr></hr>
        <form className="form-inline">
          <div className="form-group">
            <label>Paragraphs</label>
            <div className="number">
              <input type="number" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
            </div>
          </div>
          <div className="form-group">
            <label>Include HTML</label>
            <div className="select">
              <select className="form-control" value={includeHtml} onChange={(e) => setIncludeHtml(e.target.value)}>
                <option value="html">Yes</option>
                <option value="text">No</option>
              </select>
            </div>
          </div>
        </form>
            <div className="output jumbotron mt-4">
              {includeHtml === "html" ? (
                <p>{paragraphs.map((sentence) => `<p>${sentence}</p>` )}</p>
              ) : (
                <p>{paragraphs.map((sentence) => sentence)}</p>
              )}
            <br></br>
            </div>
      </div>
      
    </div>
  );
}

export default App;
