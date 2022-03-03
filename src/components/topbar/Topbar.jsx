import React from 'react';
import './topbar.css';
import { NotificationsNone, Language, Settings } from '@material-ui/icons';
import images from '../../constants/images';

const Topbar = () => {

    return (
        <div className='topbar'>
            <div className="topbarwrapper">
                <div className="topleft">
                    <span className="logo">Pankaj</span>
                </div>
                <div className="topright">
                    <div className="topbaricon-container">
                        <NotificationsNone />
                        <span className='topicon-badge'>2</span>
                    </div>
                    <div className="topbaricon-container">
                        <Language />
                        <span className='topicon-badge'>2</span>
                    </div>
                    <div className="topbaricon-container">
                        <Settings />
                    </div>
                    <img src={images.avatar} alt="" className="top-avatar" />
                </div>
            </div>
        </div>
    )
}

export default Topbar;