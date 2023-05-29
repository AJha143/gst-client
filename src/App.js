import "./App.scss";
import DrawerComp from "./Components/Drawer/DrawerComp";
import TopMenuBar from "./Components/Navbar/TopMenuBar";
import Routing from "./Routes/Routes";
import { BrowserRouter } from "react-router-dom";
import { Grid } from "@material-ui/core";

// import LoginPage from "./Components/Signup&login/LoginPage";
// import SignUp from "./Components/Signup&login/SignUp";
function App() {
  return (
    <BrowserRouter>
      <TopMenuBar />
      <Grid style={{ display: "flex" }}>
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

