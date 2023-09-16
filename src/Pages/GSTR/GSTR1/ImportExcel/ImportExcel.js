import { Card, CardContent, Typography } from "@mui/material";
import React, { useState } from "react";
import "./ImportExcel.scss";
import BackupIcon from "@mui/icons-material/Backup";
import { ArrowForward } from "@mui/icons-material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import CloseIcon from "@mui/icons-material/Close";
import Summary from "../Summary/Summary";
import SalesInvoice from "../CreateAmendSalesInvoice/SalesInvoice";
import DialogComponent from "../../../../customComponent/DialogComponent";

const ImportExcel = ({ renderStatus }) => {
  const [invoice] = useState(false);
  // const handleCASInvoice = () => {
  //   // props.status(4);
  // };
  const [selectedFile, setSelectedFile] = useState(null);
  const [open, setOpen] = useState(true);
  const handleClose = () => {
    setOpen(false);
    renderStatus(2);
  };

  const handleCASInvoice = () => {
    if (selectedFile) {
      renderStatus(4);
    } else {
    }
  };

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  return (
    <div>
      <Summary />

      <DialogComponent open={open} onClose={handleClose} maxWidth="xs">
        {!invoice ? (
          <Card className="cardContainer">
            <CardContent className="cardHeader">
              <Typography>Import Government Excel</Typography>
              <CloseIcon onClick={handleClose} />
            </CardContent>

            <CardContent>
              <div className="cardClientName">
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
              <Typography className="cardTypography">
                <div className="textHeading">
                  If you have prepared your data on a Government Excel Template,
                  please click below to import the file.
                </div>
              </Typography>

              <div className="buttonComponent">
                <label
                  htmlFor="fileInput" // Connect the label to the input element
                  className="buttonLabel"
                >
                  <BackupIcon className="marginClass" color="white" />
                  <Typography className="marginClass">
                    Select File From Your Computer
                  </Typography>
                  <ArrowForward className="marginClass" color="white" />
                  <input
                    type="file"
                    id="fileInput"
                    className="noneClass" // Hide the actual input element
                    onChange={handleFileChange}
                  />
                </label>
                <Typography className="uploadBtn" onClick={handleCASInvoice}>
                  Upload
                </Typography>
              </div>

              <div className="flexClass">
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
