import React from "react";
import Box from "@mui/material/Box";
import ViewComfyIcon from "@mui/icons-material/ViewComfy";
import ReportProblemIcon from "@mui/icons-material/ReportProblem";
import SecurityIcon from "@mui/icons-material/Security";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import TextWithIcon from "../../components/shared/TextWithIcon";

const drawerNavigation = [
  { id: 1, Icon: ViewComfyIcon, text: "Dashboard" },
  { id: 2, Icon: ReportProblemIcon, text: "Alerts" },
  { id: 3, Icon: SecurityIcon, text: "Defend" },
  { id: 4, Icon: VerifiedUserIcon, text: "Protect" },
];

interface IProps {
  open: boolean;
}

const DrawerNavigation = ({ open }: IProps) => {
  const [selectedNavigation, setSelectedNavigation] = React.useState(
    drawerNavigation[0]
  );

  const getSelectedNavigationItemSx = (isSelected: boolean) => ({
    color: isSelected ? "common.white" : "common.black",
    bgcolor: isSelected ? "primary.main" : "common.white",
  });

  return (
    <Box mx="auto" mt={4}>
      {drawerNavigation.map((item, index) => (
        <TextWithIcon
          key={item.id}
          icon={<item.Icon fontSize="small" />}
          sx={{
            height: !open ? undefined : 48,
            width: !open ? undefined : 194,
            pl: 3,
            cursor: "pointer",
            mt: 2,
            p: !open ? 2 : undefined,
            borderRadius: !open ? undefined : 3,
            ...getSelectedNavigationItemSx(item.id === selectedNavigation.id),
          }}
          text={!open ? "" : item.text}
          onClick={() => setSelectedNavigation(item)}
        />
      ))}
    </Box>
  );
};

export default DrawerNavigation;
