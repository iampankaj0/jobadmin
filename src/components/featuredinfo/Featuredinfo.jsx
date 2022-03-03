import { ArrowDownward, ArrowUpward } from '@material-ui/icons';
import React from 'react';
import './featuredinfo.css';

const Featuredinfo = () => {
  return (
    <div className="featured">

      <div className="featured-item">
        <span className="featured-title">Job Post</span>
        <div className="featured_money-container">
          <span className="featured-money">1,200</span>
          <span className="featured_money-rate">-11.4 <ArrowDownward className='featured-icon negative' /> </span>
        </div>
        <span className="featured-sub">
          Compare to last month
        </span>
      </div>

      <div className="featured-item">
        <span className="featured-title">Admit Card Post</span>
        <div className="featured_money-container">
          <span className="featured-money">4,415</span>
          <span className="featured_money-rate">-1.4 <ArrowDownward className='featured-icon negative' /> </span>
        </div>
        <span className="featured-sub">
          Compare to last month
        </span>
      </div>

      <div className="featured-item">
        <span className="featured-title">Result Post</span>
        <div className="featured_money-container">
          <span className="featured-money">1,877</span>
          <span className="featured_money-rate">+27.4 <ArrowUpward className='featured-icon' /> </span>
        </div>
        <span className="featured-sub">
          Compare to last month
        </span>
      </div>

    </div>
  )
}

export default Featuredinfo