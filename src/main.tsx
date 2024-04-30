import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Root } from "./routes/root";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ErrorPage from "./pages/error";
import Page from "./routes/main";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
  },
  {
    path: "contacts/:contactId",
    element: <Page />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    

  </React.StrictMode>
);
