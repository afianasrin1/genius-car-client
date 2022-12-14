import { createBrowserRouter } from "react-router-dom";
import Roots from "../../layout/Roots";
import Checkout from "../../pages/Checkout/Checkout";

import Home from "../../pages/homes/Home/Home";
import Login from "../../pages/Login/Login";
import Orders from "../../pages/orders/Orders";
import SignUp from "../../pages/signUp/SignUp";
import PrivateRoute from "../privateRoute/PrivateRoute";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Roots />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/checkout/:id",
        element: (
          <PrivateRoute>
            <Checkout />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://genius-car-server-ten-iota.vercel.app/services/${params.id}`
          ),
      },
      {
        path: "/orders",
        element: (
          <PrivateRoute>
            <Orders />
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default routes;
