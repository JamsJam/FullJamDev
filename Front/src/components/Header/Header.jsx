import React, { useState } from 'react'
import "./Header.css"

import { useMediaQuery } from 'react-responsive'

import logoHeader from "../../assets/jamdev-header.png"
import logoMalt from "../../assets/LogoMalt.svg"
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
        <NavLink 
            to='/'
            // className='fjd-header-logo'
        > 
            <img src={logoHeader} alt="Logo FullJamDev" className='fjd-header-logo' />
        </NavLink>

        {isDesktop && 
            <>
                <nav className="linkContainer">

                    
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
                    <a href="https://www.malt.fr/profile/jeremyantoine" target="_blank" rel="noopener noreferrer" className='header__reseau'>
                        <img src={logoMalt} alt="logo-malt"  width={30}/>
                    </a>
                    <a href="https://www.linkedin.com/in/jeremy-antoine-dwwm/" target="_blank" rel="noopener noreferrer" className='header__reseau'>
                        <img src={logoLinkedin} alt="Logo-linkedin"  width={30}/>
                    </a>
                    <a href="https://github.com/JamsJam" target="_blank" rel="noopener noreferrer" className='header__reseau'>
                        <img src={logogit} alt="logo-git"  width={30}/>
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
                        <a href="https://www.malt.fr/profile/jeremyantoine" target="_blank" rel="noopener noreferrer" className='header__reseau'>
                            <img src={logoMalt} alt="logo-malt"  width={30}/>
                        </a>
                        <a href="https://www.linkedin.com/in/jeremy-antoine-dwwm/" target="_blank" rel="noopener noreferrer" className='header__reseau'>
                            <img src={logoLinkedin} alt="logo-linkedin"  width={30}/>
                        </a>
                        <a href="https://github.com/JamsJam" target="_blank" rel="noopener noreferrer" className='header__reseau'>
                            <img src={logogit} alt="logo-git"  width={30}/>
                        </a>
                    </div>



                </div>
            </>
        }

    </header>
  )
}
