import React from 'react';
import { Doughnut } from 'react-chartjs-2';

const Chart = () => {

    const pieData = {
        labels: ['January', 'February', 'March',
            'April', 'May'],
        datasets: [
            {
                label: 'Rainfall',
                backgroundColor: [
                    '#B21F00',
                    '#C9DE00',
                    '#2FDE00',
                    '#00A6B4',
                    '#6800B4'
                ],
                hoverBackgroundColor: [
                    '#501800',
                    '#4B5000',
                    '#175000',
                    '#003350',
                    '#35014F'
                ],
                data: [65, 59, 80, 81, 56]
            }
        ]
    }

    const renderPie = data => {
        return <Doughnut data={data} options={{
            title: {
                display: true,
                text: 'Average Rainfall per month',
                fontSize: 20
            },
            legend: {
                display: true,
                position: 'right'
            }
        }} />
    }

    return (
        <div className='chart'>
            {renderPie(pieData)}
        </div>
    )
}

export default Chart;