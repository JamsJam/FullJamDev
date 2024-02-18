import React from 'react'
import './Footer.css'
import jamdevLogo from '../../assets/jamdev-header.png'
import instaLogo from '../../assets/insta-logo.png'
import logoMalt from '../../assets/LogoMalt.svg'
import linkdinLogo from '../../assets/linkedin-logo.png'
import gitLogo from '../../assets/Github-logo.png'
import { useMediaQuery } from 'react-responsive'
import { NavLink } from 'react-router-dom'

export default function Footer() {

	const isDesktop = useMediaQuery({
        query: '(min-width: 769px)'
      })

    const isTablette = useMediaQuery({
        query: '(max-width: 769px)'
      })
    const isMobile = useMediaQuery({
        query: '(max-width: 500px)'
      })
    

	return (
		<footer>
			<div className='footer1__container'>
			
			{ isDesktop && 
				<div>
					<NavLink
						to={'/'}>

						<img className='footer__logo' src={jamdevLogo} alt="" />
					</NavLink>
				</div>
				}
			
				
				<ul className='footer__nav titre-14'>
					<li>
						{/* Accueil */}
						<NavLink 
							to='/'
							className='titre-14'
						> Accueil</NavLink>
					</li>

					<li>
						{/* Mes projets */}
					
                    <NavLink 
                        to='/mesprojets'
                        className='titre-14'
                    > Mes Projets</NavLink>
					</li>
					

				</ul>
				
				
				<div>

					<div className='footer__reseauContainer'>

						<a href="https://www.malt.fr/profile/jeremyantoine" target="_blank" rel="noopener noreferrer" className='footer__reseau'>
                            <img src={logoMalt} alt="logo-malt"  width={30}/>
                        </a>
                        <a href="https://www.linkedin.com/in/jeremy-antoine-dwwm/" target="_blank" rel="noopener noreferrer" className='footer__reseau'>
                            <img src={linkdinLogo} alt="logo-linkedin"  width={30}/>
                        </a>
                        <a href="https://github.com/JamsJam" target="_blank" rel="noopener noreferrer" className='footer__reseau'>
                            <img src={gitLogo} alt="logo-git"  width={30}/>
                        </a>
					</div>

					<div>
						<p className='titre-14'>
							Experience  •  Expertise  •  Excellence
						</p>
					</div>

				</div>

			</div>

			<div className='footer2__container'>
				{/* <p className='titre-14'>
					Politique de confidentialité
				</p> */}
			</div>

		</footer>
	)
}
