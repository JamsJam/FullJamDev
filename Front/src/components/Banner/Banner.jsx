import React from 'react'
import {useDispatch} from 'react-redux'
import { getChoosenProject } from '../../redux/Slices/ProjectSlice'
import './Banner.css'
import Button from '../Buttons/Button'

export default function Banner({project}) {

  const dispatch = useDispatch()
  const {titre, categorie, images, slug, id} = project
  const {banner} = images

  const handleChoosenBanner =()=> {

    dispatch(getChoosenProject(id))
  }
    
  return (
    <div className='banner' 
      style={{backgroundImage:`url(https://back.fulljamdev.fr/assets/projet/${slug}/${banner}) `, backgroundPosition:'center', backgroundRepeat:'no-repeat', backgroundSize:'cover'}}
      >
      <div className='banner__overlay'></div>
      <div className="banner__info">
        <p className='titre-18'>{titre}</p>
        <p className='texte-16-r'>{categorie.nom}</p>
        <Button
          type={'link'}
          link={`/projet/${slug}`}
          label={'Voir le projet'}
          className={'button button--secondary--small texte-13-m'}
          handleClick={()=>handleChoosenBanner() }
        />
      </div>

    </div>
  )
}
