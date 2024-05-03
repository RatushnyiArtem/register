import { Box } from "@mui/material";
import { NavLink, useLocation } from "react-router-dom";

import { Link as LinkType } from "../../../constants";

import * as sxStyles from "./Link.styles";
import styles from "./Link.module.scss";

const Link = ({ link }: { link: LinkType }) => {
  const location = useLocation();

  return (
    <Box sx={sxStyles.link(location.pathname === link.url)}>
      {link.icon}
      <NavLink
        to={link.url}
        className={({ isActive }) => (isActive ? styles.active : "")}
      >
        {link.label}
      </NavLink>
    </Box>
  );
};

export default Link;
