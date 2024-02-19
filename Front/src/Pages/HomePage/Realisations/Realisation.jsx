import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { useMediaQuery } from 'react-responsive'
import './Realisation.css'
import Banner from '../../../components/Banner/Banner'
import Button from '../../../components/Buttons/Button'
import Carousel from '../../../components/Carousel/Highlight/Carousel'

export default function Realisation() {

  const dispatch = useDispatch()
  const {list} = useSelector((state)=>state.projects)
  const hightlighted = list.filter((project)=>{
    return project.isHighlighted ===  true
  })

  

  


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
    <section 
      className="realisation"
      >
        <h2 className={`${isTablette ? 'titre-32-to-18--tab' :'titre-32'}`}>
          Découvrez Mes Realisations
        </h2>

      { !isTablette ?
        <div className="banner__container">
          
          {list.lengh > 0 && hightlighted.map((projet, index)=>{
            return (
              <Banner
                project={projet}
                key={index}
              />
            )
          })}
          
          
          
        </div>
      :
         list.lengh > 0 &&

          <Carousel
          projects={hightlighted}
          />
      }

        <Button
          type='navlink'
          label={'Voir tout mes projets'}
          link={'/mesprojets'}
          className={'button button--primary titre-20-to-14'}
          
          

        />
        
    </section>
  )
}
