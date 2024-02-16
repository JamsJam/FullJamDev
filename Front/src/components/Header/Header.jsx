import React, { useState } from 'react'
import "./Header.css"

import { useMediaQuery } from 'react-responsive'

import logoHeader from "../../assets/jamdev-header.png"
import logoinsta from "../../assets/insta-logo.png"
import logoLinkedin from "../../assets/linkedin-logo.png"
import logogit from "../../assets/Github-logo.png"
import { NavLink } from 'react-router-dom'
import Burger from '../Burger/Burger'

export default function Header() {

    const [display, setDisplay] = useState(false)

    const handleMatchDesktop = (matches) =>{
        !matches && setDisplay(false)
    }

    const isDesktop = useMediaQuery({
        query: '(min-width: 769px)'
      }, undefined, handleMatchDesktop)

    const isTablette = useMediaQuery({
        query: '(max-width: 769px)'
      })
    const isMobile = useMediaQuery({
        query: '(max-width: 500px)'
      })
    
    
    const displayContexMenu = ()=> {
        setDisplay(!display)
    }

  return (
    <header>
        
        <img src={logoHeader} alt="Logo FullJamDev" />

        {isDesktop && 
            <>
                <nav className="linkContainer">

                    {/* <a href="#" className='titre-18'> Link 1</a>
                    <a href="#" className='titre-18'> Link 2</a> */}
                    <NavLink 
                        to='/'
                        className='titre-18'
                    > Accueil</NavLink>
                    <NavLink 
                        to='/mesprojets'
                        className='titre-18'
                    > Mes Projets</NavLink>
                </nav>
            

            
                <div className="reseauContainer">
                    <a href="http://" target="_blank" rel="noopener noreferrer">
                        <img src={logoinsta} alt=""  width={30}/>
                    </a>
                    <a href="http://" target="_blank" rel="noopener noreferrer">
                        <img src={logoLinkedin} alt=""  width={30}/>
                    </a>
                    <a href="http://" target="_blank" rel="noopener noreferrer">
                        <img src={logogit} alt=""  width={30}/>
                    </a>
                </div>
            </>
        }

        {isTablette &&
            <>
                
                <Burger
                    burgerClick={displayContexMenu}
                    isActiv={display}
                />


                <div className={`contextMenu ${display && 'contextMenu--display'} `} >
                    <img  src={logoHeader} alt="Logo FullJamDev" width={200}/>

                    <div className="linkContainer">
                        <NavLink 
                            to='/'
                            className='titre-18'
                            onClick={()=>setDisplay(false)}
                            > 
                            Accueil
                        </NavLink>
                        
                        <NavLink 
                            to='/mesprojets'
                            className='titre-18'
                            onClick={()=>setDisplay(false)}
                            > 
                            Mes Projets
                        </NavLink>
                    </div>

                    <div className="reseauContainer">
                        <a href="http://" target="_blank" rel="noopener noreferrer">
                            <img src={logoinsta} alt=""  width={30}/>
                        </a>
                        <a href="http://" target="_blank" rel="noopener noreferrer">
                            <img src={logoLinkedin} alt=""  width={30}/>
                        </a>
                        <a href="http://" target="_blank" rel="noopener noreferrer">
                            <img src={logogit} alt=""  width={30}/>
                        </a>
                    </div>



                </div>
            </>
        }

    </header>
  )
}
