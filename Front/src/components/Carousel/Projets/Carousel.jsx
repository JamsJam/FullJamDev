import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useMediaQuery } from 'react-responsive';
import { v4 as uuidv4 } from 'uuid';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import './Carousel.css';


export default function Carousel() {


  const tableTest = [
    "https://picsum.photos/600/600",
    "https://picsum.photos/500/500",
    "https://picsum.photos/300/300"
  ]

  
  const displayRef = useRef(null)



	const isDesktop = useMediaQuery({
    query: '(min-width: 769px)'
  })

  const isTablette = useMediaQuery({
      query: '(max-width: 769px)'
    })
  const isMobile = useMediaQuery({
      query: '(max-width: 500px)'
    })



    const changeSlideFromThumbnails = (e)=>{
      displayRef.current.setAttribute('src', e.target.getAttribute('src'))

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

            <img src={tableTest[0]} alt="" className="capture-project__onDisplay" ref={displayRef} />

          </div>


          <div className="capture-project__thumbnails">

          {tableTest.map((item,index)=>{
              
              return(
                <img key={index} data-slide={index} src={item} alt="" 
                
                  className={
                    ` project-thumbnails ${isDesktop  ? 'fullSize' : 'progSize' } ${index == 0 ? 'onDisplay' : ''}`
                  }
                  

                  onClickCapture={
                    (e)=>{
                      changeSlideFromThumbnails(e)
                      focusSelectedThumbnail(e)
                    }

                  }
                
                />
                
              )
            })
          }

          </div>


      </div>
    

    </>
  );
}
