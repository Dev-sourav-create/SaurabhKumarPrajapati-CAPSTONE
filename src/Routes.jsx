import { BrowserRouter, createBrowserRouter } from "react-router-dom";

import { Layout } from "./sharedComponents/layout";

import { OrderPizza } from "./pages/OrderPizza/OrderPizza";

import { BuildPizza } from "./pages/BuildPizza/BuildPizza";
import { Home } from "./pages/Home/Home";
import CheckOut from "./pages/CheckOut/CheckOut";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,

    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/order",
        element: <OrderPizza />,
      },
      {
        path: "/build",
        element: <BuildPizza />,
      },
      {
        path: "/cart",
        element: <CheckOut />,
      },
    ],
  },
]);

export default router;
