import {
  Checkbox,
  Divider,
  FormControl,
  FormControlLabel,
  FormGroup,
} from "@mui/material";
import React, { useState } from "react";
import TextFieldComponent from "../../../../customComponent/TextFieldComponent";
import AutoCompleteComponent from "../../../../customComponent/AutoComplete/AutoComplete";
import DropDownComponent from "../../../../customComponent/DropDown/DropDown";
import "./SalesInvoice.scss";

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
  const [invoiceVal, setInvoiceVal] = useState(null);
  const [invoiceDateVal, setInvoiceDateVal] = useState(null);
  const [customer, setCustomer] = useState(null);
  const [dateDue, setDateDue] = useState(null);
  const [dateReturn, setReturnDate] = useState("");
  const [pos, setPoc] = useState("");
  const [gst, setGST] = useState(null);
  const [billAdd, setBillAdd] = useState(null);
  const [shipAdd, setShipAdd] = useState(null);
  const [selectedOption, setSelectedOption] = useState("");
  const [checkedMRP, setCheckedMRP] = useState(false);
  const [checkedMCM, setCheckedMCM] = useState(false);
  const [adv, setAdv] = useState("");

  const handleChangeDropDown = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleInvoiceSales = (e) => {
    setInvoiceVal(e.target.value);
  };

  const handleInvoiceDate = (event) => {
    setInvoiceDateVal(event);
  };

  const handleDueDate = (newInputValue) => {
    setDateDue(newInputValue);
  };

  const handleReturnQuarter = (newInputValue) => {
    setReturnDate(newInputValue);
  };

  const handleReferences = (e) => {
    const val = e.target.value;
    setInvoiceVal({ label: val });
  };

  const handleSelectedOption = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleReturnMonth = (event) => {
    setReturnDate(event.target.value);
  };

  const handleCustomerName = (event) => {
    const val = event.target.value;
    setCustomer(val);
  };

  const handleGSTIN = (e) => {
    const val = e.target.value;
    setGST(val);
  };

  const handlePlaceOfSupply = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleBillingAddress = (e) => {
    setBillAdd(e.target.value);
  };

  const handleShippingAddress = (item) => {
    setShipAdd(item.target.value);
  };

  const handleCheckboxMRP = () => {
    setCheckedMRP(!checkedMRP);
  };

  const handleCheckboxMCM = () => {
    setCheckedMCM(!checkedMCM);
  };
  const handleCommerceGSTIN = () => {};
  const handleAdvancedSettings = (event) => {
    setAdv(event.target.value);
  };

  return (
    <div>
      <div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "10vh",
            marginBottom: "10vh",
            width: "100%",
          }}
        >
          <div>
            <TextFieldComponent
              label={invoicesales}
              onChange={(e) => handleInvoiceSales(e)}
            />
          </div>
          <div>
            <AutoCompleteComponent
              label={invoiceDate}
              options={options}
              initialValue={"Select"}
              onInputChange={handleInvoiceDate}
              width={{ width: 223 }}
            />
          </div>
          <div>
            <TextFieldComponent
              label={reference}
              onChange={(e) => handleReferences(e)}
            />
          </div>
          <div>
            <AutoCompleteComponent
              label={dueDate}
              width={{ width: 223 }}
              onInputChange={handleDueDate}
            />
          </div>
          <div>
            <DropDownComponent
              label={returnMonth}
              options={options}
              value={dateReturn}
              onChange={handleReturnMonth}
              outlined={false}
            />
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "5vh",
          }}
        >
          <AutoCompleteComponent
            label={returnQuater}
            width={{ width: 275 }}
            onInputChange={handleReturnQuarter}
          />
          <TextFieldComponent
            label={customerName}
            onChange={(e) => handleCustomerName(e)}
            style={{ width: 275 }}
          />
          <TextFieldComponent
            label={gstin}
            onChange={(e) => handleGSTIN(e)}
            style={{ width: 275 }}
          />
          <DropDownComponent
            label={placeOfsupply}
            options={options}
            value={selectedOption}
            onChange={handlePlaceOfSupply}
            outlined={false}
          />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-start",
            marginTop: "5vh",
            marginLeft: "12vh",
            width: "100%",
          }}
        >
          <div style={{ marginRight: "8vh" }}>
            <TextFieldComponent
              label={billingAddress}
              onChange={(e) => handleBillingAddress(e)}
              multiline
              rows={4}
              sx={{ width: 400 }}
            />
          </div>
          <div>
            <TextFieldComponent
              label={shippingAddress}
              onChange={(e) => handleShippingAddress(e)}
              multiline
              rows={4}
              sx={{ width: 400 }}
            />
          </div>
        </div>
        <div style={{ marginLeft: "12vh", marginTop: "5vh" }}>
          <FormControl component="fieldset">
            <FormGroup aria-label="position" row>
              <div style={{ marginRight: "5vh" }}>
                <FormControlLabel
                  value="top"
                  control={<Checkbox />}
                  label="Rate is inclusive of Taxes ( MRP Invoices  )"
                  labelPlacement="right"
                  onClick={handleCheckboxMRP}
                />
              </div>
              <div>
                <FormControlLabel
                  value="top"
                  control={<Checkbox />}
                  label="Manual Calculation Mode"
                  labelPlacement="right"
                  onClick={handleCheckboxMCM}
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
              justifyContent: "space-between",
              marginBottom: "5vh",
              // width: "100%",
            }}
          >
            <TextFieldComponent
              label={eCommerceGSTIN}
              onChange={(e) => handleCommerceGSTIN(e)}
              sx={{ width: 300 }}
            />
            <DropDownComponent
              label={advanceSetting}
              options={options}
              value={adv}
              onChange={handleAdvancedSettings}
              outlined={false}
              sx={{ width: 300 }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SalesForm;
