import { useLocation, useNavigate } from "react-router-dom";
import Button from "@/components/common/ui/button";
import { ButtonColor } from "@/components/common/ui/button/types";

import { useBurgerMenu } from "../../../../hooks/use-burger-menu";
import { Link as LinkType } from "@/components/common/layout/root-layout/constants";
import theme from "@/styles/theme";

const Link = ({ link }: { link: LinkType }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const { toggleBurger } = useBurgerMenu();

  const isActive = location.pathname === link.url;

  const handleClick = () => {
    navigate(link.url);
    toggleBurger();
  };

  return (
    <Button
      color={isActive ? ButtonColor.PRIMARY : ButtonColor.WHITE}
      text={link.label}
      icon={link.icon}
      sx={{
        "&>*>svg": {
          fill: isActive
            ? theme.palette.white.main
            : theme.palette.primary.main,
        },
      }}
      onClick={handleClick}
    />
  );
};

export default Link;
