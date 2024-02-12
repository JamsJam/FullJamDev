import React from 'react'
import './Banner.css'
import Button from '../Buttons/Button'

export default function Banner() {

    
  return (
    <div className='banner'>
      <div className='banner__overlay'></div>
      <div className="banner__info">
        <p className='titre-18'>Titre du projet</p>
        <p className='texte-16-r'>Catégorie</p>
        <Button
          type={'navlink'}
          link={'/projet/3'}
          label={'Voir le projet'}
          className={'button button--secondary--small texte-13-m'}
        />
      </div>

    </div>
  )
}
