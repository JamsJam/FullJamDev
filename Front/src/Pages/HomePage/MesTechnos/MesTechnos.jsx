import React from 'react'
import './MesTechnos.css'
import { useMediaQuery } from 'react-responsive'
import TechnoCube from '../../../components/TechnoCube/TechnoCube'

export default function MesTechnos() {

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
    <section className="mesTechnos">
        <h2 className={`${isTablette ? 'titre-32-to-18--tab' :'titre-32'}`}>Mes outils</h2>
        <div className="techno__grid">
          
          
          {/* <div className="technoContainer">
            <div className="techno__logo">
              
            </div>
            <p className='titre-16'>Symfony</p>
          </div> */}

          <TechnoCube
            techno={"Symfony"}
          />
          <TechnoCube
            techno={"React"}
          />
          <TechnoCube
            techno={"React Native"}
          />
          <TechnoCube
            techno={"Electron"}
          />
          <TechnoCube
            techno={"PHP"}
          />
          <TechnoCube
            techno={"Javascript"}
          />
          <TechnoCube
            techno={"Sass"}
          />
          <TechnoCube
            techno={"GitHub"}
          />
          
{/*           
          <div className="technoContainer">
            <div className="techno__logo">
              
            </div>
            <p className='titre-16'>Symfony</p>
          </div>
          
          
          <div className="technoContainer">
            <div className="techno__logo">
              
            </div>
            <p className='titre-16'>Symfony</p>
          </div>
          
          
          <div className="technoContainer">
            <div className="techno__logo">
              
            </div>
            <p className='titre-16'>Symfony</p>
          </div>
          
          
          <div className="technoContainer">
            <div className="techno__logo">
              
            </div>
            <p className='titre-16'>Symfony</p>
          </div>
          
          
          <div className="technoContainer">
            <div className="techno__logo">
              
            </div>
            <p className='titre-16'>Symfony</p>
          </div>
          
          
          <div className="technoContainer">
            <div className="techno__logo">
              
            </div>
            <p className='titre-16'>Symfony</p>
          </div>
          
          
          <div className="technoContainer">
            <div className="techno__logo">
              
            </div>
            <p className='titre-16'>Symfony</p>
          </div> */}


        </div>
    </section>
  )
}
