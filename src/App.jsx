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
      let rgbRed = this.getRandomColor();
      let rgbGreen = this.getRandomColor();
      let rgbBlue = this.getRandomColor();
      let hexColor = `#${this.convertToHex(rgbRed)}${this.convertToHex(rgbGreen)}${this.convertToHex(rgbBlue)}`;
      BOXES.push({
        id: i,
        color: `rgb(${this.getRandomColor()}, ${this.getRandomColor()}, ${this.getRandomColor()})`,
        hexColor: hexColor,
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

  convertToHex(color) {
    console.log(`---Begin Function convertToHex()---`);
    let hex = parseInt(color);
    if (isNaN(hex)) {
      hex = 0;
    }
    console.log(`---End Function convertToHex()---`);
    let base16 = hex.toString(16);
    // Proceed the number with a 0 if the length is less than 2
    return (base16.length < 2 ? `0${base16}`: base16);
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
    return (
      <main
        className="App.css"
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          textAlign: "center",
        }}
      >
        <h2>test</h2>,
        <table id={"colorTable"} style={{width: "60%"}}>
          <tr>
            <th>ID</th>
            <th>COLOR</th>
            <th>HEX COLOR</th>
            <th>DISPLAYED COLOR</th>
          </tr>
          {this.state.boxes.map(function (value, index, array) {
          return <tr><td>{value.id}</td><td style={{textAlign: "left"}}>{value.color}</td><td style={{textAlign: "left"}}>{value.hexColor}</td><td style={{textAlign: "left", backgroundColor: value.hexColor}}></td></tr>})};
        </table>,
        <p>{paragraphText}</p>,
        <h1>React: State and Props</h1>
        <div className="App">{/* render boxes */}</div>
      </main>
    );
  }
}

export default App;
