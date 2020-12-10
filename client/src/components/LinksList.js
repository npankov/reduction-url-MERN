import React from 'react';
import { Link } from 'react-router-dom';

export const LinksList = ({ links }) => {
  if (!links.length) {
    return <p className="center">Il n'y a pas des liens :(</p>
  }
  return (
    <table>
      <thead>
      <tr>
        <th>N.</th>
        <th>Original</th>
        <th>Court</th>
        <th>Ouvrir</th>
      </tr>
      </thead>

      <tbody>
      { links.map((link, index) => {
        return (
          <tr key={link._id}>
            <td>{index + 1}</td>
            <td>{link.from}</td>
            <td>{link.to}</td>
            <td>
              <Link to={`/detail/${link._id}`}>Ouvrir</Link>
            </td>
          </tr>
        )
      })}

      </tbody>
    </table>
  )
}
