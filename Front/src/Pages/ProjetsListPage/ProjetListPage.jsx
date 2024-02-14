import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import ProjetList from './ProjetList/ProjetList'
import { useMediaQuery } from 'react-responsive'
import './ProjetListPage.css'

export default function ProjetListPage() {

  const dispatch = useDispatch()
  
  const list = useSelector((state)=>state.projects.list) 

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
          <ProjetList
            projects ={list}
          />

            {/* <Carte/> */}
        </main>

  )
}
