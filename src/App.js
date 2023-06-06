import "./App.scss";
import DrawerComp from "./Components/Drawer/DrawerComp";
import TopMenuBar from "./Components/Navbar/TopMenuBar";
import Routing from "./Routes/Routes";
import { BrowserRouter, useNavigate} from "react-router-dom";
import { Grid } from "@mui/material";


// import LoginPage from "./Components/Login/LoginPage";
// import SignUp from "./Components/Signup/SignUp";

const renderAuth = (Component,isLogedIn) => {
  return (props)=>{
    // const history = useHistory
    const a = useNavigate()
    if(isLogedIn) return <Component {...props}/>
    // return <useNavigate to="/clients" replace />
    // history.push("/login")
   return a( "/login")
    }
}
let token = null;
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
    //     <SignUp/>
    // </>
  );
}
  const Abcd = renderAuth(App,token)
export default Abcd;

