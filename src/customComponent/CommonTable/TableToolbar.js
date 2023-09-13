import React from "react";
import { Toolbar, Typography } from "@mui/material";

const CustomTableToolbar = ({ title = "", renderFunction, numSelected }) => {
  const getToolbar = () => {
    if (!renderFunction) return;
    return renderFunction();
  };

  return (
    <Toolbar classes={{ root: "toolBarWrapper" }}>
      <div
        className="toolbarContainer"
        style={{ display: "flex", width: "100%" }}
      >
        <div
          className="toolbarTitle"
          style={{
            justifyContent: "center",
            alignItems: "center",
            display: "flex"
          }}
        >
          {numSelected ? (
            `${numSelected} Selected`
          ) : (
            <Typography>{title}</Typography>
          )}
        </div>
        <div
          className="toolbarActions"
          style={{ display: "flex", marginLeft: "auto" }}
        >
          {getToolbar()}
        </div>
      </div>
    </Toolbar>
  );
};

export default CustomTableToolbar;
