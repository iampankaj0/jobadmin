import React from 'react';
import './newjob.css';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';


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
                    <CKEditor editor={ClassicEditor} onInit={editor => { }} />
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
                    <CKEditor editor={ClassicEditor} onInit={editor => { }} />
                </div>
                <div className="newjob_form-item">
                    <label>Application Fees :</label>
                    {/* <textarea rows='7' type="text" placeholder='Application Fees' /> */}
                    <CKEditor editor={ClassicEditor} onInit={editor => { }} />
                </div>
                <div className="newjob_form-item totalposts">
                    <label>Total Posts :</label>
                    <input type="text" placeholder='Total Posts Title :' />
                    <input type="text" placeholder='Total Posts' />
                </div>

                <div className="newjob_form-item totalposts">
                    <label>Job Description :</label>
                    <CKEditor editor={ClassicEditor} onInit={editor => { }} />
                </div>


                <h2 className="new_job-implinks">Important Links :-</h2>
                <small>If link is available, click on CheckBox and paste in InputBox*</small>

                <div className="newjob_form-item">
                    <label>Download Answer Key :</label>
                    <input type="checkbox" name="" id="" />
                    <input type="text" placeholder='AnswerKey Link' />
                </div>
                <div className="newjob_form-item">
                    <label>Download Result :</label>
                    <input type="checkbox" name="" id="" />
                    <input type="text" placeholder='Result Link' />
                </div>
                <div className="newjob_form-item">
                    <label>Download Admit Card :</label>
                    <input type="checkbox" name="" id="" />
                    <input type="text" placeholder='Admit Card Link' />
                </div>
                <div className="newjob_form-item">
                    <label>Apply Online :</label>
                    <input type="checkbox" name="" id="" />
                    <input type="text" placeholder='Apply Online Link' />
                </div>
                <div className="newjob_form-item">
                    <label>Download Notification :</label>
                    <input type="checkbox" name="" id="" />
                    <input type="text" placeholder='Notification Link' />
                </div>
                <div className="newjob_form-item">
                    <label>Download Syllabus :</label>
                    <input type="checkbox" name="" id="" />
                    <input type="text" placeholder='Syllabus Link' />
                </div>


                <div className="newjob_form-item">
                    <label>Show the Job in :</label>

                    <div className='newjob_form-checkbox'>
                        <span>
                            <input type="checkbox" name="" id="" /> Result
                        </span>

                        <span>
                            <input type="checkbox" name="" id="" /> Admit Card
                        </span>

                        <span>
                            <input type="checkbox" name="" id="" /> Latest Job
                        </span>

                        <span>
                            <input type="checkbox" name="" id="" /> Answer Key
                        </span>

                        <span>
                            <input type="checkbox" name="" id="" /> Important News
                        </span>

                        <span>
                            <input type="checkbox" name="" id="" /> Syllabus
                        </span>

                    </div>

                </div>




                <button className="create_newjob-button">Create</button>

            </form>
        </div>
    )
}

export default Newjob;