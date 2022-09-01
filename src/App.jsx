import "./css/App.css";
import { Component } from "react";
import Box from "./components/Box.jsx"
import Table from "./components/Table.jsx"

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
        color: `rgba(${rgbRed}, ${rgbGreen}, ${rgbBlue}, .3)`,
        hexColor: hexColor,
      });
    }

    // set default state
    this.state = { 
      boxes: BOXES,
    };
    console.log(`---End App constructor---`);

    this.handleBoxClick = this.handleBoxClick.bind(this);
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
    let base16 = hex.toString(16).toUpperCase();
    console.log(`---End Function convertToHex()---`);
    // Proceed the number with a 0 if the length is less than 2
    return (base16.length < 2 ? `0${base16}`: base16);
  }

  handleBoxClick(event) {
    console.log("here");
    let updatedBoxes = this.state.boxes.map((value, index, array) => {
      if(value.id == event.target.id) {
        console.log(`EventId = ${event.target.id}, BoxId=${value.id}`);
        value.color = `rgba(${this.getRandomColor()}, ${this.getRandomColor()}, ${this.getRandomColor()}, .3)`;
        console.log(`Color=${value.color}`);
      }
      return value;
    });
    this.setState({boxes:updatedBoxes});
  }

  render() {
    let paragraphText;
    return (
      <main
        id={"main"}
      >
        <h1>React: State and Props Table Form</h1>
        <table id={"colorTable"}>
          <thead>
            <tr>
              <th>ID</th>
              <th>RGB COLOR</th>
              <th>HEX COLOR</th>
              <th>DISPLAYED COLOR</th>
            </tr>
          </thead>
          <tbody>
          {this.state.boxes.map(function (value, index, array) {
            console.log(`Id=${value.id}`);
            let tableDataId = `Table:${value.id}`;
            return <Table id={value.id} color={value.color} hexColor={value.hexColor} tableId={tableDataId}>
                  </Table> 
          })};
          </tbody>
        </table>
        <p>{paragraphText}</p>
        <h1>React: State and Props Box Form</h1>
        <div className="App">
          
          { this.state.boxes.map((value, index, array) => 
            { 
              console.log(`key=${value.id}, id=${value.id}, color=${value.color}`)
              return <Box key={value.id} 
                          id={value.id} 
                          color={value.color}
                          onClicked={this.handleBoxClick}/> 
            })
          }
        </div>
      </main>
    );
  }
}

export default App;
