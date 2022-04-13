import { useAuth } from '../contexts/AuthContext';

const Dashboard = () => {
  const { user } = useAuth();

  return <h1>Dashboard: {user?.email}</h1>;
};

export default Dashboard;
