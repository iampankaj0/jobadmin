import React from 'react'
import Chart from '../../components/chart/Chart'
import { userData } from '../../dummyData'

const AllAnalytics = () => {
    return (
        <div className='all_analytics'>

            <Chart
                data={userData}
                title='All Posts Per Month'
                grid
                dataKey='Job Post' color='#5550bd'
                dataKey2='Admit Card Post' color2='#466800'
                dataKey3='Results Post' color='#7F00A1'
            />

        </div>
    )
}

export default AllAnalytics