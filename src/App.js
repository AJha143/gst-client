import "./App.css";
import DrawerComp from "./Components/Drawer/DrawerComp";
import TopMenuBar from "./Components/TopMenuBar";
import Routing from "./Routes/Routes";
import { BrowserRouter } from "react-router-dom";
import { Grid } from "@material-ui/core";

function App() {
  return (
    <BrowserRouter>
      <TopMenuBar />
      <Grid style={{ display: "flex" }}>
        <DrawerComp />
        <Routing />
      </Grid>
    </BrowserRouter>
  );
}

export default App;
