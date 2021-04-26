import React from 'react'

function TableRow({date, name, count, distance}) {
    const newDate = new Date(date)
    const formattedDate = newDate.getDate()+"."+(newDate.getMonth()+1)+"."+newDate.getFullYear();
    return (
        <tr>
            <td>{formattedDate}</td>
            <td>{name}</td>
            <td>{count}</td>
            <td>{distance}</td>

        </tr>
    )
}

export default TableRow
