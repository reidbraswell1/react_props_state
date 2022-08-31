import * as React from "react";

const Box = (props) => {
  return (
    <div
      id={props.id} 
      /* id of the division -- used when updating after clicking */
      style={{
        width: "250px",
        height: "250px",
        backgroundColor: props.color,
        border: "1px solid black",
        display: "inline-block",
        fontWeight: "bold",
      }}
      onClick={ props.onClicked }
      >
      <span style={{display: "inline-block", marginTop: "40%", marginBottom: "60%"}}>Key={props.id}<br></br>Id={props.id}<br></br>{props.color}<br></br>{props.hexColor}</span>
    </div>
  );
};

export default Box;
