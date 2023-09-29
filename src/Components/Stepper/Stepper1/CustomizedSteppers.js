import React from "react";
import { styled } from "@mui/system";
import Stack from "@mui/material/Stack";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepConnector, {
  stepConnectorClasses,
} from "@mui/material/StepConnector";
import ColorlibStepIcon from "./ColorlibStepIcon";
import "./CSstyle.scss";

const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 35,
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundImage:
        "linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)",
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundImage:
        "linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)",
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    height: 3,
    border: 0,
    backgroundColor:
      theme.palette.mode === "dark" ? theme.palette.grey[800] : "#eaeaf0",
    borderRadius: 1,
  },
}));

const steps = [
  "Prepare Data",
  "View Invoices",
  "Upload To GSTN",
  "View Summary",
  "File GSTR-1",
];

export default function CustomizedSteppers(props) {
  return (
    <Stack spacing={4}>
      <Stepper
        alternativeLabel
        activeStep={props.status}
        connector={<ColorlibConnector />}
      >
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel StepIconComponent={ColorlibStepIcon}>
              <h2 className="stepper-label">{label}</h2>
              <p className="subLabel">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </p>
            </StepLabel>
          </Step>
        ))}
      </Stepper>
    </Stack>
  );
}
