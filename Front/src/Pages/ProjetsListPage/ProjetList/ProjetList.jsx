import React from 'react'
import './ProjetList.css'
import Carte from '../../../components/Carte/Carte'

export default function ProjetList() {
  return (
    <section className='projetList'>

      <div className="gridProjet">
          <Carte/>
          <Carte/>
          <Carte/>
          <Carte/>
          <Carte/>
          <Carte/>
          <Carte/>
      </div>
    </section>
  )
}
