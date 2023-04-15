import Layout from '../../components/User-UI/Layout';
import TheatreSidebar from '../../components/Theatre-UI/Dashboard/TheatreSidebar';
import PieChart from '../../components/Theatre-UI/Dashboard/PieChart';
import DoughnutChart from '../../components/Theatre-UI/Dashboard/Doughnut';

const Dashboard = () => {
  return (
    <Layout>
      <div className="flex ">
        <TheatreSidebar />
        <div className="flex w-screen  pt-12 pl-2 gap-2">
          <PieChart />
          <DoughnutChart />
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
