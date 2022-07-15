import "./App.css";
import { Component } from "react";
import Box from "./components/Box.jsx"

class App extends Component {
  constructor(props) {
    console.log(`---Begin App constructor---`);
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
    console.log(`---End App constructor---`);

    // bind methods to this
  }

  getRandomColor() {
    console.log(`---Begin Function getRandomColor()---`);
    let randomRGBColor = Math.floor(Math.random()* 256);
    console.log(`randomRGBColor = ${randomRGBColor}`);
    console.log(`---End Function getRandomColor()---`);
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
    let paragraphText;
    this.state.boxes.map(function(value, index, array){paragraphText+=`Id: ${value.id} <br>`});
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
        <p>
  {`Id = ${this.state.boxes[1].id}, RGBColor = ${this.state.boxes[1].color}`}</p>,
        <p>{paragraphText}</p>,
        <h1>React: State and Props</h1>
        <div className="App">{/* render boxes */}</div>
      </main>
    );
  }
}

export default App;
