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

    // Set the initial state of the component
    // Boxes will contain an array of objects composed of an id and rgb color
    const TABLE_ROWS = [];
    const numTableRows = 24;
    for (let i = 0; i < numTableRows; i++) {
      let rgbRed = this.getRandomColor();
      let rgbGreen = this.getRandomColor();
      let rgbBlue = this.getRandomColor();
      let hexColor = `#${this.convertToHex(rgbRed)}${this.convertToHex(rgbGreen)}${this.convertToHex(rgbBlue)}`;
      TABLE_ROWS.push({
        id: i,
        color: `rgb(${rgbRed}, ${rgbGreen}, ${rgbBlue})`,
        hexColor: hexColor,
      });
    }


    // set default state
    this.state = { 
      boxes: BOXES,
      tableRows: TABLE_ROWS,
    };
    console.log(`---End App constructor---`);

    this.handleBoxClick = this.handleBoxClick.bind(this);
    this.handleTableClick = this.handleTableClick.bind(this);
  }

  // Get a random color between 0 and 255
  getRandomColor() {
    console.log(`---Begin Function getRandomColor()---`);
    let randomRGBColor = Math.floor(Math.random()* 256);
    console.log(`randomRGBColor = ${randomRGBColor}`);
    console.log(`---End Function getRandomColor()---`);
    return randomRGBColor;
  }

  // Convert a color number to hexadecimal notation
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

  // Event handler. Handle event when user clicks on a box
  handleBoxClick(event) {
    console.log(`---Begin Function handleBoxClick()---`);
    let updatedBoxes = this.state.boxes.map((value, index, array) => {
      let boxId = `Box:${value.id}`;
      let eventId = event.target.id;
      if(boxId == eventId) {
        console.log(`EventId = ${event.target.id}, BoxId=${value.id}`);
        value.color = `rgba(${this.getRandomColor()}, ${this.getRandomColor()}, ${this.getRandomColor()}, .3)`;
        console.log(`Color=${value.color}`);
      }
      return value;
    });
    this.setState({boxes:updatedBoxes});
    console.log(`---End Function handleBoxClick()---`);
  }
  
  // Event handler. Handle event when user clicks on a table row
  handleTableClick(event) {
    console.log(`---Begin handleTableClick()---`);
    let updatedTableRows = this.state.tableRows.map((value, index, array) => {
      let tableId = `Table:${value.id}`;
      let eventId = event.target.id;
      if(tableId == eventId) {
        console.log(`EventId = ${eventId}, TableId=${tableId}`);
        let red = this.getRandomColor();
        let blue = this.getRandomColor();
        let green = this.getRandomColor();
        let hexColor = `#${this.convertToHex(red)}${this.convertToHex(blue)}${this.convertToHex(green)}`;
        value.color = `rgb(${red}, ${blue}, ${green})`;
        value.hexColor = hexColor;
        console.log(`Color=${value.color}`);
      }
      return value;
    });
    this.setState({tableRows:updatedTableRows});
    console.log(`---End handleTableClick()---`);
  }

  render() {
    return (
      <main id={"main"}>
        <h1>React: State and Props Table Form</h1>
        <h2>Click on a row under the 4th column "Displayed Color" to change it's color!</h2>
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
            { this.state.tableRows.map((value, index, array) => {
              console.log(`Id=${value.id}`);
              let tableDataId = `Table:${value.id}`;
              return <Table id={tableDataId} 
                            color={value.color} 
                            hexColor={value.hexColor} 
                            tableId={tableDataId}
                            onClicked={this.handleTableClick}>
                    </Table> 
            })};
          </tbody>
        </table>
        <h1>React: State and Props Box Form</h1>
        <h2>Click on an individual box to change it's color!</h2>
        <div className="App">
          { this.state.boxes.map((value, index, array) => 
            { 
              console.log(`key=${value.id}, id=${value.id}, color=${value.color}`)
              let boxDataId = `Box:${value.id}`;
              return <Box key={boxDataId} 
                          id={boxDataId} 
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
