import React,{useEffect,useState} from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const ProtectedRoute = ({ children }) => {
  const navigate = useNavigate();
  const {loginDetails}=useSelector((state)=>state.login)
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const checkUserToken = () => {
    const accessToken = sessionStorage.getItem("accessToken")|| loginDetails?.accessToken;
    if (!accessToken || accessToken === undefined) {
      setIsLoggedIn(false);
      return navigate("/");
    }
    setIsLoggedIn(true);
  };

  useEffect(() => {
    checkUserToken();
  }, [isLoggedIn,loginDetails]);
  return <>{isLoggedIn ? children : null}</>;
};

export default ProtectedRoute;
