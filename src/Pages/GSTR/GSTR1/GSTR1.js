import { Card, CardContent, Typography } from "@mui/material";
import React, { useState } from "react";
import CustomizedSteppers from "../../../Components/Stepper/Stepper1/CustomizedSteppers";
import PrepareData from "./PrepareData/PrepareData";
import ViewInvoices from "./ViewInvoices/ViewInvoices";
import UploadGSTN from "./UploadGSTN/UploadGSTN";

const GSTR1 = () => {
  const [val, setVal] = useState(0);
  function stepStatus(data) {
    setVal(data);
  }
  return (
    <Card>
      <CardContent>
        <CustomizedSteppers status={stepStatus} />
      </CardContent>
      <PrepareData />
      <ViewInvoices />
      <UploadGSTN />
    </Card>
  );
};

export default GSTR1;
