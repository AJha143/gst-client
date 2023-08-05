import { CardContent, Card } from "@mui/material";
import React from "react";
import "./PrepareData.scss";
import AutoCompleteComponent from "../../../../customComponent/AutoComplete/AutoComplete";

const PrepareData = () => {
  return (
    <Card
        sx={{
          width: "90%",
          borderColor: "#E4EAFC",
          borderWidth: "5px",
          backgroundColor: "#F9FBFE",
          margin: "20px"
        }}
        style={{ display: "flex", justifyContent: "space-around" }}
    >
      <CardContent>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi.
      </CardContent>
      <div style={{
            display: "flex",
            justifyContent: "space-around",
            margin: "auto",
            width: "125vh",
            marginTop:'-5px'
          }}>
      <AutoCompleteComponent label="Select a client" width={{ width: '35vh'}} className="autoCompBtn"/>

      </div>
    </Card>
  );
};

export default PrepareData;
