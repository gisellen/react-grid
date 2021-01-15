import React from "react";
import TableRow from './TableRow'

export default function Table(props) {
  return (
    <div className="table">
      {Array.apply(null, { length: props.colNum }).map((e, i) => (
        <TableRow rowNum={props.rowNum} color={props.color}/>
      ))}
    </div>
  );
}
