import React from 'react'
import './Banner.css'
import Button from '../Buttons/Button'

export default function Banner({project}) {

  console.log(project)
  const {titre, categorie, images, slug} = project
  const {banner} = images
    
  return (
    <div className='banner' 
      style={{backgroundImage:`url(http://localhost:8000/assets/projet/${slug}/${banner}) `, backgroundPosition:'center', backgroundRepeat:'no-repeat', backgroundSize:'cover'}}
      >
      <div className='banner__overlay'></div>
      <div className="banner__info">
        <p className='titre-18'>{titre}</p>
        <p className='texte-16-r'>{categorie.nom}</p>
        <Button
          type={'navlink'}
          link={`/projet/${slug}`}
          label={'Voir le projet'}
          className={'button button--secondary--small texte-13-m'}
        />
      </div>

    </div>
  )
}
