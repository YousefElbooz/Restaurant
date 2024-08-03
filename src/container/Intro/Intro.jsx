import React, { useRef, useState } from 'react';
import { BsFillPlayFill,BsPauseFill } from 'react-icons/bs';
import {meal} from '../../constants';
import './Intro.css';

const Intro = () => {
  const VidRef=useRef();
  const [playVideo, setPlayVideo] = useState(false);
  const handleVideo=()=>{
    setPlayVideo((prevPlayVideo)=>!prevPlayVideo)
    playVideo ? VidRef.current.pause() : VidRef.current.play();
  };
  return(
    <div className="app__video flex__center">
      <video 
        src={meal}
        ref={VidRef}
        type="video/mp4"
        loop
        controls={false}
        muted
      />
      <div className="app__video-overlay flex__center" id={playVideo ? 'on':'off'}>
        <div 
          className='app__video-overlay_circle flex__center'
          onClick={handleVideo}
        >    
          {playVideo ? 
          (<BsPauseFill
            color='#fff' fontSize={30}/>) : 
          (<BsFillPlayFill
            color='#fff' fontSize={30}/>)
          }
        </div>
      </div>
    </div>
  )
};

export default Intro;
