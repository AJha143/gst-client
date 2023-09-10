import { Card, CardContent, Typography } from "@mui/material";
import React, { useState } from "react";
import "./SalesInvoice.scss";
import CloseIcon from "@mui/icons-material/Close";
import DropDownComponent from "../../../../customComponent/DropDown/DropDown";
import ButtonComponent from "../../../../customComponent/ButtonComponent";
import DialogComponent from "../../../../customComponent/DialogComponent";

const SalesInvoice = (props) => {
  const {renderStatus,status} = props
  const [selectedOption, setSelectedOption] = useState("");
  const [open,setOpen] = useState(true) 
  const handleClose = ()=>{
    setOpen(false)
    renderStatus(3)
  }

  const options = [
    { value: 10, label: "Ten" },
    { value: 20, label: "Twenty" },
    { value: 30, label: "Thirty" },
  ];

  const handleAddInvoice = () => {
    status(true)
  };
  const handleChangeDropDown = (event) => {
    setSelectedOption(event.target.value);
  };
  return (
    <DialogComponent  open={open}
    onClose={handleClose}
    maxWidth="md">
    <Card style={{ width: "100%", height: "50vh" }}>
      <CardContent className="cardHeader">
        <Typography>Create / Amend Sales Invoices</Typography>
        <CloseIcon onClick={handleClose} />
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
              sx={{ width: "20vw" }}
            />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              width: "50%",
            }}
          >
            <ButtonComponent buttontext="Amend Invoice" variant="contained" />
            <Typography style={{ margin:"2.5vh"}}variant="h6">OR</Typography>
            <ButtonComponent
              buttontext="Add Invoice"
              variant="outlined"
              onClick={handleAddInvoice}
            />
          </div>
        </div>
      </CardContent>
    </Card>
    </DialogComponent>
  );
};

export default SalesInvoice;
