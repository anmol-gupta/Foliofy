import React from "react";
import "./App.css";
import {Button} from 'react-bootstrap';
import Header from '../src/components/header/Header'
function App() {
  return (
    <div className="App">
      <Header />
      <h1 className="Company-Text">Foliofy</h1>
      <h4 className="Company-TagLine">
        Instant portfolio generator{" "}
        <span role="img" aria-label="cool" style={{ fontSize: "2rem" }}>
          😎
        </span>
      </h4>
      <Button className="Start-Button">Let's Start!</Button>
    </div>
  );
}

export default App;
