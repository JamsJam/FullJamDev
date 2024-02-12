import React from 'react'
import './Carousel.css'
import Button from '../../Buttons/Button'

export default function Carousel() {
  return (
    <div className={'carousel'}>

        <div className={"carousel__pagination"}>
            <div className={'pagination__bullet'}>1</div>
            <div className={'pagination__bullet'}>2</div>
            <div className={'pagination__bullet'}>3</div>
        </div>
        
        <div className={'carousel__wrapper'}>

            <div className={'carousel__preview'}>
                <img src="https://picsum.photos/400/300" alt="" />
            </div>

            <div className={"carousel__infos"}>
                <p className={'texte-16-b'}>Titre du projet</p>
                <Button
                    type={'navlink'}
                    link={'/projet/3'}
                    label={'Voir le projet'}
                    className={'button button--secondary--small texte-13-m'}
                />
            </div>

        </div>

    </div>
  )
}
