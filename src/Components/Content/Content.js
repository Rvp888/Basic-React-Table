
import React from 'react';
import './Content.css';

export default function Content(props) {
  return (
    <tbody>
      {
        props.entries.map(entry => (
            <tr key={entry.id}>
                {props.columns.map(column => {
                  if(column === 'actions'){
                      return (
                        <td key={column} className='users-table-cell'><button className='actions_edit'>Edit</button><button className='actions_delete'>Delete</button></td>
                      )
                  }
                  return (
                    <td key={column} className='users-table-cell'>{entry[column]}</td>
                  )
                })}
            </tr>
        ))
      }
    </tbody>
  )
}
