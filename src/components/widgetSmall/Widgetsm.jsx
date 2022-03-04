import React from 'react';
import './widgetsm.css';
import { Visibility } from '@material-ui/icons';

const Widgetsm = () => {
  return (
    <div className='widget-sm'>
      <span className="widget-smtitle">New Updated Jobs</span>
      <ul className="widget-sm-list">
        <li className="widget-sm-listitem">
          <div className="widget_sm-user">
            <span className="widget_sm-job-title">SIDBI Assistant Manager Online Form 2022</span>
          </div>
          <button className="widget_sm-button">
            <Visibility className='widget_sm-icon' />
            Display
          </button>
        </li>

        <li className="widget-sm-listitem">
          <div className="widget_sm-user">
            <span className="widget_sm-job-title">JIPMER Group B and C Various Post Online Form 2022</span>
          </div>
          <button className="widget_sm-button">
            <Visibility className='widget_sm-icon' />
            Display
          </button>
        </li>

        <li className="widget-sm-listitem">
          <div className="widget_sm-user">
            <span className="widget_sm-job-title">Join Indian Army NCC 52 Entry Online Form 2022</span>
          </div>
          <button className="widget_sm-button">
            <Visibility className='widget_sm-icon' />
            Display
          </button>
        </li>

        <li className="widget-sm-listitem">
          <div className="widget_sm-user">
            <span className="widget_sm-job-title">Indian Army SSC Tech 59 Men & 30 Women Online Form 2022</span>
          </div>
          <button className="widget_sm-button">
            <Visibility className='widget_sm-icon' />
            Display
          </button>
        </li>

        <li className="widget-sm-listitem">
          <div className="widget_sm-user">
            <span className="widget_sm-job-title">Bank Note Press BNP Junior Technician Online Form 2022</span>
          </div>
          <button className="widget_sm-button">
            <Visibility className='widget_sm-icon' />
            Display
          </button>
        </li>

        <li className="widget-sm-listitem">
          <div className="widget_sm-user">
            <span className="widget_sm-job-title">JSSC Excise Constable Online Form 2022</span>
          </div>
          <button className="widget_sm-button">
            <Visibility className='widget_sm-icon' />
            Display
          </button>
        </li>

      </ul>
    </div>
  )
}

export default Widgetsm;