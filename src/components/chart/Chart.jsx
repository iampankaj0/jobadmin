import React from 'react';
import './chart.css';
import { LineChart, Line, XAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Chart = ({ title, data, dataKey, dataKey2, dataKey3, color, color2, color3, grid }) => {

    return (
        <div className='chart'>
            <h3 className="chart-title"> {title} </h3>

            <ResponsiveContainer width='100%' aspect={4 / 1}>
                <LineChart data={data}>
                    <XAxis dataKey='name' stroke={color} />
                    <Line type='monotone' dataKey={dataKey} stroke={color} />
                    <Line type='monotone' dataKey={dataKey2} stroke={color2} />
                    <Line type='monotone' dataKey={dataKey3} stroke={color3} />
                    <Tooltip />
                    {grid && <CartesianGrid stroke='#e0dfdf' strokeDasharray='5 5' />}
                    <Legend />
                </LineChart>
            </ResponsiveContainer>

        </div>
    )
}

export default Chart;