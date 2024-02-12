import React from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import Contact from '../../shared/Contact/Contact'
import Carte from '../../components/Carte/Carte'
import ProjetSearch from './ProjetSearch/ProjetSearch'
import ProjetList from './ProjetList/ProjetList'
import { useMediaQuery } from 'react-responsive'
import './ProjetListPage.css'

export default function ProjetListPage() {


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


        <main className='mesProjets' id='mesprojets'>
          <h1 className={`${isTablette ? 'titre-64-to-40--tab' : 'titre-64-to-40'}`}>Mes Projets</h1>
          {/* <ProjetSearch/> */}
          <ProjetList/>

            {/* <Carte/> */}
        </main>

  )
}
