import { ThumbUpAltOutlined } from '@material-ui/icons';
import React from 'react';
import './marquee.css';


const Marquee = () => {
    return (
        <div className='change_marquee'>
            <h1 className="change_marquee-title">Change/Update Marquee</h1>

            <form action="">
                <textarea placeholder='Add New Marquee' name="" id="" rows="10"></textarea>
                <button className="change_marquee-button"> <ThumbUpAltOutlined className='change_marquee-buttonicon' /> Update</button>
            </form>


            <div className="change_marguee-print">
                <p>
                    www.sarkaaripariksha.com का नाम तो आप भी जानते हैं, ये सिर्फ एक वेबसाइट नहीं है बल्कि ये लाखों बेरोजगार युवाओं/अध्ययनरत युवाओं
                    का विश्वास है. Sarkaari Pariksha 01 फरवरी 2022 को स्थापित किया गया था और तब से यह Sarkaari Pariksha वेबसाइट जिसमें करोड़ों
                    युवा सरकारी नौकरी / परीक्षा परिणाम / प्रवेश पत्र / परीक्षा तिथि की जानकारी की तलाश करते हैं।
                </p>
            </div>

        </div>
    )
}

export default Marquee