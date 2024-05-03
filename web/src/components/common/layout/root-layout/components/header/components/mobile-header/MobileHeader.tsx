import { lazy, Suspense } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Typography } from "@mui/material";

import Button from "@/components/common/ui/button";
import { BurgerMenu as BurgerMenuIcon } from "@/components/common/icons/BurgerMenu";
import { ButtonColor } from "@/components/common/ui/button/types";

import { useBurgerMenu } from "../../hooks/use-burger-menu";
import mergeSx from "@/lib/utils/mergeSx";

import { header } from "../../Header.styles";

const BurgerMenu = lazy(() => import("./burger-menu"));

const MobileHeader = () => {
  const { isBurgerOpen, toggleBurger } = useBurgerMenu();
  const navigate = useNavigate();

  return (
    <>
      <Box
        component="header"
        sx={mergeSx(header, { justifyContent: "space-between" })}
      >
        <Typography
          variant="h2"
          sx={{ cursor: "pointer" }}
          onClick={() => navigate("/")}
        >
          Decisioner
        </Typography>
        <Box>
          <Button
            onClick={toggleBurger}
            color={ButtonColor.WHITE}
            icon={<BurgerMenuIcon />}
          />
        </Box>
      </Box>
      <Suspense fallback={null}>{isBurgerOpen && <BurgerMenu />}</Suspense>
    </>
  );
};

export default MobileHeader;
