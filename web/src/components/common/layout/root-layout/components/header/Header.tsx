import { lazy, Suspense } from "react";
import { useMediaQuery } from "@mui/material";
import theme from "@/styles/theme";

const DesktopHeader = lazy(() => import("./components/desktop-header"));
const MobileHeader = lazy(() => import("./components/mobile-header"));
const BurgerMenuProvider = lazy(
  () => import("./hooks/use-burger-menu/useBurgerMenu")
);

const Header = () => {
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Suspense fallback={null}>
      {isMobile ? (
        <BurgerMenuProvider>
          <MobileHeader />
        </BurgerMenuProvider>
      ) : (
        <DesktopHeader />
      )}
    </Suspense>
  );
};

export default Header;
