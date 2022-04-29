import "./App.css";
import { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);

    const boxes = [];
    const numBoxes = 24;
    for (let i = 0; i < numBoxes; i++) {
      boxes.push({
        id: i,
        color: `rgb(${this.getRandomColor()}, ${this.getRandomColor()}, ${this.getRandomColor()})`,
      });
    }

    // set default state
    this.state = { 
      boxes: boxes, 
    };

    // bind methods to this
  }

  render() {
    return (
      <main
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          textAlign: "center",
        }}
      >
        <h1>React: State and Props</h1>
        <div className="App">{/* render boxes */}</div>
      </main>
    );
  }
}

export default App;
