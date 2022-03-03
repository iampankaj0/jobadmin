import React, { useState } from 'react';
import './latestjob.css';
import { DataGrid } from '@material-ui/data-grid';
import { DeleteOutline } from '@material-ui/icons';
import { Jobrows } from '../../dummyData';
import { Link } from 'react-router-dom';


const Latestjob = () => {

    const [data, setData] = useState(Jobrows);

    const deleteJob = (id) => {
        setData(data.filter((item) => item.id !== id));
    }

    const Jobcolumns = [
        { field: 'id', headerName: 'ID', width: 100 },
        {
            field: 'jobs', headerName: 'Job Title', width: 600, renderCell: (params) => {
                return (
                    <div className='latestjob_sec'>
                        {params.row.job}
                    </div>
                )
            }
        },
        { field: 'status', headerName: 'Status', width: 180 },
        {
            field: 'action', headerName: 'Action', width: 180, renderCell: (params) => {
                return (
                    <>
                        <Link to={'/job/'+params.row.id}>
                            <button className="latestob_edit">Edit</button>
                        </Link>
                        <DeleteOutline className="latestob_delete" onClick={() => deleteJob(params.row.id)} />
                    </>
                )
            }
        }
    ];




    return (
        <div className='latestjob'>
            <DataGrid rows={data} columns={Jobcolumns} pageSize={15} disableSelectionOnClick rowsPerPageOptions={[5]} checkboxSelection
            />
        </div>
    )
}

export default Latestjob;