import "./App.scss";
import DrawerComp from "./Components/Drawer/DrawerComp";
import TopMenuBar from "./Components/Navbar/TopMenuBar";
import Routing from "./Routes/Routes";
import { useLocation } from "react-router-dom";
import { Grid } from "@mui/material";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";

function App() {
  const { loginDetails } = useSelector((state) => state.login);
  const [access_token, setAccessToken] = useState(
    sessionStorage.getItem("accessToken") || loginDetails.accessToken
  );
  const [location, _setLocation] = useState(useLocation());
  const [isNotFound, setIsNotFound] = useState(true);
  const handleNotFound = () => {
    setIsNotFound(false);
  };

  useEffect(() => {
    setAccessToken(sessionStorage.getItem("accessToken"));
  }, [access_token, sessionStorage.getItem("accessToken")]);

  const Navigation = () => {
    if (access_token && isNotFound) {
      return (
        <Grid item xs={12}>
          <TopMenuBar />
          <DrawerComp />
        </Grid>
      );
    }
    if (access_token && !isNotFound) {
      return;
    }
  };

  return (
    // <BrowserRouter>
    <Grid
      item
      container
      classes={{ container: "appGridContainer" }}
      direction="row"
    >
      {/* <Routing /> */}
      {Navigation()}
      <Routing handleNotFound={handleNotFound} />
      
    </Grid>
    // </BrowserRouter>
  );
}

export default App;
