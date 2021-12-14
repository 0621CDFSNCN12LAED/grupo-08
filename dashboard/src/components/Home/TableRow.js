import React from 'react';
import './Home.css';

function TableRow(props) {
  return (
        <tr>
          <td>{props.Title}</td>
          <td>{props.altura}</td>
          <td>{props.Pecho}</td>
          <td>{props.Cintura}</td>
          <td>{props.Cadera}</td>
          <td>{props.Pierna}</td>
        </tr>
  );
}

export default TableRow;