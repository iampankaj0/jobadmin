import { CloudUpload } from '@material-ui/icons';
import React from 'react';
import './logo.css';
import images from '../../constants/images'

const Logo = () => {
    return (
        <div className='change_logo'>
            <h1 className="change_logo-title">Change/Update Logo</h1>
            <form action="">
                <input type="file" name="update_logo" id="update_logo" />
                <button className="change_logo-button"> <CloudUpload className='logo-upload_icon' /> Upload</button>
            </form>

            <div className="change_logo-print">
                <div className="logo_img-sec">
                    <img src={images.Logo} alt="Logo" />
                </div>
            </div>

        </div>
    )
}

export default Logo