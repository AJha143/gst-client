import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const ProtectedRoute = ({ children, isProtectedRoute, checkRestriction }) => {
  checkRestriction.isProtected(isProtectedRoute)
  const protectionStatus = isProtectedRoute;
  const navigate = useNavigate();

  const { loginDetails } = useSelector((state) => state.login);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const checkUserToken = () => {
    const accessToken = loginDetails?.accessToken;

    if (protectionStatus) {
      if (!accessToken || accessToken === undefined) {
        setIsLoggedIn(false);
        return navigate("/");
      }
      setIsLoggedIn(true);
    } else {
      if (accessToken && window.location.pathname === "/") {
        return navigate("/home");
      }
      if (accessToken && window.location.pathname === "*") {
        return navigate("*");
      }
      setIsLoggedIn(true);
    }
  };

  useEffect(() => {
    checkUserToken();
  }, [isLoggedIn, loginDetails]);
  return <>{isLoggedIn ? children : null}</>;
};

export default ProtectedRoute;
