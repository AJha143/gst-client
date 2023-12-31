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
  const [access_token, setAccessToken] = useState(loginDetails.accessToken);
  const [drawerPaper, setDrawerPaper] = useState("drawer");
  const [pageStyle, setPageStyle] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setAccessToken(loginDetails.accessToken);
  }, [loginDetails]);

  function styleDrawer(data) {
    setDrawerPaper(data);
  }
  function isProtected(info) {
    info ? setPageStyle(true) : setPageStyle(false);
  }

  const Navigation = () => {
    if (access_token && location.key !== "default") {
      return (
        <Grid item xs={12}>
          <TopMenuBar />
          <DrawerComp styleDrawer={styleDrawer} />
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
      classes={{ container: pageStyle === false ? "appGridContainer" : "" }}
      direction="row"
    >
      {Navigation()}
      <Grid className={pageStyle === false?'':drawerPaper}>
        <Routing isProtected={isProtected} />
      </Grid>
    </Grid>
  );
}

export default App;
