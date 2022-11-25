import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import EthereumIcon from "../../shared/Svgs/EthereumIcon";
import { Box } from "@mui/material";
import TextWithIcon from "../../shared/TextWithIcon";
import SearchFilter from "./BalanceTableFilter/SearchFilter";
import BalanceTableRow from "./BalanceTableRow";
import DataFilter from "./BalanceTableFilter/DataFilter";
import RiskModal from "./RiskModal";
import { useState } from "react";
import useToFetchCoinsList from "./useToFetchCoinsList";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#E6F0FF",
    color: theme.palette.common.black,
    fontWeight: 400,
    fontSize: 14,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const MainScreen = () => {
  const [open, setOpen] = useState(false);
  const setClose = () => setOpen(false);
  const { coinsList } = useToFetchCoinsList();

  return (
    <Box>
      <Box mb={2}>
        <SearchFilter />
      </Box>
      <TableContainer
        sx={{
          boxShadow: "0px 0px 14px rgba(0, 0, 0, 0.07)",
        }}
      >
        <Table sx={{ minWidth: 900 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>
                <TextWithIcon endIcon={<EthereumIcon />} text="Protocol" />
              </StyledTableCell>
              <StyledTableCell align="left">
                <TextWithIcon endIcon={<EthereumIcon />} text="Pool" />
              </StyledTableCell>
              <StyledTableCell align="left">
                <TextWithIcon
                  endIcon={<EthereumIcon />}
                  sx={{ mr: "auto" }}
                  text="Balance"
                />
              </StyledTableCell>
              <StyledTableCell align="left">
                <TextWithIcon endIcon={<EthereumIcon />} text="Risk Status" />
              </StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {coinsList.map((item) => (
              <BalanceTableRow
                key={item.id}
                setOpen={() => setOpen(true)}
                riskStatus={item.riskStatus!}
                icon={item.icon}
                balance={item.balance!}
                addr={item.addr!}
              />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Box>
        <DataFilter />
      </Box>
      <RiskModal open={open} setClose={setClose} />
    </Box>
  );
};

export default MainScreen;
