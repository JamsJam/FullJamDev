import React, { useState } from 'react'
import './Burger.css'

export default function Burger({burgerClick}) {

    const [isActiv, setIsActiv] = useState(false)

    const handleBurgerClick= ()=>{
        setIsActiv(!isActiv)
        burgerClick()
    }

  return (
    <span onClick={()=>handleBurgerClick()} className="burger">
        <span className={`burger__barre ${isActiv && 'active'} `} id="barre1"></span>
        <span className={`burger__barre ${isActiv && 'active'} `} id="barre2"></span>
        <span className={`burger__barre ${isActiv && 'active'} `} id="barre3"></span>
    </span>
  )
}
