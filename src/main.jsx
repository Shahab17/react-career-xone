import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Components/Root/Root";
import Home from "./Components/Home/Home";
import AppliedJobs from "./Components/AppliedJobs/AppliedJobs";
import ErrorPage from "./Components/ErrorPage/ErrorPage";
import JobDetails from "./Components/JobDetails/JobDetails";
import { HelmetProvider } from "react-helmet-async";
import AuthProvider from "./Components/AuthProvider/AuthProvider";
import Login from "./Components/Login/Login";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage></ErrorPage>,
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/applied",
        element: <AppliedJobs></AppliedJobs>,
        loader: () => fetch("/jobs.json"), // do not load all the data
      },
      {
        path: "/job/:id",
        loader: () => fetch("/jobs.json"), // do not load all data. load only what you need
        element: <JobDetails></JobDetails>,
      },
      {
        path: '/login',
        element: <Login></Login>
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <HelmetProvider>
        <RouterProvider router={router} />
      </HelmetProvider>
    </AuthProvider>
  </React.StrictMode>
);
