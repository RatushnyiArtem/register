import { SxProps, Theme, Typography } from "@mui/material";
import { Link as NavLink, LinkProps as NavLinkProps } from "react-router-dom";

import mergeSx from "@/lib/utils/mergeSx";

import * as styles from "./Link.styles";

interface LinkProps extends NavLinkProps {
  sx?: SxProps<Theme>;
}

const Link: React.FC<LinkProps> = ({ to, children, sx = {}, ...props }) => {
  return (
    <NavLink to={to} {...props}>
      <Typography
        variant="body1"
        component="span"
        sx={mergeSx(styles.link, sx)}
      >
        {children}
      </Typography>
    </NavLink>
  );
};

export default Link;
