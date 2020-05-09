import React, { useState } from "react";
import Form from "./components/Form";
import Url from "./components/Url";
import "./App.css";

function App() {
  const [input, setInput] = useState("");

  const handleInputChange = ({ target }) => {
    setInput(target.value);
  };

  return (
    <div className="App">
      <Form handleInputChange={handleInputChange} />
      <Url input={input} />
    </div>
  );
}

export default App;
