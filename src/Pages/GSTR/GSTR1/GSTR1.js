import { Card, CardContent, Typography } from "@mui/material";
import React, { useState } from "react";
import CustomizedSteppers from "../../../Components/Stepper/Stepper1/CustomizedSteppers";

const GSTR1 = () => {
  const [val, setVal] = useState(0);
  function stepStatus(data) {
    setVal(data);
  }
  // console.log("val", val);
  return (
    <Card>
      <CardContent>
        {/* <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Word of the Day
        </Typography> */}

        <CustomizedSteppers status={stepStatus} />
      </CardContent>
    </Card>
  );
};

export default GSTR1;
