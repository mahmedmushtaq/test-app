import Grid from "@mui/material/Unstable_Grid2/Grid2";
import MainLayout from "../../Layouts/MainLayout";
import BackgroundBitcoin from "../../common/assets/images/background_bitcoin.png";
import ConnectWallet from "../../components/Home/ConnectWallet";
import ConnectWalletBg from "../../common/assets/images/connet_wallet_bg.png";

const Home = () => {
  return (
    <MainLayout>
      <Grid container sx={{ p: 0, flexDirection: { sm: "column", md: "row" } }}>
        <Grid xs={12} md={6} sx={{ height: { sm: "50vh", md: "100vh" } }}>
          <img
            src={BackgroundBitcoin}
            alt="left grid bitcoin bg"
            height="100%"
            width="100%"
            style={{ objectFit: "cover" }}
          />
        </Grid>
        <Grid
          xs={12}
          md={6}
          container
          justifyContent={"center"}
          alignItems="center"
          sx={{
            background: `url(${ConnectWalletBg})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            mt: { xs: 5, md: 0 },
            flexDirection: "column",
          }}
        >
          <Grid>
            <ConnectWallet />
          </Grid>
        </Grid>
      </Grid>
    </MainLayout>
  );
};

export default Home;
