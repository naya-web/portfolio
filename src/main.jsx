import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AboutUs from "./Pages/AboutUs.jsx";
// import Contact from "./Pages/Contact.jsx";
import HomePage from "./Pages/HomePage.jsx";
import Portfolio from "./Pages/Portfolio.jsx";
import Help from "./Components/Help.jsx";
import More from "./Components/More.jsx";
import "./i18n";
import { ThemeProvider } from "./ThemeContext.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "about",
        element: <AboutUs />,
        children: [
          {
            path: "help",
            element: <Help />,
          },
        ],
      },
      {
        path: "portfolio",
        element: <Portfolio />,
        children: [
          {
            path: "more",
            element: <More />,
          },
        ],
      }
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);
