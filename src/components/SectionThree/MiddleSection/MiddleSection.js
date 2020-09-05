import React from 'react';
import './MiddleSection.css';
import tom from './tom.jpg'

const MiddleSection = () => {
    return(
        <div className="middle">
            <div className="heading"><div><span className="dark-text">Streaming</span><span className="light-text">Now</span></div><span>...</span></div>
            <div className="card-grid">
                <div className="horizontal-card card">
                    <div className="profile-card-transs">
                                <img className="small-photo" src={tom} />
                                <div>
                                    <p className="small-name-white">Floyd Miles</p>
                                    <p className="small-college-white">@ Neil</p>
                                </div>
                                <button className="card-btn">82 mins</button>
                    </div>

                    <div className="card-txtt">
                            <p className='card-txt-detailss'>
                                Learning How To Create Beautiful Scenes in illustrator in 60 min
                            </p>
                        </div>

                </div>
                <div className="vertical-card card">
                    </div>
                <div className="vertical-card card"></div>
            </div>

        </div>
    )
}
 
export default MiddleSection;    