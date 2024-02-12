import React from 'react'
import './Footer.css'
import jamdevLogo from '../../assets/jamdev-header.png'
import instaLogo from '../../assets/insta-logo.png'
import linkdinLogo from '../../assets/linkedin-logo.png'
import gitLogo from '../../assets/Github-logo.png'
import { useMediaQuery } from 'react-responsive'

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
					<img className='footer__logo' src={jamdevLogo} alt="" />
				</div>
				}
			
				
				<ul className='footer__nav titre-14'>
					<li>Accueil</li>
					<li>Mes projets</li>
				</ul>
				
				
				<div>

					<div className='footer__reseauContainer'>
						<img className='footer__reseau' src={instaLogo} alt="" />
						<img className='footer__reseau' src={linkdinLogo} alt="" />
						<img className='footer__reseau' src={gitLogo} alt="" />
					</div>

					<div>
						<p className='titre-14'>
							Experience  •  Expertise  •  Excellence
						</p>
					</div>

				</div>

			</div>

			<div className='footer2__container'>
				<p className='titre-14'>
					Politique de confidentialité
				</p>
			</div>

		</footer>
	)
}
