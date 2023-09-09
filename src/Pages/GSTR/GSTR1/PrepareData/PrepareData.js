import React, { useState } from "react";
import "./PrepareData.scss";
import ReturnPeriod from "../ReturnPeriod/ReturnPeriod";
import UploadGSTN from "../UploadGSTN/UploadGSTN";
import ImportExcel from "../ImportExcel/ImportExcel";
import SalesInvoice from "../CreateAmendSalesInvoice/SalesInvoice";
import SelectClient from "../SelectClient/SelectClient";
import SalesInvoiceForm from "../SalesInvoice/SalesInvoice";

const PrepareData = () => {
  const [renderValue, setRenderValue] = useState(0); 
  const [showForm, setShowForm] = useState(false);

  function valueStatus(data) {
    setRenderValue(data);
  }

  function showFormHandle(data) {
    setShowForm(data);
  }

 
  return (
<>
{renderValue === 0 ? <SelectClient  renderStatus={valueStatus}/>:""}
{renderValue === 1 ? <ReturnPeriod  renderStatus={valueStatus}/>:""}
{renderValue === 2 ? <UploadGSTN renderStatus={valueStatus}/>: ""}
{renderValue === 3 ? <ImportExcel renderStatus={valueStatus}/>:"" }

{renderValue === 4 ? (
        <div>
          {!showForm ? (
            <SalesInvoice status={showFormHandle} renderStatus={valueStatus}/>
          ) : (
            <SalesInvoiceForm />
          )}
        </div>
      ) : (
        ""
      )}

</>
  );
};

export default PrepareData;
