import React from 'react';
import Chart from '../../components/chart/Chart';
import Featuredinfo from '../../components/featuredinfo/Featuredinfo';
import './home.css';
import { userData } from '../../dummyData';

const Home = () => {
  return (
    <div className='home'>
        <Featuredinfo />
        <Chart data={userData} title='Job Post Per Month' grid dataKey='Job Post'/>
        <div className="home-widget"></div>
    </div>
  )
}

export default Home;