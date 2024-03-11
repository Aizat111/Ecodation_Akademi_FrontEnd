import { createBrowserRouter } from "react-router-dom";
import { About } from "../pages/About";
import { Home } from "../pages/Home";
import App from "../App";
import { NotFoundPage } from "../pages/NotFoundPage";

export const router = createBrowserRouter([
  {
    path: "",
    element: <App />,
    children: [
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "about/:id",
        element: <About />,
      },
    ],
    errorElement: <NotFoundPage />,
  },
]);
