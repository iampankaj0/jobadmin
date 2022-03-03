import React from 'react';
import './sidebar.css';
import { Add, Edit, AttachMoney, BarChart, ChatBubbleOutline, DynamicFeed, LineStyle, MailOutline, Report, Timeline, TrendingUp, WorkOutline } from '@material-ui/icons';
import { Link } from 'react-router-dom';



const Sidebar = () => {
    return (
        <div className='sidebar'>
            <div className="sidebar-wrapper">
                <div className="sidebar-menu">
                    <h3 className="sidebar-title">Dashboard</h3>
                    <ul className="sidebar-list">
                        <Link to='/'>
                            <li className="sidebar_list-item">
                                <LineStyle className='sidebar-icon' /> Home
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
                    <h3 className="sidebar-title">Jobs Update</h3>
                    <ul className="sidebar-list">
                        <Link to='/newjob'>
                            <li className="sidebar_list-item">
                                <Add className='sidebar-icon' /> Add New Job
                            </li>
                        </Link>
                        <Link to='/jobs'>
                            <li className="sidebar_list-item">
                                <Edit className='sidebar-icon' /> Edit Job
                            </li>
                        </Link>
                        <li className="sidebar_list-item">
                            <AttachMoney className='sidebar-icon' /> Transaction
                        </li>
                        <li className="sidebar_list-item">
                            <BarChart className='sidebar-icon' /> Reports
                        </li>
                    </ul>
                </div>
                <div className="sidebar-menu">
                    <h3 className="sidebar-title">Notifications</h3>
                    <ul className="sidebar-list">
                        <li className="sidebar_list-item">
                            <MailOutline className='sidebar-icon' /> Mail
                        </li>
                        <li className="sidebar_list-item">
                            <DynamicFeed className='sidebar-icon' /> Feedback
                        </li>
                        <li className="sidebar_list-item">
                            <ChatBubbleOutline className='sidebar-icon' /> Message
                        </li>
                    </ul>
                </div>
                <div className="sidebar-menu">
                    <h3 className="sidebar-title">Staff</h3>
                    <ul className="sidebar-list">
                        <li className="sidebar_list-item">
                            <WorkOutline className='sidebar-icon' /> Manage
                        </li>
                        <li className="sidebar_list-item">
                            <Timeline className='sidebar-icon' /> Analytics
                        </li>
                        <li className="sidebar_list-item">
                            <Report className='sidebar-icon' /> Reports
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Sidebar;