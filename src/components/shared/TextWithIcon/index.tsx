import { Grid, SxProps, Typography } from "@mui/material";
import { ReactNode, CSSProperties } from "react";

interface IProps {
  icon?: string | ReactNode;
  text: string | ReactNode;
  sx?: SxProps;
  endIcon?: string | ReactNode;
  onClick?: () => void;
  textStyle?: CSSProperties;
}

const TextWithIcon = ({
  icon,
  text,
  sx,
  onClick,
  endIcon,
  textStyle,
}: IProps) => {
  return (
    <Grid sx={sx} container alignItems="center" onClick={onClick}>
      {icon && <Grid item>{icon}</Grid>}
      <Grid item sx={{ mx: 1 }}>
        <Typography style={textStyle}>{text}</Typography>
      </Grid>
      {endIcon && <Grid item> {endIcon}</Grid>}
    </Grid>
  );
};

export default TextWithIcon;
