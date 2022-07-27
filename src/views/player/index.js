import React, { useEffect, useState } from "react";
import ReactPlayer from 'react-player';
import './player.css';
import Navabar from "../../components/Navbar";
import Footer from "../../components/Footers/index"


const Player = () => {
   
  return (
    // <div className="col-md-12 col-lg-12 col-12 col-sm-12">
    <>
    
    <div className="Header">
      <Navabar />
      </div>
      <div className='player-wrapper' style={{height:"100%",width:"100%",minHeight:"225px",marginTop:"0%"}}>
        <ReactPlayer
          className='react-player'
          url='https://www.youtube.com/watch?v=ysz5S6PUM-U'
          width='80%'
          playIcon={<button>Play</button>}
          controls
            muted
            config={{
              youtube: {
                playerVars: { showinfo: 1 }
              }
            }}
          height='100%'
        />
      </div>
      {/* <div className="Footer" style={{marginTop:"20%"}}>
        <Footer /> */}
      {/* </div> */}
    {/* //   </div> */}
    </>
    // </div>
  );
};


export default Player;
