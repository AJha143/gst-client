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
import TableHeader from "../../../../customComponent/Table/TableHeader";
import TableBody from "../../../../customComponent/Table/TableBody";
import ButtonComponent from "../../../../customComponent/ButtonComponent";

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

  const options = [
    { value: 10, label: "Ten" },
    { value: 20, label: "Twenty" },
    { value: 30, label: "Thirty" },
  ];
  const [selectedOption, setSelectedOption] = useState("");

  const handleChangeDropDown = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div>
      <div className="headerText">Create Sales Invoice</div>
      <FormControl>
        <div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "10vh",
              // marginBottom:'10vh',
              width: "100%",
            }}
          >
            <div>
              <TextFieldComponent label={invoicesales} />
            </div>
            <div>
              <AutoCompleteComponent
                label={invoiceDate}
                width={{ width: 223 }}
              />
            </div>
            <div>
              <TextFieldComponent label={reference} />
            </div>
            <div>
              <AutoCompleteComponent label={dueDate} width={{ width: 223 }} />
            </div>
            <div>
              <DropDownComponent
                options={options}
                value={selectedOption}
                onChange={handleChangeDropDown}
                label={returnMonth}
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
            />
            <TextFieldComponent label={customerName} style={{ width: 275 }} />
            <TextFieldComponent label={gstin} style={{ width: 275 }} />
            <DropDownComponent
              options={options}
              value={selectedOption}
              onChange={handleChangeDropDown}
              label="Place Of Supply"
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
          <div style={{ marginLeft: "12vh", marginTop: "5vh" }}>
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
                justifyContent: "space-between",
                marginBottom: "5vh",
                // width: "100%",
              }}
            >
              <TextFieldComponent label={billingAddress} sx={{ width: 300 }} />
              <TextFieldComponent label={billingAddress} sx={{ width: 300 }} />
            </div>
          </div>
        </div>
        <TableHeader />
        <TableBody />
      </FormControl>
      <div style={{display:'flex',justifyContent:'flex-end'}}> 
        <FormControl component="fieldset">
          <FormGroup aria-label="position" row>
            <div style={{ marginRight: "5vh" }}>
              <FormControlLabel
                value="top"
                control={<Checkbox />}
                label="RoundOff Total"
                labelPlacement="right"
              />
            </div>
            <div style={{ marginTop: "1.5vh" }}>
              Grand Total: <span>$ 256</span>
            </div>
          </FormGroup>
        </FormControl>
      </div>
      <div style={{ display: "flex" ,justifyContent:'space-around'}}>
        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est varius
          diam sollicitudin posuere nec laoreet. Nibh dictum feugiat lectus eget
          maecenas laoreet imperdiet orci.
        </div>
        <div style={{display:'flex'}}>
          <div style={{marginLeft:'5vh'}}>
            <ButtonComponent buttontext="Save Invoice" variant="contained" sx={{width:'175px'}}/>
          </div>
          <div style={{marginLeft:'10vh'}}>
            <ButtonComponent buttontext="Cancel" variant="outlined" sx={{width:'175px'}}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SalesInvoiceForm;
