import {
  Box,
  Card,
  Typography,
  TextField,
  styled,
  Button,
  Grid,
} from "@mui/material";
import EthereumIcon from "../shared/Svgs/EthereumIcon";
import TextWithIcon from "../shared/TextWithIcon";

const Input = styled(TextField)(() => ({
  "& fieldset": {
    // borderRadius: "30px",
  },
}));

const ConnectWallet = () => {
  return (
    <Card
      sx={{
        background: "common.white",
        width: { xs: 499, md: 399, lg: 499, xl: 599 },
        height: { xs: 500, xl: 654 },
      }}
    >
      <Box textAlign="center" sx={{ p: 5, mt: { xs: 2, xl: 7.5 } }}>
        <Typography variant="h5" sx={{}}>
          Welcome to Immuna
        </Typography>
        <Typography variant="body1" mt={1}>
          Connect your wallet
        </Typography>
      </Box>

      <Box sx={{ py: 2, px: 5 }}>
        <TextWithIcon
          icon={<EthereumIcon />}
          sx={{ mt: 1, mb: { xs: 2, xl: 2.5 } }}
          text="Ethereum"
        />
        <Input
          fullWidth
          placeholder="Enter Wallet Address"
          InputProps={{
            sx: { fontSize: 14, borderRadius: 30, background: "#EFEFEF" },
          }}
          inputProps={{ sx: { borderRadisu: 30 } }}
        />
        <Button
          variant="contained"
          fullWidth
          sx={{
            height: 65,
            borderRadius: 25,
            mt: { xs: 4, xl: 7 },
            fontSize: "1rem",
            fontWeight: 500,
          }}
        >
          Connect To Wallet
        </Button>
      </Box>
    </Card>
  );
};

export default ConnectWallet;
