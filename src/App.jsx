import "./App.css";
import { Component } from "react";
import Box from "./components/Box.jsx"

class App extends Component {
  constructor(props) {
    super(props);

    // Set the initial state of the component
    // Boxes will contain an array of objects composed of an id and rgb color
    const BOXES = [];
    const numBoxes = 24;
    for (let i = 0; i < numBoxes; i++) {
      BOXES.push({
        id: i,
        color: `rgb(${this.getRandomColor()}, ${this.getRandomColor()}, ${this.getRandomColor()})`,
      });
    }

    // set default state
    this.state = { 
      boxes: BOXES,
    };

    // bind methods to this
  }

  getRandomColor() {
    let randomRGBColor = Math.floor(Math.random()* 256);
    console.log(`randomRGBColor = ${randomRGBColor}`);
    return randomRGBColor;
  }

  handleBoxClick(event) {
    this.state.boxes.map(function(value, index, array) {
      if(value === event.id) {
        return
      }
    });
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
        <h2>test</h2>,
        <h1>React: State and Props</h1>
        <div className="App">{/* render boxes */}</div>
      </main>
    );
  }
}

export default App;
