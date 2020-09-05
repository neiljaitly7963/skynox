import React from 'react';
import './SectionThree.css';
import TopSection from './TopSection/TopSection'
import MiddleSection from './MiddleSection/MiddleSection' 
import BottomSection from './BottomSection/BottomSection' 

const SectionOne = () => {
    return(
        <div className="all-sections">
            <TopSection />
            <MiddleSection />
            <BottomSection></BottomSection>
        </div>
    )
}

export default SectionOne;