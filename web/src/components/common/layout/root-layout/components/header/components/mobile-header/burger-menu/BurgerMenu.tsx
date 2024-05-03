import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

import { links } from "@/components/common/layout/root-layout/constants";
import Button from "@/components/common/ui/button";
import { Logout } from "@/components/common/icons/Logout";
import { ButtonColor } from "@/components/common/ui/button/types";
import Link from "./link";

import AuthService from "@/lib/services/auth/AuthService";
import useAuth from "@/hooks/use-auth";
import { useBurgerMenu } from "../../../hooks/use-burger-menu";

import * as styles from "./BurgerMenu.styles";

const BurgerMenu = () => {
  const { isBurgerOpen } = useBurgerMenu();
  const { update } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await AuthService.logout();
    await update();
    return navigate(0);
  };

  if (!isBurgerOpen) return null;

  return (
    <Box sx={styles.burgerMenu}>
      <Box sx={styles.links}>
        {links.map((link) => (
          <Link key={link.label} link={link} />
        ))}
      </Box>
      <Box sx={styles.links}>
        <Button
          color={ButtonColor.GREEN}
          text="Create poll"
          onClick={() => navigate("/create-poll")}
        />
        <Button
          icon={<Logout />}
          color={ButtonColor.RED}
          text="Logout"
          sx={{
            "&>*>svg": {
              fill: "white",
            },
          }}
          onClick={handleLogout}
        />
      </Box>
    </Box>
  );
};

export default BurgerMenu;
