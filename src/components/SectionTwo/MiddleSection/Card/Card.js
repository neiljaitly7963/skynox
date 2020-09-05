import React from 'react';
import './Card.css';
import card1 from './card1.svg'
import tom from '../../../svg/tom.jpg'

const Card = () => {
    return(
        <div className="card" >
                    <div>
                        <div className="profile-card-trans">
                            <img className="small-photo" src={tom} />
                            <div>
                                <p className="small-name-white">Floyd Miles</p>
                                <p className="small-college-white">@ Neil</p>
                            </div>
                        </div>
                        <div className="btn-grid"><button className="card-btn">82 mins</button></div>
                        <div className="card-txt">
                            <p className='card-txt-details'>
                                Learning How To Create Beautiful Scenes in illustrator in 60 min
                            </p>
                        </div>
                    </div>
        </div>
    )
} 
 
export default Card;  