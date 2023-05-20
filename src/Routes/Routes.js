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
import { Grid } from "@material-ui/core";



const routes = [
  { path: "/", element: <Home /> },
  { path: "/clients", element: <Clients /> },
  { path: "/reports", element: <Reports /> },
  { path: "/gstr", element: <GSTR /> },
  { path: "/gstr/gstr1", element: <GSTR1 /> },
  { path: "/gstr/gstr3b", element: <GSTR3B /> },
  { path: "/gstr/iff", element: <IFF /> },
  { path: "/gstr/cmp", element: <Cmp/> },
  { path: "/gstr/gstr4", element: <GSTR4 /> },
  { path: "/gstr/gstr9", element: <GSTR9 /> },
  { path: "/gstr/gstr9c", element: <GSTR9C /> },
  { path: "/challan", element: <Challan /> },
  { path: "/helpandsupport", element: <HelpandSupport /> },
  { path: "/products", element: <Products /> },
];

const Routing = () => {
  return (
    <Grid >
      <Routes>
        {routes.map((route) => (
          <Route {...route} />
        ))}
      </Routes>
    </Grid>
      
    
  );
};

export default Routing;
