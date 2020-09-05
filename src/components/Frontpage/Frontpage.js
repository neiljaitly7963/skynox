import React from 'react';
import './Frontpage.css';
import SectionOne from '../SectionOne/SectionOne';
import SectionTwo from '../SectionTwo/SectionTwo';
import SectionThree from '../SectionThree/SectionThree';

const Frontpage = () => {
    return(
        <div className="frontpage-grid">
            <SectionOne />
            <SectionTwo />
            <SectionThree />
        </div>
    )
}

export default Frontpage;