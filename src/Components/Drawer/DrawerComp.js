import React, { useState } from "react";
import {
  Button,
  Drawer,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Tooltip,
} from "@mui/material";
import Divider from "@mui/material/Divider";
import { Link } from "react-router-dom";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import MenuIcon from "@mui/icons-material/Menu";
import { drawerItems } from "../ConstantData";
import "./DrawerComp.scss";
import { Typography } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import ErrorBoundary from "../../customComponent/ErrorBoundary";
import { useNavigate } from "react-router-dom";
import { handleLogout } from "../../reducers/loginSliceReducer";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";

function DrawerComp(props) {
  const [show, setShow] = useState(false);
  const [drawerStyle, setDrawerStyle] = useState("drawerPaper");
  const [contentStyle, setContentStyle] = useState("drawer");
  const [logoutStyle, setLogoutStyle] = useState("logoutExp");
  const [btnStyle, setBtnStyle] = useState("btnExp");
  const [handleDrawer, setHandleDrawer] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  console.log("location", location);

  const handleShow = () => {
    setShow(!show);
    if (show && handleDrawer) {
      setLogoutStyle("logoutExp");
    } else if (!show && handleDrawer) {
    } else if (!show && !handleDrawer) {
      setLogoutStyle("logoutCol");
    } else if (show && !handleDrawer) {
      setLogoutStyle("logoutExp");
    }
  };

  const handleDwawerFunction = () => {
    setShow(!show);
    setHandleDrawer(!handleDrawer);

    if (handleDrawer) {
      setDrawerStyle("drawerPaper");
      setContentStyle("drawer");
      setBtnStyle("btnExp");
      props.styleDrawer("drawer1");
    } else {
      setDrawerStyle("drawerPaper2");
      setContentStyle("drawer2");
      setBtnStyle("btnCol");
      props.styleDrawer("drawer2");
    }

    handleDrawer
      ? show === false
        ? setLogoutStyle("logoutCol")
        : setLogoutStyle("logoutExp")
      : setLogoutStyle("logoutExp");

    if (handleDrawer && !show) {
      setShow(false);
      setLogoutStyle("logoutExp");
    }
  };

  const handleLogut = () => {
    sessionStorage.removeItem("user");
    dispatch(handleLogout({}));
    navigate("/");
  };

  return (
    <ErrorBoundary>
      <Grid item className="root" direction="row">
        <Drawer
          className={contentStyle} // for left margin from drawer
          variant="permanent"
          classes={{
            paper: drawerStyle, // width of the drawer
          }}
          transitionDuration={5000}
        >
          <List>
            <ListItem className="headerContainer">
              {!handleDrawer ? (
                <>
                  <Typography className="headerText"> Robo GST</Typography>
                  <MenuIcon
                    defaultChecked
                    className="menuIcon"
                    onClick={handleDwawerFunction}
                  />
                </>
              ) : (
                <MenuIcon
                  defaultChecked
                  color="primary"
                  onClick={handleDwawerFunction}
                />
              )}
            </ListItem>
            <Divider className="dividerComponent" variant="middle" />
            {drawerItems.map((item, index) => {
              return (
                <div key={index}>
                  <ListItem
                    className={{ root: "headerContainer2" }}
                    component={Link}
                    to={item.path}
                    onClick={item.subGSTR ? handleShow : ""}
                  >
                    {handleDrawer ? (
                      <ListItemIcon className={`icon${index + 1}`}>
                        <Tooltip
                          title={item.label}
                          placement="right-start"
                          arrow
                        >
                          {item.icon}
                        </Tooltip>
                      </ListItemIcon>
                    ) : (
                      <ListItemIcon className={`icon${index + 1}`}>
                        {item.icon}
                      </ListItemIcon>
                    )}

                    {!handleDrawer ? (
                      <ListItemText
                        primary={item.label}
                        className={
                          location.pathname === item.path
                            ? "activeClass"
                            : "text"
                        }
                      />
                    ) : (
                      ""
                    )}

                    {!handleDrawer ? (
                      <>
                        {item.subGSTR ? (
                          show ? (
                            <ExpandMoreIcon
                              className="icon"
                              fontSize="medium"
                              onClick={handleShow}
                            />
                          ) : (
                            <ExpandLessIcon
                              className="icon"
                              fontSize="medium"
                              onClick={handleShow}
                            />
                          )
                        ) : (
                          ""
                        )}
                      </>
                    ) : (
                      ""
                    )}
                  </ListItem>
                  {item.subGSTR && show && !handleDrawer
                    ? item.subGSTR.map((subItem, subIndex) => {
                        console.log("subItem", subItem);
                        return (
                          <ListItem
                            key={subIndex}
                            component={Link}
                            to={subItem.location}
                            className="headerContainer2"
                          >
                            <ListItemIcon
                              className={
                                subItem.location === location.pathname
                                  ? "subIconDotActive "
                                  : "subIconDot"
                              }
                            >
                              {item.subIcon}
                            </ListItemIcon>
                            <Typography
                              className={
                                subItem.location === location.pathname
                                  ? "activeSubClass"
                                  : "subtext"
                              }
                            >
                              {subItem.name}
                            </Typography>
                          </ListItem>
                        );
                      })
                    : null}
                </div>
              );
            })}
          </List>
          <Grid className={logoutStyle}>
            <Divider className="dividerComponent" variant="middle" />
            <Button
              variant="contained"
              color="primary"
              className={btnStyle}
              onClick={handleLogut}
            >
              <LogoutIcon />
              {!handleDrawer ? (
                <Typography className="logoutText"> Logout</Typography>
              ) : (
                ""
              )}
            </Button>
          </Grid>
        </Drawer>
      </Grid>
    </ErrorBoundary>
  );
}

export default DrawerComp;
