import { createBrowserRouter } from "react-router-dom";
import Roots from "../../layout/Roots";
import Checkout from "../../pages/Checkout/Checkout";

import Home from "../../pages/homes/Home/Home";
import Login from "../../pages/Login/Login";
import SignUp from "../../pages/signUp/SignUp";

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
        element: <Checkout />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/services/${params.id}`),
      },
    ],
  },
]);

export default routes;
