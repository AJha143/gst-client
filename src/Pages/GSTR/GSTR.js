import React from "react";
import CustomizedSteppers2 from "../../Components/Stepper/Stepper2";

const GSTR = () => {
  const activeStep = 0;
  const steps = ["Step 1", "Step 2", "Step 3"];

  return (
    <div>
      GSTR
      <CustomizedSteppers2
        steps={steps}
        activeStep={activeStep}
        orientation="vertical"
      />
    </div>
  );
};

export default GSTR;
