import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import theme from "../theme";
import { ThemeProvider } from "@mui/material/styles";
import Dashboard from "../pages/Dashboard";

const AllRoutes = () => {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </div>
      </ThemeProvider>
    </div>
  );
};

export default AllRoutes;
