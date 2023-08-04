import { CardContent, Card, Typography, Button } from "@mui/material";
import React, { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import "./ViewInvoices.scss";
import DropDownComponent from "../../../../customComponent/DropDown/DropDown";

const ViewInvoices = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const options = [
    { value: 10, label: "Ten" },
    { value: 20, label: "Twenty" },
    { value: 30, label: "Thirty" },
  ];
  const handleChangeDropDown = (event) => {
    setSelectedOption(event.target.value);
  };
  return (
    <Card sx={{ width: "85vh" }}>
      <CardContent className="cardHeader">
        <Typography style={{ fontSize: "20px" }}>
          Select Return Period
        </Typography>
        <div>
          <CloseIcon />
        </div>
      </CardContent>
      <CardContent style={{marginLeft:'5vh'}}>
        <div style={{ display: "flex",marginTop:'2vh' }}>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div style={{ marginRight: "1vh" }}>
              <InsertDriveFileIcon />
            </div>
            <Typography>012ERRT56OUYT45 </Typography>
          </div>
          <div style={{ marginLeft: "6vh",marginTop:"-7px" }}>
            <Button>CHANGE</Button>
          </div>
        </div>
        <div style={{ display: "flex", marginTop: "4vh" }}>
          <div style={{ marginRight: "30px" }}>
            <DropDownComponent
              options={options}
              value={selectedOption}
              onChange={handleChangeDropDown}
              label="Select"
              outlined={false}
            />
          </div>
          <DropDownComponent
            options={options}
            value={selectedOption}
            onChange={handleChangeDropDown}
            label="Select 2"
            outlined={false}
          />
        </div>
        <div style={{ display: "flex", marginTop: "45px",marginBottom:"15px" }}>
          <div><Button variant="contained">Proceed</Button></div>
          <div style={{marginLeft:'3vh'}}><Button variant='outlined'>Cancel</Button></div> 
        </div>
      </CardContent>
    </Card>
  );
};

export default ViewInvoices;
