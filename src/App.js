import React from "react";
import "./App.css";
import { Button } from "react-bootstrap";
import Header from "../src/components/header/Header";
import Forms from "../src/components/Form/Form";
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      showForm: false
    };
  }
  showFormHandler = () => {
    this.setState({
      showForm: !this.state.showForm
    });
  };
  render() {
    let forms = null;
    if (this.state.showForm) {
      forms = <Forms />;
    }
    return (
      <React.Fragment>
        <div className="App">
          <Header />
          <h1 className="Company-Text">Foliofy</h1>
          <h4 className="Company-TagLine">
            Instant portfolio generator{" "}
            <span role="img" aria-label="cool" style={{ fontSize: "2rem" }}>
              😎
            </span>
          </h4>
          <Button className="Start-Button" onClick={this.showFormHandler}>
            Let's Start!
          </Button>
        </div>
        <div className = "Forms">{forms}</div>
      </React.Fragment>
    );
  }
}

export default App;
