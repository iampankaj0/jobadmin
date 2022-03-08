import React from 'react';
import { Table, Tbody, Td, Th, Thead, Tr } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import './addDesc.css';

const AddDesc = () => {
    return (
        <div className='add_jobdesc'>
            <h1 className="add_jobdesc-title">Add Job Description</h1>

            <form action="">
                {/* <div className="add_jobdesc-inputsec">
                    <label>Post Type / Post Title</label>
                    <input type="text" placeholder='Post Title' />
                </div> */}
                <div className="add_jobdesc-inputsec">
                    <label>Post Name</label>
                    <input type="text" placeholder='Post Name' />
                </div>
                <div className="add_jobdesc-inputsec">
                    <label>Total Post</label>
                    <input type="text" placeholder='Total Post' />
                </div>
                <div className="add_jobdesc-inputsec">
                    <label>Gender</label>
                    <select name="" id="">
                        <option>Select Gender</option>
                        <option>Male</option>
                        <option>Female</option>
                        <option>Others</option>
                        <option>Male & Female</option>
                    </select>
                </div>
                <div className="add_jobdesc-inputsec eligibility_inp-sec">
                    <label>Post Eligibility</label>
                    <textarea rows='10' placeholder='Post Eligibility' />
                </div>

                <button className="add_jobdesc-button" type='submit'>Update</button>

            </form>

            <Table>
                <Thead>
                    <Tr>
                        <Th>Post Name</Th>
                        <Th>Total Post</Th>
                        <Th>Gender</Th>
                        <Th>Navy Executive Branch Eligibility</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    <Tr>
                        <Td>General Service/ Hydro Cadre</Td>
                        <Td>40</Td>
                        <Td>Men</Td>
                        <Td>
                            <ul>
                                <li>BE / B.Tech in Any Stream with Minimum 60% Marks. in Any Recognized University India.</li>
                                <li> <span className='age-limit'>Age Limit:</span> 02/01/1998 to 01/07/2003.</li>
                            </ul>
                        </Td>
                    </Tr>


                    <Tr>
                        <Td>Air Traffic Control ATC</Td>
                        <Td>06</Td>
                        <Td>Men & Women</Td>
                        <Td>
                            <ul>
                                <li>BE / B.Tech in Any Stream with Minimum 60% Marks. in Any Recognized University India.</li>
                                <li> <span className='age-limit'>Age Limit:</span> 02/01/1998 to 01/01/2002.</li>
                            </ul>
                        </Td>
                    </Tr>

                    <Tr>
                        <Td>Naval Armament Inspectorate Cadre (NAIC</Td>
                        <Td>06</Td>
                        <Td>Men & Women</Td>
                        <Td>
                            <ul>
                                <li>BE / B.Tech with Minimum 60% Marks in Mechanical / Electrical / Electronics & Communication / Tele Communication / Computer Science / Computer Engineering / Equivalent OR PG Degree in Electronics / Physics.</li>
                                <li> <span className='age-limit'>Age Limit:</span> 02/01/1998 to 01/07/2003.</li>
                                <li>More Details Notification.</li>
                            </ul>
                        </Td>
                    </Tr>


                    <Tr>
                        <Td>Observer</Td>
                        <Td>08</Td>
                        <Td>Men & Women</Td>
                        <Td>
                            <ul>
                                <li>BE / B.Tech in Any Stream with Minimum 60% Marks. in Any Recognized University India</li>
                                <li> <span className='age-limit'>Age Limit:</span>  02/01/1999 to 01/01/2004.</li>
                            </ul>
                        </Td>
                    </Tr>

                    <Tr>
                        <Td>Pilot</Td>
                        <Td>15</Td>
                        <Td>Men & Women</Td>
                        <Td>
                            <ul>
                                <li>BE / B.Tech in Any Stream with Minimum 60% Marks. in Any Recognized University India</li>
                                <li> <span className='age-limit'>Age Limit:</span> 02/01/1999 to 01/01/2004.</li>
                            </ul>
                        </Td>
                    </Tr>

                    <Tr>
                        <Td>Logistics</Td>
                        <Td>18</Td>
                        <Td>Men & Women</Td>
                        <Td>
                            <ul>
                                <li>BE / B.Tech in Any Stream with Minimum 60% Marks. in Any Recognized University India</li>
                                <li> <span className='age-limit'>Age Limit:</span> 02/01/1998 to 01/07/2003.</li>
                            </ul>
                        </Td>
                    </Tr>

                </Tbody>
            </Table>


        </div>
    )
}

export default AddDesc;