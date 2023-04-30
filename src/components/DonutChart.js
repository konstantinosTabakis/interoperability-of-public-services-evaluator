import { Doughnut } from 'react-chartjs-2';
import { Chart, ArcElement } from 'chart.js'
Chart.register(ArcElement);


const DonutChart = ({total}) => {

    const data = {
        labels: ['Total'],
        datasets: [
            {
                data: [total, 100 - total],
                backgroundColor: ['#DBA39A', '#F5EBE0'],
            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        cutoutPercentage: 80,
        legend: {
            display: true,
        },
    };
    return (
        <div>
            <Doughnut data={data} options={options} />
        </div>
    );
};

export default DonutChart;