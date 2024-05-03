import { Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

import Button from "@/components/common/ui/button";
import { ButtonColor } from "@/components/common/ui/button/types";
import { Logout } from "@/components/common/icons/Logout";
import Link from "./link";

import { links } from "../../constants";
import AuthService from "@/lib/services/auth";
import useAuth from "@/hooks/use-auth";

import * as sxStyles from "./Sidebar.styles";

const Sidebar = () => {
  const { update } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await AuthService.logout();
    await update();
    return navigate(0);
  };

  return (
    <Box component="aside" sx={sxStyles.sidebar}>
      <Box sx={sxStyles.links}>
        {links.map((link) => (
          <Link link={link} key={link.label} />
        ))}
        <Box sx={sxStyles.logout}>
          <Logout />
          <Typography
            variant="body1"
            onClick={handleLogout}
            sx={{ color: "red.main" }}
          >
            Log out
          </Typography>
        </Box>
      </Box>
      <Button
        color={ButtonColor.GREEN}
        text="Create Poll"
        onClick={() => navigate("/create-poll")}
      />
    </Box>
  );
};

export default Sidebar;
