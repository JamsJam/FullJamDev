import React from 'react'
import './HomePage.css'
import Header from '../../components/Header/Header'
import Presentation from './Presentation/Presentation'
import Realisation from './Realisations/Realisation'
import Apropos from './Apropos/Apropos'
import MesTechnos from './MesTechnos/MesTechnos'
import Contact from '../../shared/Contact/Contact'
import Footer from '../../components/Footer/Footer'
import { useMediaQuery } from 'react-responsive'


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
