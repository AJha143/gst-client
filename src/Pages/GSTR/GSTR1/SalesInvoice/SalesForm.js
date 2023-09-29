import {
  Checkbox,
  Divider,
  FormControl,
  FormControlLabel,
  FormGroup,
} from "@mui/material";
import React from "react";
import TextFieldComponent from "../../../../customComponent/TextFieldComponent";
import AutoCompleteComponent from "../../../../customComponent/AutoComplete/AutoComplete";
import DropDownComponent from "../../../../customComponent/DropDown/DropDown";
import "./SalesInvoice.scss";
import { useFormik } from "formik";
import * as Yup from "yup";

const SalesForm = () => {
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
  const eCommerceGSTIN = "Ecommerce GSTIN";
  const advanceSetting = "Advanced Settings";

  const options = [
    { value: 10, label: "Ten" },
    { value: 20, label: "Twenty" },
    { value: 30, label: "Thirty" },
  ];

  const formik = useFormik({
    initialValues: {
      invoiceSales: "",
    },
  });

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "left",
          marginTop: "10vh",
          marginBottom: "10vh",
          marginLeft:'5vh',
          marginRight:'5vh'
        }}
      >
        <div>
          <TextFieldComponent label={invoicesales} sx={{ width: 200 }} />
        </div>
        <div>
          <AutoCompleteComponent
            label={invoiceDate}
            options={options}
            initialValue={"Select"}
            width={{ width: 200 }}
          />
        </div>
        <div>
          <TextFieldComponent label={reference} style={{ width: 150 }} />
        </div>
        <div>
          <AutoCompleteComponent label={dueDate} width={{ width: 150 }} />
        </div>
        <div>
          <DropDownComponent
            label={returnMonth}
            options={options}
            value={""}
            outlined={false}
            style={{ width: 150 }}
          />
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "left",
          marginTop: "10vh",
          marginBottom: "10vh",
          marginLeft:'5vh',
          marginRight:'5vh'
          // width: "80%",
        }}
      >
        <AutoCompleteComponent label={returnQuater} width={{ width: 150 }} />
        <TextFieldComponent label={customerName} style={{ width: 150 }} />
        <TextFieldComponent label={gstin} style={{ width: 275 }} />
        <DropDownComponent
          label={placeOfsupply}
          options={options}
          value={""}
          outlined={false}
        />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "5vh",
          marginLeft:'5vh',
          marginRight:'5vh'

          // width: "80%",
        }}
      >
        <div style={{ marginRight: "6vh" }}>
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
      <div style={{ marginLeft: "10.5vh", marginTop: "5vh" }}>
        <FormControl component="fieldset">
          <FormGroup aria-label="position" row>
            <div style={{ marginRight: "5vh" }}>
              <FormControlLabel
                value="top"
                control={<Checkbox />}
                label="Rate is inclusive of Taxes ( MRP Invoices  )"
                labelPlacement="right"
              />
            </div>
            <div>
              <FormControlLabel
                value="top"
                control={<Checkbox />}
                label="Manual Calculation Mode"
                labelPlacement="right"
              />
            </div>
          </FormGroup>
        </FormControl>
        <Divider
          style={{
            marginTop: "5vh",
            marginBottom: "7vh",
            marginLeft: "5vh",
            width: "90%",
          }}
        />
        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            marginBottom: "5vh",
            // width: "100%",
          }}
        >
          <TextFieldComponent label={eCommerceGSTIN} sx={{ width: 300 }} />
          <DropDownComponent
            label={advanceSetting}
            options={options}
            value={""}
            outlined={false}
            sx={{ width: 300 }}
          />
        </div>
      </div>
    </>
  );
};

export default SalesForm;
