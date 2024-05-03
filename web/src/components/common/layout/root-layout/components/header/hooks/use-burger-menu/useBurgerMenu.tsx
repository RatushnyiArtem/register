import {
  createContext,
  PropsWithChildren,
  useContext,
  useMemo,
  useState,
} from "react";
import { BurgerContextProps } from "./types";

const BurgerContext = createContext<BurgerContextProps>({
  isBurgerOpen: false,
  toggleBurger: () => {},
});

export const useBurgerMenu = (): BurgerContextProps =>
  useContext(BurgerContext);

const BurgerMenuProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);

  const context: BurgerContextProps = useMemo(
    () => ({
      isBurgerOpen,
      toggleBurger: () => {
        setIsBurgerOpen(!isBurgerOpen);
      },
    }),
    [isBurgerOpen]
  );

  return (
    <BurgerContext.Provider value={context}>{children}</BurgerContext.Provider>
  );
};

export default BurgerMenuProvider;
