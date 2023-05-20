import React, { useState } from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import Divider from "@mui/material/Divider";
import Switch from "@mui/material/Switch";
import { Link } from "react-router-dom";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import { drawerItems } from "../ConstantData";
import "./DrawerComp.scss";
import { Typography } from "@mui/material";

function DrawerComp() {
  const [show, setShow] = useState(false);
  const handleShow = () => {
    setShow(!show);
  };

  return (
    <div className="root">
      <Drawer
        className="drawer" // for left margin from drawer
        variant="permanent"
        classes={{
          paper: "drawerPaper",
        }}
      >
        <List>
          <ListItem className="headerContainer">
            <Typography className="headerText"> Robo GST</Typography>
            <Switch defaultChecked color="secondary" />
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
                  <ListItemText className="text" primary={item.label} />
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
                </ListItem>
                {item.subGSTR && show
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
      </Drawer>
    </div>
  );
}

export default DrawerComp;
