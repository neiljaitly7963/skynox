import React from 'react';
import './TutorCard.css';
import tom from '../../../svg/tom.jpg'
import plus from '../../../svg/plus.svg'

const TutorCard = () => {
    return(
        <div>
        <div className="profile-card">
          <img className="small-photo" src={tom} />
          <div>
              <p className="small-name">Floyd Miles</p>
              <p className="small-college">@ Neil</p>
          </div>
          <div className="icon-div">
            <img className="icon" src={plus} />
          </div>
        </div>
    </div>
    )
}

export default TutorCard;