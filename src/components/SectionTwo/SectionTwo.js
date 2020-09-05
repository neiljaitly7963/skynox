import React from 'react';
import './SectionTwo.css';
import MiddleSection from './MiddleSection/MiddleSection'
import StreamingNow from './StreamingNow/StreamingNow'
import BottomSection from './BottomSection/BottomSection'



const SectionOne = () => {
    return(
        <div className="all-sections str-mar">
            <div className="top"><StreamingNow /></div>

            <MiddleSection />

            <div className="bottom"><BottomSection /></div>
        </div>
    )
}

export default SectionOne; 