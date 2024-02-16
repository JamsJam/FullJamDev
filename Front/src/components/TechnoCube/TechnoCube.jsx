import React, {Suspense, lazy} from 'react'
import './TechnoCube.css'

export default function TechnoCube({techno}) {

    const logoUrl = `/images/logo/logo-${techno.toLowerCase().replaceAll(' ','')}.png`

  return (
    
    <div className="technoContainer">
        <div className="techno__logo">

                <img src={logoUrl} alt="" />

        </div>
        <p className='titre-16'>{techno}</p>
    </div>
  )
}
