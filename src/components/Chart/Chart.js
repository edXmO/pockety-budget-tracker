import React from 'react';
import { Doughnut } from 'react-chartjs-2';


const Chart = () => {

    const pieData = {
        labels: ['January', 'February', 'March',
            'April', 'May'],
        datasets: [
            {
                label: 'Expenses',
                backgroundColor: [
                    '#e88c17',
                    '#bdc1c5',
                    '#000000',
                    '#ffe119',
                    '#bdc1c5'
                ],
                hoverBackgroundColor: [
                    '#e88c17',
                    '#bdc1c5',
                    '#000000',
                    '#ffe119',
                    '#bdc1c5'
                ],
                data: [65, 59, 80, 81, 56]
            }
        ]
    }

    const renderPie = data => {
        return <Doughnut data={data} options={{
            title: {
                display: true,
                text: 'Average Expenses per month (€)',
                fontSize: 20,
                fontFamily: "Nunito",
                fontColor: '#000000',
                fontStyle: 'italic'
            },
            legend: {
                display: true,
                position: 'bottom'
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