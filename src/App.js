import "./App.scss";
import DrawerComp from "./Components/Drawer/DrawerComp";
import TopMenuBar from "./Components/Navbar/TopMenuBar";
import Routing from "./Routes/Routes";
import { BrowserRouter } from "react-router-dom";
import { Grid } from "@mui/material";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";

function App() {
  const { loginDetails } = useSelector((state) => state.login);
  const [access_token, setAccessToken] = useState(
    sessionStorage.getItem("accessToken")
  );

  useEffect(() => {
    setAccessToken(
      sessionStorage.getItem("accessToken") || loginDetails.accessToken
    );
    console.log("access_token", access_token);
  }, [loginDetails.accessToken, access_token]);

  const Navigation = ({ token }) => {
    console.log("token", token);
    if (!token) return null;
    return (
      <Grid item xs={12}>
        <TopMenuBar />
        <DrawerComp />
      </Grid>
    );
  };
  return (
    <BrowserRouter>
      <Grid
        container
        classes={{ container: "appGridContainer" }}
        direction="row"
      >
        <Navigation token={access_token} />
        <Routing />
      </Grid>
    </BrowserRouter>
  );
}

export default App;
