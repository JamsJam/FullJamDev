import React from 'react'
import Button from '../../../components/Buttons/Button'
import './Apropos.css'
import { useMediaQuery } from 'react-responsive'

export default function Apropos() {

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
    <section className="apropos">

        <h2 className={`${isTablette ? 'titre-32-to-18--tab' :'titre-32'}`}>A propos de moi</h2>
        <div className="appropsSection">

          <div className='apropos__container'>

            <p className='texte-18-sb'>
              Je m’appelle Jérémy ANTOINE et j'ai entamé ma carrière dans le monde du développement web après une réorientation professionnelle. Depuis, j'ai eu la chance de travailler sur une variété de projets passionnants.
            </p>

            <p className='texte-18-sb'>
              Ce qui me motive le plus, c'est la possibilité de résoudre des problèmes complexes en utilisant le code. J'aime explorer de nouvelles technologies et relever des défis pour créer des expériences numériques remarquables.
            </p>

            <p className='texte-18-sb'>
              Je tiens à de rester à jour avec les technologies que j'utilise pour vous garantir des solutions plus qualitatives.  
            </p>
            
            <p className='texte-18-sb'>
              Mon objectif est de mettre mes compétences a contribution afin de transformer des idées en réalité et de créer des produits numériques à la hauteur de vos attentes.  
            </p>
            
          </div>

          <Button
              className={'button button--primary titre-20-to-14'}
              label={"Voir mes projets"}
              link={"/mesprojets"}
              type='link'
              />

              
        </div>
    </section>
  )
}
