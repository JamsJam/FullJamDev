import React from 'react'
import { useMediaQuery } from 'react-responsive'
import './Realisation.css'
import Banner from '../../../components/Banner/Banner'
import Button from '../../../components/Buttons/Button'
import Carousel from '../../../components/Carousel/Highlight/Carousel'

export default function Realisation() {

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
          <Banner/>
          <Banner/>
          <Banner/>
        </div>
      :
        // <div className="banner__container">
        //   <Banner/>
        //   <Banner/>
        //   <Banner/>
        // </div>
        // <Carousel/>
        <Carousel/>
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
