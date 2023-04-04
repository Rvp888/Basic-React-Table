
import React from 'react'

export default function Content(props) {
  return (
    <tbody>
      {
        props.entries.map(entry => (
            <tr key={entry.id}>
                {props.columns.map(column => (
                    <td key={column} className='users-table-cell'>{entry[column]}</td>
                ))}
            </tr>
        ))
      }
    </tbody>
  )
}
