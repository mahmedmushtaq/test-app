import { Box, Grid, Typography } from "@mui/material";

interface IProps {
  imgSrc?: string;
  name?: string;
}

const Profile = ({ imgSrc, name }: IProps) => {
  return (
    <Grid container alignItems="center">
      <Grid item>
        <Box
          sx={{
            width: 32,
            height: 32,
            borderRadius: "50%",
            background: "#D1D1D1",
          }}
        >
          {imgSrc && (
            <img
              src={imgSrc}
              alt="Profile"
              style={{ width: "100%", height: "100%" }}
            />
          )}
        </Box>
      </Grid>
      <Grid item sx={{ ml: 1 }}>
        <Typography>{name || "N/A"}</Typography>
      </Grid>
    </Grid>
  );
};

export default Profile;
