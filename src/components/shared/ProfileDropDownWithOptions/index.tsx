import { Box, Grid, SxProps } from "@mui/material";
import Profile from "./Profile";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import NotificationIcon from "../Svgs/NotificationIcon";

interface IProps {
  imgSrc?: string;
  name?: string;
  showNotification?: boolean;
  profileContainerSx?: SxProps;
  notificationIconContainerSx?: SxProps;
}

const ProfileDropDownWithOptions = ({
  imgSrc,
  name,
  showNotification,
  notificationIconContainerSx,
  profileContainerSx
}: IProps) => {
  return (
    <Grid
      container
      alignItems={"center"}
      sx={{
        color: "common.black",
      }}
    >
      {showNotification && (
        <Box mr={2} sx={notificationIconContainerSx}>
          <NotificationIcon />
        </Box>
      )}
      <Box sx={profileContainerSx}>
        <Profile imgSrc={imgSrc} name={name} />
      </Box>
      <ExpandMoreIcon />
    </Grid>
  );
};

export default ProfileDropDownWithOptions;
