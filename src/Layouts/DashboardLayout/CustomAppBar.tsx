import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

import DummyPersonProfile from "../../common/assets/images/dummy_person_profile.png";
import ProfileDropDownWithOptions from "../../components/shared/ProfileDropDownWithOptions";
import SearchInput from "../../components/shared/SearchInput";

const drawerWidth = 268;

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

interface IProps {
  open: boolean;
  handleDrawerOpen: () => void;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const CustomAppBar = ({ open, handleDrawerOpen }: IProps) => {
  return (
    <AppBar
      position="fixed"
      open={open}
      sx={{
        color: "common.black",

        bgcolor: "common.white",
        boxShadow: "0px 1px 10px rgba(74, 74, 74, 0.07)",
      }}
    >
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          edge="start"
          sx={{
            marginRight: 5,
            ...(open && { display: "none" }),
          }}
        >
          <MenuIcon />
        </IconButton>

        <Typography component="div">Dashboard</Typography>

        <Box ml={7} sx={{ display: { xs: "none", sm: "block" } }}>
          <SearchInput />
        </Box>

        <Box ml={"auto"}>
          <ProfileDropDownWithOptions
            showNotification
            imgSrc={DummyPersonProfile}
            name="Bettey Copper"
            notificationIconContainerSx={{
              display: { xs: "none", lg: "block" },
            }}
            profileContainerSx={{ display: { xs: "none", lg: "block" } }}
          />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default CustomAppBar;
