import { ThumbUpAltOutlined } from '@material-ui/icons';
import React from 'react';
import './noticeboard.css';


const Noticeboard = () => {
    return (
        <div className='notice_board'>
            <h1 className="notice_board-title">Notice Board/Important Messages</h1>
            <form action="">
                <input type="text" className='notice_board-input' placeholder='Important Updates OR Notices' />
                <button className="notice_borad-button" type='submit'> <ThumbUpAltOutlined className='notice_board-buttonicon' /> Update</button>
            </form>

            <div className="notice_board-print">
                <ul>
                    <li>www.sarkaaripariksha.com का नाम तो आप भी जानते हैं,</li>
                    <li>www.sarkaaripariksha.com का नाम तो आप भी जानते हैं,</li>
                    <li>www.sarkaaripariksha.com का नाम तो आप भी जानते हैं,</li>
                    <li>www.sarkaaripariksha.com का नाम तो आप भी जानते हैं,</li>
                    <li>www.sarkaaripariksha.com का नाम तो आप भी जानते हैं,</li>
                    <li>www.sarkaaripariksha.com का नाम तो आप भी जानते हैं,</li>
                    <li>www.sarkaaripariksha.com का नाम तो आप भी जानते हैं,</li>
                    <li>www.sarkaaripariksha.com का नाम तो आप भी जानते हैं,</li>
                    <li>www.sarkaaripariksha.com का नाम तो आप भी जानते हैं,</li>
                    <li>www.sarkaaripariksha.com का नाम तो आप भी जानते हैं,</li>
                    <li>www.sarkaaripariksha.com का नाम तो आप भी जानते हैं,</li>
                </ul>
            </div>

        </div>
    )
}

export default Noticeboard;