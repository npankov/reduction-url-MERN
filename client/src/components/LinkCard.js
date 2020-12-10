import React from 'react';

export const LinkCard = ({ link }) => {
  return (
    <>
      <h2>Lien</h2>

      <p>Votre lien: <a href={link.to} target="_blank" rel="noopener noreferer">{link.to}</a> </p>
      <p>À: <a href={link.from} target="_blank" rel="noopener noreferer">{link.from}</a> </p>
      <p>Number de clicks: <strong>{link.clicks}</strong></p>
      <p>Date de creation: <strong>{new Date(link.date).toLocaleDateString()}</strong></p>
    </>
  )
}
