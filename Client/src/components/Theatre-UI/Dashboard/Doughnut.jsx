import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
ChartJS.register(ArcElement, Tooltip, Legend);
const data = {
  labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(153, 102, 255, 0.2)', 'rgba(255, 159, 64, 0.2)'],
      borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)', 'rgba(75, 192, 192, 1)', 'rgba(153, 102, 255, 1)', 'rgba(255, 159, 64, 1)'],
      borderWidth: 1,
    },
  ],
};

const DoughnutChart = () => {
  // useEffect(() => {
  //   const data = {
  //     labels: ['JavaScript', 'Python', 'Ruby'],
  //     datasets: [
  //       {
  //         label: 'My First Dataset',
  //         data: [300, 50, 100],
  //         backgroundColor: ['rgb(133, 105, 241)', 'rgb(164, 101, 241)', 'rgb(101, 143, 241)'],
  //         hoverOffset: 4,
  //       },
  //     ],
  //   };

  //   const config = {
  //     type: 'doughnut',
  //     data: data,
  //     options: {},
  //   };

  //   var chart = new Chart(document.getElementById('chartDoughnut'), config);

  //   return () => {
  //     chart.destroy();
  //   };
  // }, []);

  return (
    <div className="w-5/12 px-10 py-6">
      {/* <div className="bg-neutral-50 px-5 py-3 dark:bg-neutral-700 dark:text-neutral-200">Doughnut chart</div>
      <canvas className="p-10" id="chartDoughnut"></canvas> */}
      <Doughnut data={data} />
    </div>
  );
};

export default DoughnutChart;
