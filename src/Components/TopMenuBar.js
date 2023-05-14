import React from "react";
import Avatar from "@mui/material/Avatar";
import NotificationsIcon from '@mui/icons-material/Notifications';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Grid from "@mui/material/Grid";
import "./TopMenuBar.css";
import {  styled,Box }  from '@mui/material'

const Icons = styled(Box)(({ theme }) => ({
  display: "none",
  alignItems: "center",
  gap: "10px",
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
}));

const TopMenuBar = () => {
  return (
    <Grid container xs={12}  direction="row"
    justifyContent="flex-end"  alignItems="center" className="top-navbar">
      <Grid item xs={1} >
      <Icons>
      <NotificationsIcon/>
        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        <KeyboardArrowDownIcon/>
      </Icons>
      </Grid>
    </Grid>
  );
};

export default TopMenuBar;
