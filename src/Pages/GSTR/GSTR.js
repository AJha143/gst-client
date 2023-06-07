import React from "react";
import CustomizedSteppers2 from "../../Components/Stepper/Stepper2";

const GSTR = () => {
  const activeStep = 0;
  const steps = [
    "Select campaign settings",
    "Create an ad group",
    "Create an ad",
    "boi",
  ];
  
  return (
    <div>
      GSTR
      {/* <CustomizedSteppers steps={steps} activeStep={activeStep} /> */}
      <CustomizedSteppers2
        steps={steps}
        activeStep={activeStep}
        orientation="vertical"
      />
    </div>
  );
};

export default GSTR;
