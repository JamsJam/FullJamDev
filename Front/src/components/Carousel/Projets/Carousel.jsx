import React, { useRef, useState } from 'react';
import {useSelector} from 'react-redux'
import { useMediaQuery } from 'react-responsive';

import 'swiper/css';
import 'swiper/css/navigation';
import './Carousel.css';


export default function Carousel({imageList}) {

  const {slug, images} = useSelector((state)=>state.projects.choosen)

  const tableImage = Object.values(images.slider)

  // for (const [key, value] of Object.entries(images.slider)) {
  //   tableImage.push(`${key}: ${value}`);
  // }
 
  
  const displayRef = useRef(null)



	const isDesktop = useMediaQuery({
    query: '(min-width: 769px)'
  })





    const changeSlideFromThumbnails = (e)=>{
      const currentIndex = e.target.getAttribute('data-index')

      displayRef.current.setAttribute('src', `http://localhost:8000/assets/projet/${slug}/${tableImage[currentIndex].onDisplay}`)
    }

    const focusSelectedThumbnail = (e) =>{
      document.querySelectorAll('.capture-project__thumbnails .onDisplay').forEach((item)=>{
        item.classList.remove('onDisplay')
      })
      if (!e.target.classList.contains('onDisplay') ) {
      

        e.target.classList.add('onDisplay')

      }
      else{
        return
      }
    }

  return (
    <>

      


      <div className="capture-project__container">


          <div className="capture-project__display">

            <img src={`http://localhost:8000/assets/projet/${slug}/${tableImage[0].onDisplay}`} alt="" className="capture-project__onDisplay" ref={displayRef} />

          </div>


          <div className="capture-project__thumbnails">

          {tableImage.map((item,index)=>{
              
              return(
                <img 
                  key={index} 
                  data-index={index} 
                  src={`http://localhost:8000/assets/projet/${slug}/${item.miniature}`}
                  alt="" 
                  className={
                    ` project-thumbnails ${isDesktop  ? 'fullSize' : 'progSize' } ${index == 0 ? 'onDisplay' : ''}`
                  }
                  onClickCapture={(e)=>{
                      changeSlideFromThumbnails(e)
                      focusSelectedThumbnail(e)
                    }}
                
                />
                
              )
            })
          }

          </div>


      </div>
    

    </>
  );
}
