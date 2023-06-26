import React from "react";
import Avatar from "@mui/material/Avatar";
import NotificationsIcon from "@mui/icons-material/Notifications";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Grid from "@mui/material/Grid";
import "./TopMenuBar.scss";
import { styled, Box } from "@mui/material";
import ErrorBoundary from "../../customComponent/ErrorBoundary";
import { store } from "../../store/store";

const Icons = styled(Box)(({ theme }) => ({
  display: "none",
  alignItems: "center",
  gap: "10px",
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
}));

const TopMenuBar = () => {
  const storeData = store.getState();
  const { login } = storeData;
  const { loginDetails } = login;
  const { user } = loginDetails;

  const name = user?.name || "";

  return (
    <ErrorBoundary>
      <Grid
        container
        xs={12}
        direction="row"
        justifyContent="flex-end"
        alignItems="center"
        className="top-navbar"
      >
        <Grid item xs={1}>
          <Icons>
            <NotificationsIcon />
            <Avatar alt={name} src="/static/images/avatar/1.jpg" />
            <KeyboardArrowDownIcon />
          </Icons>
        </Grid>
      </Grid>
    </ErrorBoundary>
  );
};

export default TopMenuBar;
