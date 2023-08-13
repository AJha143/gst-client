import { Card, CardContent, Typography } from "@mui/material";
import React, { useState } from "react";
import "./SalesInvoice.scss";
import CloseIcon from "@mui/icons-material/Close";
import DropDownComponent from "../../../../customComponent/DropDown/DropDown";
import ButtonComponent from "../../../../customComponent/ButtonComponent";

const SalesInvoice = (props) => {
  const [selectedOption, setSelectedOption] = useState("");

  const options = [
    { value: 10, label: "Ten" },
    { value: 20, label: "Twenty" },
    { value: 30, label: "Thirty" },
  ];

  const handleAddInvoice = () => {
    props.status(true)
  };
  const handleChangeDropDown = (event) => {
    setSelectedOption(event.target.value);
  };
  return (
    <Card style={{ width: "60%", height: "50vh" }}>
      <CardContent className="cardHeader">
        <Typography>Create / Amend Sales Invoices</Typography>
        <CloseIcon />
      </CardContent>

      <CardContent>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "4vh",
          }}
        >
          <div>
            <DropDownComponent
              options={options}
              value={selectedOption}
              onChange={handleChangeDropDown}
              label="Select"
              outlined={false}
              sx={{ width: "220px" }}
            />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              width: "55%",
            }}
          >
            <ButtonComponent buttontext="Amend Invoice" variant="contained" />
            <Typography style={{ marginTop: "2.5vh" }}>OR</Typography>
            <ButtonComponent
              buttontext="Add Invoice"
              variant="outlined"
              onClick={handleAddInvoice}
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default SalesInvoice;
