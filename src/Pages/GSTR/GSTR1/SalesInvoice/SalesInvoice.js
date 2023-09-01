import { FormControl } from "@mui/material";
import React from "react";
import "./SalesInvoice.scss";
import TableHeader from "../../../../customComponent/Table/TableHeader";
import TableBody from "../../../../customComponent/Table/TableBody";
import SalesForm from "./SalesForm";

const SalesInvoiceForm = () => {
  return (
    <div>
      <div className="headerText">Create Sales Invoice</div>
      <FormControl>
        <SalesForm />
        <TableHeader />
        <TableBody />
      </FormControl>
    </div>
  );
};

export default SalesInvoiceForm;
