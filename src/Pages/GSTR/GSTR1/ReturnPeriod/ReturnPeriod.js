import { CardContent, Card, Typography, Button } from "@mui/material";
import React, { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import DialogComponent from "../../../../customComponent/DialogComponent";
import DropDownComponent from "../../../../customComponent/DropDown/DropDown";




const ReturnPeriod = ({renderStatus}) => {

const [open,setOpen] = useState(true)

  const handleButton = () => {
    renderStatus(2)
  };
const handleClose =() =>{
    setOpen(false)
    renderStatus(0)

}
  const [selectedOption, setSelectedOption] = useState("");
  const options = [
    { value: 10, label: "Ten" },
    { value: 20, label: "Twenty" },
    { value: 30, label: "Thirty" },
  ];
  const handleChangeDropDown = (event) => {
    setSelectedOption(event.target.value);
  };
  console.log("card invoi");
  return (
    <>
    <DialogComponent  open={open}
    onClose={handleClose}
    maxWidth="md">
    <Card sx={{ width: "100%" }}>
      <CardContent className="cardHeader">
        <Typography style={{ fontSize: "20px" }}>
          Select Return Period
        </Typography>
        <div>
          <CloseIcon  onClick={handleClose}/>
        </div>
      </CardContent>
      <CardContent style={{ marginLeft: "5vh" }}>
        <div style={{ display: "flex", marginTop: "2vh" }}>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div style={{ marginRight: "1vh" }}>
              <InsertDriveFileIcon />
            </div>
            <Typography>012ERRT56OUYT45 </Typography>
          </div>
          <div style={{ marginLeft: "6vh", marginTop: "-7px" }}>
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
        <div
          style={{ display: "flex", marginTop: "45px", marginBottom: "15px" }}
        >
          <div>
            <Button variant="contained" onClick={handleButton}>
              Proceed
            </Button>
          </div>
          <div style={{ marginLeft: "3vh" }}>
            <Button variant="outlined" onClick={handleClose}>Cancel</Button>
          </div>
        </div>
      </CardContent>
    </Card>
    </DialogComponent>
   </>
  );
};

export default ReturnPeriod;
