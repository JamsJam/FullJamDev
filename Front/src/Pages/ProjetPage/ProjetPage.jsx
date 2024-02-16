import React from 'react'
import {useSelector} from 'react-redux'
import Button from "./../../components/Buttons/Button"
import TechnoCube from "./../../components/TechnoCube/TechnoCube"
import "./ProjetPage.css"
import Carousel from '../../components/Carousel/Projets/Carousel'
import { useMediaQuery } from 'react-responsive'

export default function ProjetPage() {
    
  const {titre, description, technologies, images } = useSelector((state)=>state.projects.choosen)
  

  const isDesktop = useMediaQuery({
      query: '(min-width: 769px)'
    })

  const isTabletteXl = useMediaQuery({
      query: '(min-width: 1200px)'
    })
  const isTablette = useMediaQuery({
      query: '(max-width: 769px)'
    })
  const isMobile = useMediaQuery({
      query: '(max-width: 500px)'
    })

  return (
    <main className='projet'>
      {/* titre */}
      <h1 
        className={`${isTablette ? 'titre-64-to-40--tab' : 'titre-64-to-40'}`}
      >
        {titre}
      </h1>

      {/* description */}
      <section 
        className='description'
      >
        <h2
          className={`${isTablette ? 'titre-32-to-18--tab' :'titre-32'}`}
        >
          Description
        </h2>
        <p className='texte-16-r'>
          {description}
        </p>
      </section>

      {/* teechnologie */}
      <section 
        className='technologie'
      >
        <h2
          className={`${isTablette ? 'titre-32-to-18--tab' :'titre-32'}`}
        >
          Technologies
        </h2>
        <div>
          {technologies.map((techno)=>{
            return (<TechnoCube techno={techno.nom} />)
          })
        }
        </div>
        
      </section>

      {/*  images preview */}
      <section 
        className='preview'
      >
        <h2
          className={`${isTablette ? 'titre-32-to-18--tab' :'titre-32'}`}
        >
          Screens
        </h2>
        
        <div>
          {/* carousel */}
          <div className='carousel__projet'>
            <Carousel
              imageList={images.slider}
            />
          </div>
          

        
        </div>


      </section>


      <section 
        className='button__container'
      >
        <Button
          type='extLink'
          label="Github"
          className={"button button--github texte-18-to-13-sb"}
        />
        <Button
        
          type='extLink'
          label="Voir le projets"
          className={"button button--secondary--small texte-18-to-13-sb"}
        />
        
      </section>

    </main>
  )
}
