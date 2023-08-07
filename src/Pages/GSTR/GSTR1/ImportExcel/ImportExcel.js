import { Card, CardContent, Typography } from "@mui/material";
import React from "react";
import "./ImportExcel.scss";
import BackupIcon from "@mui/icons-material/Backup";
import { ArrowForward } from "@mui/icons-material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import CloseIcon from "@mui/icons-material/Close";
import CustomizedSteppers2 from "../../../../Components/Stepper/Stepper2"
import Summary from "../../../Summary/Summary";

const ImportExcel = () => {
  const activeStep = 0;
  const steps = ["Step 1", "Step 2", "Step 3"];
  return (
    <div>
      <CustomizedSteppers2
        steps={steps}
        activeStep={activeStep}
        orientation="vertical"
      />
      <Summary />
      <Card style={{ width: "50%", height: "100vh" }}>
        <CardContent className="cardHeader">
          <Typography>Import Government Excel</Typography>
          <CloseIcon />
        </CardContent>

        <CardContent>
          <div
            style={{
              display: "flex",
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
          <Typography
            style={{
              display: "flex",
              justifyContent: "center",
              width: "70%",
              backgroundColor: "#528FF0",
              color: "white",
              height: "6vh",
              borderRadius: "10px",
              marginBottom: "8vh",
            }}
          >
            <BackupIcon style={{ margin: "auto" }} color="white" />
            <Typography style={{ margin: "auto" }}>
              Select File From Your Computer
            </Typography>
            <ArrowForward style={{ margin: "auto" }} color="white" />
          </Typography>
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
    </div>
  );
};

export default ImportExcel;
