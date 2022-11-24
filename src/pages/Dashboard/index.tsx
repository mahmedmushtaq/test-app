import DashboardLayout from "../../Layouts/DashboardLayout";
import { Box } from "@mui/material";
import BalanceTable from "../../components/Dashboard/Main/BalanceTable";

const Dashboard = () => {
  return (
    <DashboardLayout>
      <Box>
        <BalanceTable />
      </Box>
    </DashboardLayout>
  );
};

export default Dashboard;
