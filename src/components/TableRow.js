import React from 'react'
import TableCell from './TableCell'

export default function TableRow(props) {
    return (
        <div>
        {Array.apply(null, { length: props.rowNum}).map((e, i) => 
        <TableCell color={props.color}/>)}
    </div>
    )
}
