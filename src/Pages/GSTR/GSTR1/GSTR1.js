import { Card, CardContent } from "@mui/material";
import React, { useState } from "react";
import CustomizedSteppers from "../../../Components/Stepper/Stepper1/CustomizedSteppers";
import PrepareData from "./PrepareData/PrepareData";
import ViewInvoices from "./ViewInvoices/ViewInvoices";
import UploadGSTN from "./UploadGSTN/UploadGSTN";
import ImportExcel from "./ImportExcel/ImportExcel";
import SalesInvoice from "./CreateAmendSalesInvoice/SalesInvoice";
import SalesInvoiceForm from "./SalesInvoice/SalesInvoice";
import "./GSTR1.scss";
import ErrorBoundary from "../../../customComponent/ErrorBoundary";

const GSTR1 = () => {
  const [val, setVal] = useState(0);
  const [showForm, setShowForm] = useState(false);
  const [renderValue, setRenderValue] = useState(0);

  function stepStatus(data) {
    setVal(data);
  }

  function showFormHandle(data) {
    setShowForm(data);
  }

  function valueStatus(data) {
    setRenderValue(data);
  }

  return (
    <ErrorBoundary>
      <Card className="gstr1-card">
        <CardContent>
          <CustomizedSteppers status={val} />
        </CardContent>

        {val === 0 ? <PrepareData status={stepStatus} /> : ""}
        {val === 1 ? <ViewInvoices status={stepStatus} /> : ""}
        {val === 2 ? <UploadGSTN status={stepStatus} /> : ""}
        {val === 3 ? <ImportExcel status={stepStatus} /> : ""}
        {val === 4 ? (
          <div>
            {!showForm ? (
              <SalesInvoice status={showFormHandle} />
            ) : (
              <SalesInvoiceForm />
            )}
          </div>
        ) : (
          ""
        )}
      </Card>
    </ErrorBoundary>
  );
};

export default GSTR1;
