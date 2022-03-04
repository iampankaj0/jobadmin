import React from 'react';
import './slider.css';
import { CloudUpload, Delete } from '@material-ui/icons';
import { Sliderimg } from '../../dummyData';


const Slider = () => {

    return (
        <div className='change_slider'>
            <h1 className="change_slider-title">Slider Images</h1>

            <form action="">
                <input type="file" name="upload_image" id="upload_image" />
                <button type='submit' className="change_slider-uploadbutton"> <CloudUpload className='upload_icon' /> Upload</button>
            </form>

            <div className="uploaded_images">
                <h2 className="uploded_images-title">All Uploaded Slider Images</h2>
                <div className="all-slider_images">
                    {
                        Sliderimg.map((val, id) => {
                            return (
                                <div className="image-section" key={id}>
                                    <img src={val.imgsrc} alt={id} />
                                    <div className='overlay'>
                                        <Delete className="delete_image-button" />
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>


            </div>

        </div>
    )
}

export default Slider