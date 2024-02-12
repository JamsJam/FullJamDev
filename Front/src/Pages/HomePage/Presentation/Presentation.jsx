import React from 'react'
import LogoAccueil from '../../../assets/Logo-Master.png'
import './Presentation.css'
import Button from '../../../components/Buttons/Button'
import logoGitHub from './../../../assets/logoGit/Vector.png'
import {useMediaQuery} from 'react-responsive'

export default function Presentation() {


    const isDesktop = useMediaQuery({
        query: '(min-width: 769px)'
      })
  
    const isTabletteXl = useMediaQuery({
        query: '(min-width: 1200px)'
      })
    const isTablette = useMediaQuery({
        query: '(max-width: 769px)'
      })
    const isMobile = useMediaQuery({
        query: '(max-width: 500px)'
      })


  return (
    <>
        <section className="presentation">


            <div className='presentationContainer'>

                

                <div>
                    <h1 className={`${isTablette ? 'titre-64-to-40--tab' : 'titre-64-to-40'}`}>FullJam Dev</h1>
                    <h2 className={`${isTablette ? 'texte-24-to-18-m--tab' : 'texte-24-to-18-m--desk'}`}>Développeur Web Full Stack</h2>
                </div>
                    <p className={`${isTablette ? 'titre-40-to-32--tab' : 'titre-40-to-32--desk'}`}>Osez l'excellence</p>

                <div className='comment-text-container'>
                    <p className='texte-20-r comment-text' >// Développeur d'application web</p>
                    <p className='texte-20-r comment-text' >// Développeur d'application mobile</p>
                    
                </div>

                <div className={`${isTablette ? 'buttonReseau__container--tab' : 'buttonReseau__container--desk'}`}>
                    
                    <Button
                        className={'button button--reseau titre-12'}
                        label={"Github"}
                        link={"#"}
                        type={'extLink'}
                        icon={logoGitHub}
                        />

                    <Button
                        className={'button button--reseau titre-12'}
                        label={"Instagram"}
                        link={"#"}
                        type={'extLink'}
                        icon={logoGitHub}
                        />

                    <Button
                        className={'button button--reseau titre-12'}
                        label={"Linkdin"}
                        link={"#"}
                        type={'extLink'}
                        icon={logoGitHub}
                        />

                </div>

                <div className='buttons__Container'>

                    <Button
                        className={'button button--primary label-btn-primary--20--12'}
                        label={"Mes Projets"}
                        type={'link'}
                        link={"/mesprojets"}
                        />
                    <Button
                        className={'button button--secondary texte-18-to-13-sb'}
                        label={"Me Contacter"}
                        type={'intLink'}
                        link={"#mecontacter"}
                        />
                    
                </div>

            </div>

            {!isTablette &&
                <img src={LogoAccueil}  alt=""  className='presentation--image'/>
            }
        </section>
    </>
  )
}
