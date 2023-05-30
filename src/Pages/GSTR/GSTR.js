import React from "react";
import CustomizedSteppers from "../../Components/Stepper/Stepper";

const GSTR = () => {
  const activeStep = 1;
  const steps = [
    "Select campaign settings",
    "Create an ad group",
    "Create an ad",
    "boi",
  ];
  
  return (
    <div>
      GSTR
      <CustomizedSteppers steps={steps} activeStep={activeStep} />
      <CustomizedSteppers
        steps={steps}
        activeStep={activeStep}
        orientation="vertical"
      />
    </div>
  );
};

export default GSTR;
