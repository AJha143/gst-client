import "./App.scss";
import DrawerComp from "./Components/Drawer/DrawerComp";
import TopMenuBar from "./Components/Navbar/TopMenuBar";
import Routing from "./Routes/Routes";
import { Grid } from "@mui/material";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

function App() {
  const { loginDetails } = useSelector((state) => state.login);
  const [access_token, setAccessToken] = useState(
    sessionStorage.getItem("accessToken") || loginDetails.accessToken
  );
  const location = useLocation();

  useEffect(() => {
    setAccessToken(sessionStorage.getItem("accessToken"));
  }, [access_token, sessionStorage.getItem("accessToken")]);

  const Navigation = () => {
    if (access_token && location.key !== "default") {
      return (
        <Grid item xs={12}>
          <TopMenuBar />
          <DrawerComp />
        </Grid>
      );
      
    } else {
      return;
    }
  };

  return (
    <Grid
      item
      container
      classes={{ container: "appGridContainer" }}
      direction="row"
    >
      {Navigation()}
      <Routing />
    </Grid>
  );
}

export default App;
