import React from 'react'
import {
  Chart as ChartJS, ArcElement, Tooltip, Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title
} from 'chart.js';
import { Doughnut, Line } from 'react-chartjs-2';
ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title);


function Charts() {
  return (
    <div class="row">
      <div className='col-lg-8'>
        {<Line options={{
          responsive: true,
          plugins: {
            legend: {
              position: 'bottom',
            },
            hover: {
              mode: 'label'
            },
            title: {
              display: true,
              text: 'Chart.js Line Chart',
            },

          },

        }}

          data={{
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
            datasets: [{
              label: 'My First Dataset',
              data: [0, 10000, 5000, 15000, 10000, 20000, 15000, 25000, 20000, 30000, 25000, 40000],
              fill: false,
              borderColor: '#4F75DA',
              tension: 0.3
            }]
          }}
        />}
      </div>
      <div className='col-lg-4'>
        <Doughnut data={{
          labels: [
            'Direct',
            'Social',
            'Referal'
          ],
          datasets: [{
            label: 'My First Dataset',
            data: [55, 30, 15],
            backgroundColor: [
              '#4C74DC',
              '#25C7A1',
              "#92C1E2"
            ],
            // hoverOffset: 4
          }]
        }} />
      </div>
    </div>

  )
}

export default Charts