import { CardContent, Card, Typography, Button } from "@mui/material";
import React, { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import DialogComponent from "../../../../customComponent/DialogComponent";
import DropDownComponent from "../../../../customComponent/DropDown/DropDown";

const ReturnPeriod = ({ renderStatus }) => {
  const [open, setOpen] = useState(true);

  const handleButton = () => {
    renderStatus(2);
  };
  const handleClose = () => {
    setOpen(false);
    renderStatus(0);
  };
  const [selectedOption, setSelectedOption] = useState("");

  // const d = new Date();
  // let currentMonth = d.getMonth();
  // console.log("month", currentMonth);

  // const m = new Date();
  // let year = m.getFullYear();
  // console.log("year", year);

  const optionsMonth = [
    { value: 2019, label: "FY: April'19 - March'20" },
    { value: 2020, label: "FY: April'20 - March'21" },
    { value: 2021, label: "FY: April'21 - March'22" },
    { value: 2022, label: "FY: April'22 - March'23" },
    { value: 2023, label: "FY: April'23 - March'24" },
  ];
  const optionsYear = [
    { value: 0, label: "January" },
    { value: 1, label: "February" },
    { value: 2, label: "March" },
    { value: 3, label: "April" },
    { value: 4, label: "May" },
    { value: 5, label: "June" },
    { value: 6, label: "July" },
    { value: 7, label: "August" },
    { value: 8, label: "September" },
    { value: 9, label: "October" },
    { value: 10, label: "November" },
    { value: 11, label: "December" },
  ];
  const handleMonth = (event) => {
    setSelectedOption(event.target.value);
  };
  const handleYear = (event) => {
    setSelectedOption(event.target.value);
  };
  return (
    <>
      <DialogComponent open={open} onClose={handleClose} maxWidth="md">
        <Card sx={{ width: "100%" }}>
          <CardContent className="cardHeader">
            <Typography style={{ fontSize: "20px" }}>
              Select Return Period
            </Typography>
            <div>
              <CloseIcon onClick={handleClose} />
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
                  options={optionsMonth}
                  value={selectedOption}
                  // onChange={handleMonth}
                  label="Select year"
                  outlined={false}
                  style={{
                    borderRadius: "7px",
                  }}
                />
              </div>
              <DropDownComponent
                options={optionsYear}
                value={selectedOption}
                // onChange={handleYear}
                label="Select month"
                outlined={false}
                style={{
                  borderRadius: "7px",
                }}
              />
            </div>
            <div
              style={{
                display: "flex",
                marginTop: "45px",
                marginBottom: "15px",
              }}
            >
              <div>
                <Button variant="contained" onClick={handleButton}>
                  Proceed
                </Button>
              </div>
              <div style={{ marginLeft: "3vh" }}>
                <Button variant="outlined" onClick={handleClose}>
                  Cancel
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </DialogComponent>
    </>
  );
};

export default ReturnPeriod;
