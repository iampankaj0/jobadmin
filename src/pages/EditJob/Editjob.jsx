import React from 'react';
import { Link } from 'react-router-dom';
import './editjob.css';

const Editjob = () => {
    return (
        <div className='edit-job'>
            <div className="jobtitle_container">
                <h1 className="jobtitle">Edit Job</h1>
                <Link exact to='/newjob'>
                    <button className="job_addbutton">Create</button>
                </Link>
            </div>
            <div className="job_container">
                <div className="job_show">
                    <div className="job_show-top">
                        <span>Job Title:</span>
                        <span>Join Indian Army Short Service Commission SSC 52 NCC Entry Online Form 2022</span>
                    </div>
                    <div className="job_show-bottom">
                        <div className="job_show-description">
                            <span>Description:</span>
                            <span>Indian Army (Join Indian Army) has released the advertisement of 52 NCC Special Entry Men & Women. Any candidate who wants to appear in this Army NCC Special Recruitment 2022 and fulfill the eligibility can apply online from 15 March 2022 to 13 April 2022. Read the advertisement for eligibility, age limit, syllabus, selection procedure and all other information in 52 NCC Special Entry Men & Women Recruitment 2022.</span>
                        </div>
                        <div className="job_show-startdate">
                            <span>Start Date:</span>
                            <span>04 March 2022</span>
                        </div>
                        <div className="job_show-lastdate">
                            <span>Last Date:</span>
                            <span>03 April 2022</span>
                        </div>
                    </div>
                </div>
                <div className="job_update">
                    <div className="job_update-title">Edit</div>
                    <form action="" className="job_update-form">
                        <div className="job_update-item">
                            <label>Job Title</label>
                            <input type="text" placeholder='Job Title' className='job_update-input' />
                        </div>
                        <div className="job_update-item">
                            <label>Job Description</label>
                            <textarea rows='5' type="text" placeholder='Job Description' className='job_update-textarea' />
                        </div>
                        <div className="job_update-item">
                            <label>Start Date</label>
                            <input type="date" placeholder='Start Date' className='job_update-input' />
                        </div>
                        <div className="job_update-item">
                            <label>Last Date</label>
                            <input type="date" placeholder='Last Date' className='job_update-input' />
                        </div>

                        <button className="job_update-button">Update</button>

                    </form>
                </div>
            </div>
        </div>
    )
}

export default Editjob;