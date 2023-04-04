
import React from 'react';




function HeaderCell (props) {

    const isDescSorting = props.sorting.column === props.column && props.sorting.order === "desc";
    const isAscSorting = props.sorting.column === props.column && props.sorting.order === "asc";
    const futureSortingOrder = isDescSorting ? "asc" : "desc";

    return (
        <th key={props.column} className='users-table-cell' onClick={() => props.sortTable({column: props.column, order: futureSortingOrder})} >
            {props.column}
            {isDescSorting && <span>↓</span>}
            {isAscSorting && <span>↑</span>}
        </th>
    )
}


export default function Header(props) {
  return (
    <thead>
      <tr>
        {
            props.columns.map(column => (
                <HeaderCell column={column} sorting={props.sorting} key={props.column} sortTable={props.sortTable}/>
            ))
        }
      </tr>
    </thead>
  )
}
