import DashboardLayout from "../../Layouts/DashboardLayout";
import { Box } from "@mui/material";
import MainScreen from "../../components/Dashboard/MainScreen";

const Dashboard = () => {
  return (
    <DashboardLayout>
      <Box>
        <MainScreen />
      </Box>
    </DashboardLayout>
  );
};

export default Dashboard;
