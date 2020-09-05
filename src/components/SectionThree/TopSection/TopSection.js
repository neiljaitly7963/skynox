import React from 'react';
import './TopSection.css';
import tom from '../../svg/tom.jpg'

const TopSection = () => {
    return(
        <div className="streaming">
            <div className="heading"><div><span className="dark-text">Advance</span><span className="light-text">Search</span></div><span>...</span></div>
            <div className="heading-two"><div><input placeholder="Start Writing Something"></input></div><button className="card-btnn">Find</button></div>
        </div>
    )
}

export default TopSection; 