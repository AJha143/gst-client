import { Card, CardContent, Typography } from "@mui/material";
import React, { useState } from "react";
import CustomizedSteppers from "../../../Components/Stepper/Stepper1/CustomizedSteppers";
import PrepareData from "./PrepareData/PrepareData";
import ViewInvoices from "./ViewInvoices/ViewInvoices";
import UploadGSTN from "./UploadGSTN/UploadGSTN";
import ImportExcel from "./ImportExcel/ImportExcel";
import SalesInvoice from "./CreateAmendSalesInvoice/SalesInvoice";
import SalesInvoiceForm from "./SalesInvoice/SalesInvoice";

const GSTR1 = () => {
  const [val, setVal] = useState(0); // For future use
  function stepStatus(data) {
    setVal(data);
  }
  return (
    <Card>
      <CardContent>
        <CustomizedSteppers status={stepStatus} />
        {val === 0 ? <PrepareData /> : ""}
      </CardContent>
      {val === 1 ? <ViewInvoices /> : ""}
      {val === 2 ? <UploadGSTN /> : ""}
      {val === 3 ? <ImportExcel /> : ""}
      {val === 4 ? (
        <div>
          <SalesInvoice />
          <SalesInvoiceForm />
        </div>
      ) : (
        ""
      )}
    </Card>
  );
};

export default GSTR1;
