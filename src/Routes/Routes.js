import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Clients from "../Pages/Clients/Clients";
import Reports from "../Pages/Reports/Reports";
import GSTR from "../Pages/GSTR/GSTR";
import Challan from "../Pages/Challan/Challan";
import HelpandSupport from "../Pages/Help and Support/HelpandSupport";
import Products from "../Pages/Products/Products";
import GSTR1 from "../Pages/GSTR/GSTR1/GSTR1";
import GSTR3B from "../Pages/GSTR/GSTR3B/GSTR3B";
import IFF from "../Pages/GSTR/IFF/IFF";
import GSTR9 from "../Pages/GSTR/GSTR9/GSTR9";
import GSTR9C from "../Pages/GSTR/GSTR9C/GSTR9C";
import GSTR4 from "../Pages/GSTR/GSTR4/GSTR4";
import Cmp from "../Pages/GSTR/CMP/Cmp";
import { Grid } from "@mui/material";
import Login from "../../src/Components/Login/LoginPage";
import Register from "../../src/Components/Signup/SignUp";
import ProtectedRoute from "./ProtectedRoutes";

const routes = [
  { path: "/home", element: <Home />, isProtectedRoute: true },
  { path: "/clients", element: <Clients />, isProtectedRoute: true },
  { path: "/reports", element: <Reports />, isProtectedRoute: true },
  { path: "/gstr", element: <GSTR />, isProtectedRoute: true },
  { path: "/gstr/gstr1", element: <GSTR1 />, isProtectedRoute: true },
  { path: "/gstr/gstr3b", element: <GSTR3B />, isProtectedRoute: true },
  { path: "/gstr/iff", element: <IFF />, isProtectedRoute: true },
  { path: "/gstr/cmp", element: <Cmp />, isProtectedRoute: true },
  { path: "/gstr/gstr4", element: <GSTR4 />, isProtectedRoute: true },
  { path: "/gstr/gstr9", element: <GSTR9 />, isProtectedRoute: true },
  { path: "/gstr/gstr9c", element: <GSTR9C />, isProtectedRoute: true },
  { path: "/challan", element: <Challan />, isProtectedRoute: true },
  {
    path: "/helpandsupport",
    element: <HelpandSupport />,
    isProtectedRoute: false,
  },
  { path: "/products", element: <Products />, isProtectedRoute: true },
  { path: "/", element: <Login />, isProtectedRoute: false },
  { path: "/register", element: <Register />, isProtectedRoute: false },
];

const Routing = () => {
  return (
    <Grid>
      <Routes>
        {routes.map(({ element, isProtectedRoute, ...otherProps }) => {
          return (
            <Route
              {...otherProps}
              element={
                isProtectedRoute ? (
                  <ProtectedRoute>{element}</ProtectedRoute>
                ) : (
                  element
                )
              }
            />
          );
        })}
      </Routes>
    </Grid>
  );
};

export default Routing;
