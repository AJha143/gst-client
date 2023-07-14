import { Card, CardContent, Typography } from "@mui/material";
import React, { useState } from "react";
import CustomizedSteppers from "../../../Components/Stepper/Stepper1/CustomizedSteppers";
import PrepareData from "./PrepareData/PrepareData";
import ViewInvoices from "./ViewInvoices/ViewInvoices";
import UploadGSTN from "./UploadGSTN/UploadGSTN";
import ImportExcel from "./ImportExcel/ImportExcel";
import SalesInvoice from "./CreateAmendSalesInvoice/SalesInvoice";

const GSTR1 = () => {
  const [val, setVal] = useState(0); // For future use
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
      <ImportExcel />
      <SalesInvoice />
    </Card>
  );
};

export default GSTR1;
