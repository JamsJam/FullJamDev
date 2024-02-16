import React, {useState} from 'react'
import './Flash.css'

export default function Flash({type, message, setShowError , etat}) {
    
  if(etat){

    return (
      <div className={`flash flash--${type}`}>

        <span className='flash__close texte-16-b' onClick={()=>{setShowError(false)}}>x</span>

        <p className={'flash__message texte-16-r'}>{message}</p>
      </div>
    )
  }

}
