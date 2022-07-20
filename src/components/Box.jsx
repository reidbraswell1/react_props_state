import * as React from "react";

const Box = (props) => {
  return (
    <div
      style={{
        width: "250px",
        height: "250px",
        backgroundColor: props.color,
        border: "1px solid black",
        display: "inline-block",
        fontWeight: "bold",
      }}
    >{/*
      onclick={ function(event){

      }}
      */}
      <span style={{display: "inline-block", marginTop: "40%", marginBottom: "60%"}}>{props.color}<br></br>{props.hexColor}</span>
    </div>
  );
};

export default Box;
