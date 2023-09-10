import React, { useState } from "react";
import { CardContent, Card } from "@mui/material";

import DropDownComponent from "../../../../customComponent/DropDown/DropDown";


const SelectClient = ({renderStatus}) => {
  const [selectedOption, setSelectedOption] = useState("");
  const options = [
    { value: 10, label: "Ten" },
    { value: 20, label: "Twenty" },
    { value: 30, label: "Thirty" },
    { value: 40, label: "Forty" },

  ];
  const handleChangeDropDown = () => {
    renderStatus(1)
  
  };
//   const handleClose = () =>{
  
//   }

  return (
    <>
    <Card
      sx={{
        width: "90%",
        borderColor: "#E4EAFC",
        borderWidth: "5px",
        backgroundColor: "#F9FBFE",
        margin: "20px",
      }}
      style={{ display: "flex", justifyContent: "space-around" }}
    >
      <CardContent>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi.
      </CardContent>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          margin: "auto",
          width: "125vh",
        }}
      >

        <DropDownComponent
          options={options}
          value={selectedOption}
          onChange={handleChangeDropDown}
          label="Select"
          outlined={1}
          sx={{ marginTop: "2vh" }}
        />
      </div>
    </Card>
    </>  )
}

export default SelectClient