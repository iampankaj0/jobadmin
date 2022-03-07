import React from 'react';
import './newjob.css';

const Newjob = () => {
    return (
        <div className='newjob'>
            <h1 className="newjob-title">New Job</h1>

            <form action="" className="newjob-form">
                <div className="newjob_form-item">
                    <label>Job Title :</label>
                    <input type="text" placeholder='Job Title' />
                </div>
                <div className="newjob_form-item">
                    <label>Short Description :</label>
                    <textarea rows='7' type="text" placeholder='Short Description' />
                </div>
                <div className="newjob_form-item">
                    <label>Start Date :</label>
                    <input type="date" placeholder='Start Date' />
                </div>
                <div className="newjob_form-item">
                    <label>Last Date :</label>
                    <input type="date" placeholder='Last Date' />
                </div>
                <div className="newjob_form-item">
                    <label>Title Colored :</label>
                    <input type="text" placeholder='Colored Title' />
                </div>
                <div className="newjob_form-item">
                    <label>Important Dates :</label>
                    <textarea rows='7' type="text" placeholder='Important Dates' />
                </div>
                <div className="newjob_form-item">
                    <label>Application Fees :</label>
                    <textarea rows='7' type="text" placeholder='Application Fees' />
                </div>
                <div className="newjob_form-item totalposts">
                    <label>Total Posts :</label>
                    <input type="text" placeholder='Total Posts Title :' />
                    <input type="text" placeholder='Total Posts' />
                </div>

                <button className="create_newjob-button">Create</button>

            </form>
        </div>
    )
}

export default Newjob;