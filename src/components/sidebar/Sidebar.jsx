import React from 'react';
import './sidebar.css';
import { Add, Edit, DynamicFeed, Timeline, TrendingUp, Face, AddCircleOutline, Receipt, Home } from '@material-ui/icons';
import { Link } from 'react-router-dom';



const Sidebar = () => {

    return (
        <>
            <div className='sidebar'>
                <div className="sidebar-wrapper">
                    <div className="sidebar-menu">
                        <h3 className="sidebar-title">Dashboard</h3>
                        <ul className="sidebar-list">
                            <Link to='/'>
                                <li className="sidebar_list-item">
                                    <Home className='sidebar-icon' /> Home
                                </li>
                            </Link>
                            <Link to='/analytics'>
                                <li className="sidebar_list-item">
                                    <Timeline className='sidebar-icon' /> Analytics
                                </li>
                            </Link>
                            <Link to='/all-analytics'>
                                <li className="sidebar_list-item">
                                    <TrendingUp className='sidebar-icon' /> All Analytics
                                </li>
                            </Link>
                        </ul>
                    </div>
                    <div className="sidebar-menu">
                        <h3 className="sidebar-title">Slider & Logo Images</h3>
                        <ul className="sidebar-list">
                            <Link to='/change-logo'>
                                <li className="sidebar_list-item">
                                    <Face className='sidebar-icon' /> Logo
                                </li>
                            </Link>
                            <Link to='/slider'>
                                <li className="sidebar_list-item">
                                    <DynamicFeed className='sidebar-icon' /> Slider
                                </li>
                            </Link>
                        </ul>
                    </div>
                    <div className="sidebar-menu">
                        <h3 className="sidebar-title">Marquee Line</h3>
                        <ul className="sidebar-list">
                            <Link to='/marquee'>
                                <li className="sidebar_list-item">
                                    <AddCircleOutline className='sidebar-icon' /> Add/Change Marquee
                                </li>
                            </Link>
                        </ul>
                    </div>
                    <div className="sidebar-menu">
                        <h3 className="sidebar-title">All Updates</h3>
                        <ul className="sidebar-list">
                            <Link to='/newjob'>
                                <li className="sidebar_list-item">
                                    <Add className='sidebar-icon' /> Add New Item
                                </li>
                            </Link>
                            <Link to='/add-desc'>
                                <li className="sidebar_list-item">
                                    <AddCircleOutline className='sidebar-icon' /> Add Job Description
                                </li>
                            </Link>
                            <Link to='/jobs'>
                                <li className="sidebar_list-item">
                                    <Edit className='sidebar-icon' /> Edit Item
                                </li>
                            </Link>
                        </ul>
                    </div>
                    <div className="sidebar-menu">
                        <h3 className="sidebar-title">Notice Board</h3>
                        <ul className="sidebar-list">
                            <Link to='/notice-board'>
                                <li className="sidebar_list-item">
                                    <Receipt className='sidebar-icon' /> Notices
                                </li>
                            </Link>
                        </ul>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Sidebar;