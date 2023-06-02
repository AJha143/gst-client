import React, { useState } from "react";
import {
  Button,
  Drawer,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
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

function DrawerComp() {
  const [show, setShow] = useState(false);
  const [drawerStyle, setDrawerStyle] = useState("drawerPaper");
  const [contentStyle, setContentStyle] = useState("drawer");
  const [logoutStyle, setLogoutStyle] = useState("logoutExp");
  const [btnStyle, setBtnStyle] = useState("btnExp");
  const [handleDrawer, setHandleDrawer] = useState(false);

  const handleShow = () => {
    setShow(!show);
    console.log("show", show);
    show ? setLogoutStyle("logoutExp") : setLogoutStyle("logoutCol");
  };

  const handleDwawerFunction = () => {
    setShow(!show);
    setHandleDrawer(!handleDrawer);
    console.log("handleDrawer", handleDrawer);
    handleDrawer
      ? setDrawerStyle("drawerPaper")
      : setDrawerStyle("drawerPaper2");

    handleDrawer ? setContentStyle("drawer") : setContentStyle("drawer2");
    handleDrawer
      ? show === false
        ? setLogoutStyle("logoutCol")
        : setLogoutStyle("logoutExp")
      : setLogoutStyle("logoutExp");
    handleDrawer ? setBtnStyle("btnExp") : setBtnStyle("btnCol");
    if (handleDrawer && !show) {
      setShow(false);
      setLogoutStyle("logoutExp");
    }
  };

  return (
    <ErrorBoundary>
    <Grid className="root" direction="row">
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
                  color="tertiary"
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
                  className="headerContainer2"
                  component={Link}
                  to={item.path}
                >
                  <ListItemIcon className={`icon${index + 1}`}>
                    {item.icon}
                  </ListItemIcon>
                  {!handleDrawer ? (
                    <ListItemText className="text" primary={item.label} />
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
                      return (
                        <ListItem
                          key={subIndex}
                          component={Link}
                          to={subItem.location}
                          className="headerContainer2"
                        >
                          <ListItemIcon className="subIcon">
                            {item.subIcon}
                          </ListItemIcon>
                          <Typography className="subtext">
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
          <Button variant="contained" color="primary" className={btnStyle}>
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
