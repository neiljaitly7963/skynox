import React from 'react';
import './StreamingNow.css';
import tom from '../../svg/tom.jpg'

const StreamingNow = () => {
    return(
        <div className="streaming">
            <div className="heading"><div><span className="dark-text">Streaming</span><span className="light-text">Now</span></div><span>...</span></div>
            <div className="content">
                <div className="streamers"><img className="big-photo" src={tom} /></div>
                <div className="streamers"><img className="big-photo" src={tom} /></div>
                <div className="streamers"><img className="big-photo" src={tom} /></div>
                <div className="streamers"><img className="big-photo" src={tom} /></div>
                <div className="streamers"><img className="big-photo" src={tom} /></div> 
                <div className="streamers"><img className="big-photo" src={tom} /></div>
                <div className="streamers"><img className="big-photo" src={tom} /></div>
            </div>
        </div>
    )
}

export default StreamingNow; 