import "./App.css";
import React, { useState, useEffect } from "react";

function App() {
  const [apiResponse, setApiResponse] = useState("");
  const [getlist, setGetList] = useState("");
  const [save, setSave] = useState("");
  useEffect(() => {
    fetch("http://localhost:9000/testAPI")
      .then((res) => res.text())
      .then((data) => setApiResponse(data));
  }, []);

  return (
    <div className="App">
      hello
      <p className="App-intro">{apiResponse}</p>
    </div>
  );
}

export default App;
