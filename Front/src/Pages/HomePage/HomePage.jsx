import React from 'react'
import './HomePage.css'
import Header from '../../components/Header/Header'
import Presentation from './Presentation/Presentation'
import Realisation from './Realisations/Realisation'
import Apropos from './Apropos/Apropos'
import MesTechnos from './MesTechnos/MesTechnos'



export default function HomePage() {




  return (
    
    <main className='homePage' id='home'>
        <Presentation/>

        <Realisation/>

        <Apropos/>

        <MesTechnos/>

    </main>
    
  )
}
