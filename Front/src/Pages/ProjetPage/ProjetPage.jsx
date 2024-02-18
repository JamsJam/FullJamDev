import React from 'react'
import {useSelector} from 'react-redux'
import Button from "./../../components/Buttons/Button"
import TechnoCube from "./../../components/TechnoCube/TechnoCube"
import "./ProjetPage.css"
import Carousel from '../../components/Carousel/Projets/Carousel'
import { useMediaQuery } from 'react-responsive'

export default function ProjetPage() {
    
  const {titre, description, technologies, images, lien , github } = useSelector((state)=>state.projects.choosen)
  


  const isTablette = useMediaQuery({
      query: '(max-width: 769px)'
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
          {technologies.map((techno, index)=>{
            return (<TechnoCube key={index} techno={techno.nom} />)
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
        {github !== "indisponible" &&

          <Button
            type='extLink'
            link={github}
            label="Github"
            className={"button button--github texte-18-to-13-sb"}
          />
        }

        {lien !== "indisponible" &&
          <Button
            type='extLink'
            link={lien}
            label="Voir le projets"
            className={"button button--secondary--small texte-18-to-13-sb"}
          />
      }
        
      </section>

    </main>
  )
}
