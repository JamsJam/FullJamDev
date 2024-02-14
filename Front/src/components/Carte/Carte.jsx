import React from 'react'
import { useDispatch} from 'react-redux'
import './Carte.css'
import Button from '../Buttons/Button'
import imageTest from '../../assets/Logo-Master.png'
import {getChoosenProject} from '../../redux/Slices/ProjectSlice'

export default function Carte({project}) {
  const dispatch = useDispatch()

  const handleChoosenCard =()=> {

    dispatch(getChoosenProject(project.id))
  }

  return (
    <div className='carte'>

        <img src={`http://localhost:8000/assets/projet/${project.slug}/${project.images.card}`} alt="" />
        <div className="carte__infoContainer">
            <div className="carte__info">
              <p className="titre-16-b">{project.titre}</p>
              {/* <p className="texte-16-r">Catégorie et technologie</p> */}
            </div>
            <div className="carte__button">
                <Button
                    type={'link'}
                    label={"Voir plus"}
                    link={`/projet/${project.slug}`}
                    className={'button button--secondary--small texte-13-m'}
                    handleClick={()=>{handleChoosenCard()}}
                />
            </div>
        </div>

    </div>
  )
}
