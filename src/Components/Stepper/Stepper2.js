import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";


const steps = [
  {
    label: "Step 1",
    description: `Next button will enable first you successfully generate the summary.`,
  },
  {
    label: "Step 2",
    description:
      "An ad group contains one or more ads which target a shared set of keywords.",
  },
  {
    label: "Step 3",
    description: ``,
  },
];

export default function VerticalLinearStepper() {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleFinish = () => {
    setActiveStep(steps.length);
  };

  const topLabel = [
    "Verify if your government generated summary looks accurate.",
    "Submit GSTR1 (It is non reversible so please verify GSTR1 summary before submitting.)",
    "File GSTR 1",
  ];


  return (
    <Box sx={{ maxWidth: 800 }}>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((step, index) => (
          <Step key={step.label}>
            <StepLabel
            >
              {step.label}
            </StepLabel>
            <StepContent>
              {index === activeStep && (
                <Box>
                  <Typography>{topLabel[index]}</Typography>
                  {index === 0 ? (
                    <Button variant="outlined">Generate Summary</Button>
                  ) : index === 1 ? (
                    <Button variant="outlined">Submit GSTR 1</Button>
                  ) : (
                    <>
                      <Button variant="outlined">File with EVC</Button>
                      <Button variant="outlined">File with DSC</Button>
                    </>
                  )}
                
                </Box>
              )}
              <Typography>{step.description}</Typography>
              <Box sx={{ mb: 2 }}>
                <div>
                  {index === steps.length - 1 ? (
                    <> 
                      <Button
                        variant="contained"
                        onClick={handleFinish}
                        sx={{ mt: 1, mr: 1 }}
                      >
                        Finish
                      </Button> 
                      {index === 2 ? (
                        <Button
                          variant="contained"
                          onClick={handleBack}
                          sx={{ mt: 1, mr: 1 }}
                        >
                          Back
                        </Button>
                      ) : (
                        ""
                      )}
                    </>
                  ) : (
                    <React.Fragment>
                      <Button
                        variant="contained"
                        onClick={handleNext}
                        sx={{ mt: 1, mr: 1 }}
                      >
                        {"Next"}
                      </Button>
                      {index !== 0 && (
                        <Button
                          variant="contained"
                          onClick={handleBack}
                          sx={{ mt: 1, mr: 1 }}
                        >
                          Back
                        </Button>
                      )}
                    </React.Fragment>
                  )}
                </div>
              </Box>
            </StepContent>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
}
