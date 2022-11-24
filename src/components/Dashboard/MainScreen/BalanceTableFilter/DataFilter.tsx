import React from "react";
import { styled, alpha } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Menu, { MenuProps } from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import EditIcon from "@mui/icons-material/Edit";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Box, Typography } from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const StyledMenu = styled((props: MenuProps) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "right",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "right",
    }}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color:
      theme.palette.mode === "light"
        ? "rgb(55, 65, 81)"
        : theme.palette.grey[300],
    boxShadow:
      "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
    "& .MuiMenu-list": {
      padding: "4px 0",
    },
    "& .MuiMenuItem-root": {
      "& .MuiSvgIcon-root": {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      "&:active": {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity
        ),
      },
    },
  },
}));

const dataCountFilter = [
  { value: -1, children: <ChevronLeftIcon /> },
  { value: 1, children: 1 },
  { value: 2, children: 2 },
  { value: "...", children: "..." },
  { value: 50, children: 50 },
  { value: -2, children: <ChevronRightIcon /> },
];

const DataFilter = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [alignment, setAlignment] = React.useState<string | null>("1");
  const open = Boolean(anchorEl);

  const handleAlignment = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string | null
  ) => {
    if (parseInt(String(newAlignment)) <= 0) return;
    setAlignment(newAlignment);
  };

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Box
        sx={{
          position: "fixed",
          bottom: 20,
          width: "100%",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Typography mr={1}>Show</Typography>
        <Button
          id="demo-customized-button"
          aria-controls={open ? "demo-customized-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          variant="contained"
          disableElevation
          onClick={handleClick}
          sx={{
            bgcolor: "common.white",
            color: "common.black",
            "&:hover": { bgcolor: "common.white" },
          }}
          endIcon={<KeyboardArrowDownIcon />}
        >
          12
        </Button>
        <StyledMenu
          id="demo-customized-menu"
          MenuListProps={{
            "aria-labelledby": "demo-customized-button",
          }}
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose} disableRipple>
            <EditIcon />
            Edit
          </MenuItem>
          <MenuItem onClick={handleClose} disableRipple>
            <FileCopyIcon />
            Duplicate
          </MenuItem>
        </StyledMenu>
      </Box>
      <Box sx={{ position: "fixed", right: 20, bottom: 10 }}>
        <ToggleButtonGroup
          value={alignment}
          exclusive
          onChange={handleAlignment}
          sx={{
            height: 32,
            py: 1,
            "& > button": {
              mx: 1,
              border: 0,
              p: 1,
              background: "#F3F3F3",
              height: 32,
            },
            bgcolor: "common.white",
          }}
        >
          {dataCountFilter.map((item) => (
            <ToggleButton
              style={{
                background: alignment === item.value ? "#1D7DEA" : undefined,
                color: alignment === item.value ? "white" : "black",
              }}
              key={item.value}
              value={item.value}
              aria-label="left aligned"
            >
              {item.children}
            </ToggleButton>
          ))}
        </ToggleButtonGroup>
      </Box>
    </>
  );
};

export default DataFilter;
