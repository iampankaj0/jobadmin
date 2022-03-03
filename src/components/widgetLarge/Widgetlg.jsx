import React from 'react';
import './widgetlg.css';

const Widgetlg = () => {


  const Button = ({ type }) => {
    return (
      <button className={'widget_lg-button ' + type}> {type} </button>
    )
  }



  return (
    <div className='widget-lg'>
      <h3 className="widget_lg-title">Latest Jobs</h3>
      <table className="widget_lg-table">
        <tr className="widget_lg-tr">
          <th className="widget_lg-th">Job Title</th>
          <th className="widget_lg-th">Date</th>
          <th className="widget_lg-th">Status</th>
        </tr>
        <tr className="widget_lg-tr">
          <td className="widget_lg-job">Indian Navy sailer</td>
          <td className="widget_lg-date">02-03-2022</td>
          <td className="widget_lg-status">
            <Button type='Active' />
          </td>
        </tr>
        <tr className="widget_lg-tr">
          <td className="widget_lg-job">Indian Navy sailer</td>
          <td className="widget_lg-date">02-03-2022</td>
          <td className="widget_lg-status">
            <Button type='Pending' />
          </td>
        </tr>
        <tr className="widget_lg-tr">
          <td className="widget_lg-job">Indian Navy sailer</td>
          <td className="widget_lg-date">02-03-2022</td>
          <td className="widget_lg-status">
            <Button type='Inactive' />
          </td>
        </tr>
        <tr className="widget_lg-tr">
          <td className="widget_lg-job">Indian Navy sailer</td>
          <td className="widget_lg-date">02-03-2022</td>
          <td className="widget_lg-status">
            <Button type='Active' />
          </td>
        </tr>
        <tr className="widget_lg-tr">
          <td className="widget_lg-job">Indian Navy sailer</td>
          <td className="widget_lg-date">02-03-2022</td>
          <td className="widget_lg-status">
            <Button type='Active' />
          </td>
        </tr>
      </table>
    </div>
  )
}

export default Widgetlg;