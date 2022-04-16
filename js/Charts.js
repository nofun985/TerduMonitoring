const ctx = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['ATF', 'ITF', 'FMF', 'AQF', 'XFF', 'IFF'],
        datasets: [{
            label: 'Talabalar soni fakultetlar miqyosida',
            data: [1345, 1456, 1212, 1678, 1332, 1567],
            backgroundColor: [
                'rgba(255, 99, 132)',
                'rgba(54, 162, 235)',
                'rgba(255, 206, 86)',
                'rgba(75, 192, 192)',
                'rgba(153, 102, 255)',
                'rgba(255, 159, 64)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

const ctx1 = document.getElementById('newChart').getContext('2d');
const newChart = new Chart(ctx1, {
    type: 'doughnut',
    data: {
      labels: [
        'Qizlar',
        'O\'g\'il bollar',
      ],
            datasets: [{
            data: [12998, 13397],
            backgroundColor: [
              'rgb(255, 99, 132)',
              'rgb(54, 162, 235)',
            ],
            hoverOffset: 4
        }]
    },
    options: {
      rotation: 180,
      animation: {
        animateScale: true
      },
      tooltips: {
        enabled: true
      },
      plugins: {
        datalabels: {
          color: 'white',
          
          font: {
            weight: 'bold',
            size: 12
          },
        }
      }
    },
    plugins: [ChartDataLabels]
});
