import { styled, useTheme } from "@mui/material/styles";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ImmunaLogo from "../../components/shared/Svgs/ImmunaLogo";

export const StyledDrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

interface IProps {
  handleDrawerClose: () => void;
}

const CustomDrawerHeader = ({ handleDrawerClose }: IProps) => {
  const theme = useTheme();
  return (
    <StyledDrawerHeader>
      <Toolbar sx={{ mx: "auto" }}>
        <ImmunaLogo />
      </Toolbar>
      <IconButton onClick={handleDrawerClose}>
        {theme.direction === "rtl" ? <ChevronRightIcon /> : <ChevronLeftIcon />}
      </IconButton>
    </StyledDrawerHeader>
  );
};

export default CustomDrawerHeader;
