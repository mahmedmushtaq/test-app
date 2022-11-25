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
import useToHandleData from "./useToHandleData";

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

const balanceTableHeading = ["Protocol", "Pool", "Balance", "Risk Status"];

const MainScreen = () => {
  const { coinsList, open, setClose, handleOpen } = useToHandleData();

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
              {balanceTableHeading.map((heading) => (
                <StyledTableCell key={heading}>
                  <TextWithIcon
                    textStyle={{ fontSize: 14, fontFamily: "Inter" }}
                    endIcon={<EthereumIcon />}
                    text={heading}
                  />
                </StyledTableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {coinsList.map((item) => (
              <BalanceTableRow
                key={item.id}
                setOpen={handleOpen}
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
