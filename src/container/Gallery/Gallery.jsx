import React, { useRef } from 'react';
import {SubHeading} from '../../components';
import  {images} from '../../constants';
import { BsInstagram,BsArrowLeftShort,BsArrowRightShort } from 'react-icons/bs';
import './Gallery.css'

const Gallery = () => {
  const scrollRef=useRef(null);
  const scroll=(dist)=>{
    const{ current }=scrollRef;
    if(dist==='left'){
      current.scrollLeft-=300;
    }else{
      current.scrollLeft+=300;
    }
  }
  const Images=[images.gallery01,images.gallery02,images.gallery03,images.gallery04]
  return (
    <div className='app__gallery flex__center'>
      <div className='app__gallery-content'>
        <SubHeading title="instagram"/>
        <h1 className='headtext__cormorant'>Photo Gallery</h1>
        <p className='p__opensans' style={{color:'#AAA',marginTop:'2rem'}}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat mattis ipsum turpis elit elit scelerisque egestas mu.
        </p>
        <button type='button' className='custom__button'>View more</button>
      </div>
      <div className='app__gallery-images'>
        <div className='app__gallery-images_container' ref={scrollRef}>
          {Images.map((image,index)=>(
            <div className='app__gallery-images_card flex__center' key={`gallery__images-${index+1}`}>
              <img src={image} alt="gallery image" />
              <BsInstagram className='gallery__image-icon'/>
            </div>
          ))}
        </div>
        <div className='app__gallery-images_arrows'>
          <BsArrowLeftShort className='gallery__arrow-icon' onClick={()=>scroll('left')}/>
          <BsArrowRightShort className='gallery__arrow-icon' onClick={()=>scroll('right')}/>
        </div>
      </div>
    </div>
  )
}

export default Gallery
