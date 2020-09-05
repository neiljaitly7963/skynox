import React from 'react';
import './MiddleSection.css';
import Card from './Card/Card'

const MiddleSection = () => {
    return(
        <div className="middle">
            <div className="heading"><div><span className="dark-text">Streaming</span><span className="light-text">Now</span></div><span>...</span></div>
            <div className="card-section"><Card /><Card /></div>
        </div>
    )
}
 
export default MiddleSection;  