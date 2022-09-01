import * as React from "react";

const Table = (props) => {
  return (
    <tr>
        <td>{props.id}</td><td>{props.color}</td><td>{props.hexColor}</td><td id={props.tableId} style={{backgroundColor: props.hexColor}}></td>
    </tr>
  );
};

export default Table;
