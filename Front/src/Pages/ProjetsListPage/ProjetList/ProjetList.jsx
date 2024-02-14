import React from 'react'
import './ProjetList.css'
import Carte from '../../../components/Carte/Carte'

export default function ProjetList({projects}) {
  return (
    <section className='projetList'>

      <div className="gridProjet">
          
          {projects.map((item, index)=>{
            return (
              
              <Carte key={index} project={item}/>
            )})
          }
          
          {/* <Carte/>
          <Carte/>
          <Carte/>
          <Carte/>
          <Carte/>
          <Carte/>
          <Carte/> */}
      </div>
    </section>
  )
}
