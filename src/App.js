import "./App.scss";
import DrawerComp from "./Components/Drawer/DrawerComp";
import TopMenuBar from "./Components/Navbar/TopMenuBar";
import Routing from "./Routes/Routes";
import { BrowserRouter } from "react-router-dom";
import { Grid } from "@mui/material";

// import LoginPage from "./Components/Signup&login/LoginPage";
// import SignUp from "./Components/Signup&login/SignUp";
function App() {

  return (
    <BrowserRouter>
      <Grid container classes={{container:"appGridContainer"}} direction="row">
        <Grid item xs={12}>
          <TopMenuBar />
        </Grid>
        <DrawerComp />
        <Routing />
      </Grid>
    </BrowserRouter>
 

    // <>
    //   <LoginPage/> 
    //    <SignUp/>
    //   <ForgetPassword/>
    // </>
  );
}

export default App;

