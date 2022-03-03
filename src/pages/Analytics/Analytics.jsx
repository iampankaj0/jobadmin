import React from 'react';
import './analytics.css';
import Chart from '../../components/chart/Chart';
import { userData } from '../../dummyData';

const Anaytics = () => {
  return (
    <div className='all_analytics'>

      <Chart data={userData} title='Job Post Per Month' grid dataKey='Job Post' color='#5550bd' />
      <Chart data={userData} title='Admit Card Per Month' grid dataKey='Admit Card Post' color='#466800' />
      <Chart data={userData} title='Result Per Month' grid dataKey='Results Post' color='#7F00A1' />
      <Chart data={userData} title='Admit Card Per Month' grid dataKey='Job Post' color='#466800' />

    </div>
  )
}

export default Anaytics