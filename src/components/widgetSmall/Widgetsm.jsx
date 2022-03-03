import React from 'react';
import './widgetsm.css';
import images from '../../constants/images';
import { Visibility } from '@material-ui/icons';

const Widgetsm = () => {
  return (
    <div className='widget-sm'>
      <span className="widget-smtitle">New Updated Jobs</span>
      <ul className="widget-sm-list">
        <li className="widget-sm-listitem">
          <img src={images.avatar} alt="avatar" className='widget-sm-img' />
          <div className="widget_sm-user">
            <span className="widget_sm-username">Anna Keller</span>
            <span className="widget_sm-usertitle">SOftware Engineer</span>
          </div>
          <button className="widget_sm-button">
            <Visibility className='widget_sm-icon' />
            Display
          </button>
        </li>
        <li className="widget-sm-listitem">
          <img src={images.avatar} alt="avatar" className='widget-sm-img' />
          <div className="widget_sm-user">
            <span className="widget_sm-username">Anna Keller</span>
            <span className="widget_sm-usertitle">SOftware Engineer</span>
          </div>
          <button className="widget_sm-button">
            <Visibility className='widget_sm-icon' />
            Display
          </button>
        </li>
        <li className="widget-sm-listitem">
          <img src={images.avatar} alt="avatar" className='widget-sm-img' />
          <div className="widget_sm-user">
            <span className="widget_sm-username">Anna Keller</span>
            <span className="widget_sm-usertitle">SOftware Engineer</span>
          </div>
          <button className="widget_sm-button">
            <Visibility className='widget_sm-icon' />
            Display
          </button>
        </li>
        <li className="widget-sm-listitem">
          <img src={images.avatar} alt="avatar" className='widget-sm-img' />
          <div className="widget_sm-user">
            <span className="widget_sm-username">Anna Keller</span>
            <span className="widget_sm-usertitle">SOftware Engineer</span>
          </div>
          <button className="widget_sm-button">
            <Visibility className='widget_sm-icon' />
            Display
          </button>
        </li>
        <li className="widget-sm-listitem">
          <img src={images.avatar} alt="avatar" className='widget-sm-img' />
          <div className="widget_sm-user">
            <span className="widget_sm-username">Anna Keller</span>
            <span className="widget_sm-usertitle">SOftware Engineer</span>
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