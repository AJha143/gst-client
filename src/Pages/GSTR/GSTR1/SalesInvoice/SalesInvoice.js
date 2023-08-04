import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormHelperText,
  Input,
  InputLabel,
  Typography,
} from "@mui/material";
import React from "react";
import TextFieldComponent from "../../../../customComponent/TextFieldComponent";
import AutoCompleteComponent from "../../../../customComponent/AutoComplete/AutoComplete";
import DropDownComponent from "../../../../customComponent/DropDown/DropDown";
import "./SalesInvoice.scss";
import TableHeader from "../../../../customComponent/Table/TableHeader";
import TableBody from "../../../../customComponent/Table/TableBody";

const SalesInvoiceForm = () => {
  const invoicesales = "Invoice Serial Number";
  const invoiceDate = "Invoice Date";
  const reference = "Reference";
  const dueDate = "Due Date";
  const returnMonth = "Return Month";
  const returnQuater = "Return Quater";
  const customerName = "Customer Name";
  const gstin = "GSTIN";
  const placeOfsupply = "Place Of Supply";
  const billingAddress = "Billing Address";
  const shippingAddress = "Shipping Address";
  return (
    <div>
      <div className="headerText">Create Sales Invoice</div>
      <FormControl>
        <div style={{ width: "150vh" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "5vh",
              width: "100%",
            }}
          >
            <div>
              <TextFieldComponent label={invoicesales} />
            </div>
            <div style={{ marginTop: "-21px" }}>
              <AutoCompleteComponent
                label={invoiceDate}
                width={{ width: 223 }}
              />
            </div>
            <div>
              <TextFieldComponent label={reference} />
            </div>
            <div style={{ marginTop: "-21px" }}>
              <AutoCompleteComponent label={dueDate} width={{ width: 223 }} />
            </div>
            {/* <DropDownComponent label={returnMonth} /> */}
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "2.5vh",
            }}
          >
            <div style={{ marginTop: "-21px" }}>
              <AutoCompleteComponent
                label={returnQuater}
                width={{ width: 223 }}
              />
            </div>
            <TextFieldComponent label={customerName} />
            <TextFieldComponent label={gstin} />
            {/* <DropDownComponent label={placeOfsupply} /> */}
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              marginTop: "2.5vh",
              width: "100%",
            }}
          >
            <div>
              <TextFieldComponent
                label={billingAddress}
                multiline
                rows={4}
                sx={{ width: 400 }}
              />
            </div>
            <div>
              <TextFieldComponent
                label={shippingAddress}
                multiline
                rows={4}
                sx={{ width: 400 }}
              />
            </div>
          </div>
          <div>
            <div>
              <FormControl component="fieldset">
                <FormGroup aria-label="position" row>
                  <FormControlLabel
                    value="top"
                    control={<Checkbox />}
                    label="Rate is inclusive of Taxes ( MRP Invoices  )"
                    labelPlacement="right"
                  />
                  <FormControlLabel
                    value="top"
                    control={<Checkbox />}
                    label="Manual Calculation Mode"
                    labelPlacement="right"
                  />
                </FormGroup>
              </FormControl>
            </div>
            <div style={{
              display: "flex",
              justifyContent: "space-between",
              // marginTop: "2.5vh",
              // width: "100%",
            }}>
              <TextFieldComponent
                label={billingAddress}
              />
              <TextFieldComponent
                label={billingAddress}
              />
            </div>
          </div>
        </div>
        <TableHeader />
        <TableBody />
        
      </FormControl>

    </div>
  );
};

export default SalesInvoiceForm;
