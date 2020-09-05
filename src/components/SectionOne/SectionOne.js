import React from 'react';
import './SectionOne.css';
import home from './home.svg'
import search from './search.svg'
import message from './message.svg'
import settings from './settings.svg'
import tom from './tom.jpg'

const SectionOne = () => {
    return(
        <div className="all-sections">
            <div className="main-title"><h1>Educated</h1></div>
            <div className="menue-flex">
                <div className="menue-grid">
                    <div className="menue-box">
                            <span className="list"><img src={home}/>    Home</span>
                            <span className="list"><img src={search}/>    Discover</span>
                            <span className="list"><img src={message}/>    Messages</span>
                            <span className="list"><img src={settings}/>    Settings</span>
                    </div>
                    <div className="updated-course">
                    <div className="profile-card-transs">
                                <img className="small-photo" src={tom} />
                                <div>
                                    <p className="small-name-black">Floyd Miles</p>
                                    <p className="small-college-black">@ Neil</p>
                                </div>
                            
                    </div>
                    </div>
                </div>
            </div>
            <div></div>
        </div>
    )
}

export default SectionOne;