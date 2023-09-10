import { Card, CardContent, Typography } from "@mui/material";
import React, { useState } from "react";
import "./ImportExcel.scss";
import BackupIcon from "@mui/icons-material/Backup";
import { ArrowForward } from "@mui/icons-material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import CloseIcon from "@mui/icons-material/Close";
// import Summary from "../../../Summary/Summary";
import SalesInvoice from "../CreateAmendSalesInvoice/SalesInvoice";
import DialogComponent from "../../../../customComponent/DialogComponent";

const ImportExcel = ({renderStatus}) => {
  const [invoice] = useState(false);
  // const handleCASInvoice = () => {
  //   // props.status(4);
  // };
  const [selectedFile, setSelectedFile] = useState(null);
  const [open,setOpen] = useState(true) 
  const handleClose = ()=>{
    setOpen(false)
    renderStatus(2)

  }

  const handleCASInvoice = () => {
    if (selectedFile) {
      // Handle the selected file (e.g., upload or process it)
      console.log("Selected file:", selectedFile);
      renderStatus(4);

    } else {
      console.log("No file selected.");
    }
  };

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  
  return (
    <div>
      {/* <Summary /> */}

<DialogComponent open={open}
    onClose={handleClose}
    maxWidth="xs" >
      {!invoice ? (
        <Card style={{ width: "100%", height: "100vh" }}>
          <CardContent className="cardHeader">
            <Typography>Import Government Excel</Typography>
            <CloseIcon onClick={handleClose}/>
          </CardContent>

          <CardContent>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "6vh",
              }}
            >
              <span>Abhisek Khanna </span>
              <span>|</span>
              <span>0612ADH8IOP </span>
              <span>|</span>
              <span>Haryana </span>
              <span>|</span>
              <span>Sales </span>
              <span>|</span>
              <span>Nov 2021</span>
            </div>
            <Typography style={{ marginBottom: "2vh" }}>
              <span className="textHeading">
                If you have prepared your data on a Government Excel Template,
                please click below to import the file.
              </span>
            </Typography>

            <div
              style={{
                display: "flex",
                justifyContent: "center",
                width: "100%",
                backgroundColor: "#528FF0",
                color: "white",
                height: "6vh",
                borderRadius: "10px",
                marginBottom: "8vh",
                cursor: "pointer", // Add cursor style
              }}
            >
              <label
                htmlFor="fileInput" // Connect the label to the input element
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flex: 1,
                }}
              >
                <BackupIcon style={{ margin: "auto" }} color="white" />
                <Typography style={{ margin: "auto" }}>
                  Select File From Your Computer
                </Typography>
                <ArrowForward style={{ margin: "auto" }} color="white" />
                <input
                  type="file"
                  id="fileInput"
                  style={{ display: "none" }} // Hide the actual input element
                  onChange={handleFileChange}
                />
              </label>
              <Typography
              style={{
                margin: "auto",
                padding: "0.5rem",
                backgroundColor: "rgba(255, 255, 255, 0.1)",
                borderRadius: "10px",
              }}
              onClick={handleCASInvoice}
            >
              Upload
            </Typography>
            </div>
           
            <div style={{ display: "flex" }}>
              <Typography className="textHeading2">
                ADVANCED OPTIONS FOR SELECTING SHEETS
              </Typography>
              <ArrowDropDownIcon color="primary" />
            </div>
            <span className="textDetails">
              Need the government excel for filling GSTR-1 data offline?{" "}
              <span className="downloadHighlight">Download it here.</span>
            </span>
          </CardContent>
        </Card>
      ) : (
        <SalesInvoice />
      )}
      </DialogComponent>
    </div>
  );
};

export default ImportExcel;
