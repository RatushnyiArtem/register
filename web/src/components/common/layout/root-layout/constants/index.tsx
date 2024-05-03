import { Bookmark } from "@/components/common/icons/Bookmark";
import { Home } from "@/components/common/icons/Home";
import { Poll } from "@/components/common/icons/Poll";
import { User } from "@/components/common/icons/User";

export interface Link {
  icon: JSX.Element;
  label: string;
  url: string;
}

export const links: Link[] = [
  {
    icon: <Home />,
    label: "All polls",
    url: "/",
  },
  {
    icon: <Poll />,
    label: "My polls",
    url: "/my-polls",
  },
  {
    icon: <Bookmark />,
    label: "Saved polls",
    url: "/saved-polls",
  },
  {
    icon: <User />,
    label: "Profile",
    url: "/profile",
  },
];
