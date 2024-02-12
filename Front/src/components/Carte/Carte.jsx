import React from 'react'
import './Carte.css'
import Button from '../Buttons/Button'
import imageTest from '../../assets/Logo-Master.png'

export default function Carte() {
  return (
    <div className='carte'>

        <img src={imageTest} alt="" />
        <div className="carte__infoContainer">
            <div className="carte__info">
              <p className="titre-16-b">Titre du projet</p>
              {/* <p className="texte-16-r">Catégorie et technologie</p> */}
            </div>
            <div className="carte__button">
                <Button
                    type='link'
                    label={"Voir plus"}
                    link={'/projet/3'}
                    className={'button button--secondary--small texte-13-m'}
                />
            </div>
        </div>

    </div>
  )
}
