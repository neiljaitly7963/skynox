import React from 'react';
import './BottomSection.css';
import TutorCard from './TutorCard/TutorCard'


const BottomSection = () => {
    return(
        <div className="streaming"> 
            <div className="heading"><div className="add-mar"><span className="dark-text">Streaming</span><span className="light-text">Now</span></div><span>...</span></div>
            <div className="tutor-card-grid">
               <TutorCard />
               <TutorCard />
               <TutorCard />
               <TutorCard />
            </div>
        </div>
    )
}

export default BottomSection;