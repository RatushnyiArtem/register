import { createBrowserRouter } from "react-router-dom";

import PrivateRoutes from "./PrivateRoutes";
import AuthLayout from "@/components/common/layout/auth-layout";
import RootLayout from "@/components/common/layout/root-layout";

import Home from "@/pages/poll/home";
import Login from "@/pages/login";
import Register from "@/pages/register";
import MyPolls from "@/pages/my-polls";
import PollDetails from "@/pages/poll/poll-details";
import CreatePoll from "@/pages/poll/create-poll";
import UpdatePoll from "@/pages/poll/update-poll";

const router = createBrowserRouter([
  {
    element: <PrivateRoutes />,
    children: [
      {
        element: <RootLayout />,
        children: [
          {
            path: "/",
            element: <Home />,
          },
          {
            path: "/:id",
            element: <PollDetails />,
          },
          {
            path: "/create-poll",
            element: <CreatePoll />,
          },
          {
            path: "/:id/update-poll",
            element: <UpdatePoll />,
          },
          {
            path: "/my-polls",
            element: <MyPolls />,
          },
        ],
      },
    ],
  },
  {
    element: <AuthLayout />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);

export default router;
