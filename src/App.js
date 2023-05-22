import "./App.scss";
// import SignUp from "./Components/Signup&login/SignUp";
// import DrawerComp from "./Components/Drawer/DrawerComp";
// import TopMenuBar from "./Components/TopMenuBar";
// import Routing from "./Routes/Routes";
// import { BrowserRouter } from "react-router-dom";
// import { Grid } from "@material-ui/core";
import LoginPage from "./Components/Signup&login/LoginPage"

function App() {
  return (
    // <BrowserRouter>
    //   <TopMenuBar />
    //   <Grid style={{ display: "flex" }}>
    //     <DrawerComp />
    //     <Routing />
    //   </Grid>
    // </BrowserRouter>
    <div>
      <LoginPage/>
      {/* <SignUp/> */}
    </div>
  );
}

export default App;
