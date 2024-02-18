import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import './Carousel.css'
import Button from '../../Buttons/Button'
import {getChoosenProject} from '../../../redux/Slices/ProjectSlice'


export default function Carousel({projects}) {

    const dispatch = useDispatch()
    const [activIndex, setActivIndex] = useState(0)

    const handleProjectClick = ()=>{
        dispatch(getChoosenProject(projects[activIndex].id))
    }

    const handleBulletClick=(e)=>{
        const selectIndex = e.target.getAttribute('data-index')
        setActivIndex(selectIndex)
    }
  return (
    <div className={'carousel'}>

        <div className={"carousel__pagination"}>
            {projects.map((item,index)=>{
                return (
                    <div 
                        key={index}  
                        data-index={index} 
                        className={'pagination__bullet texte-18-sb'}
                        onClick={(e)=>{handleBulletClick(e)}}
                    >{index+1}</div>
            )})}
            
        </div>
        
        <div className={'carousel__wrapper'}>

            <div className={'carousel__preview'}>
                <img src={`https://back.fulljamdev.fr/assets/projet/${projects[activIndex].slug}/${projects[activIndex].images.slider.image1.onDisplay}`} alt="" />
            </div>

            <div className={"carousel__infos"}>
                <p className={'texte-16-b'}>{projects[activIndex].titre}</p>
                <Button
                    type={'link'}
                    link={`/projet/${projects[activIndex].slug}`}
                    label={'Voir le projet'}
                    className={'button button--secondary--small texte-13-m'}
                    handleClick={()=>handleProjectClick()}
                />
            </div>

        </div>

    </div>
  )
}
