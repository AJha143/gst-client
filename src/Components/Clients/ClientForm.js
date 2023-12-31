import React, {useState} from "react";
import Button from "../../customComponent/ButtonComponent";
import FormLabelComponent from "../../customComponent/FormLabelComponent";
import ErrorBoundary from "../../customComponent/ErrorBoundary";
import CloseIcon from "@mui/icons-material/Close";
import { Dialog, TextField, Grid } from "@mui/material";
import "./ClientForm.scss";
import {
  formValidationRegex,
  formInputFieldErrMsg,
  inputFieldDetails,
} from "../ConstantData";
import axios from "../../service/Service"
import { useSelector } from "react-redux";
import Swal from "sweetalert2";

export default function ClientForm({setUpdateClientList}) {

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    // onClose(!open);
    setFormInputValue({});
    setFormErr({})
  };

  
  const [formInputValue, setFormInputValue] = React.useState(
    {
      businessName: "",
      gstn:"",
     GSTNUsername:"",
      address:""
    }
  );
  const [formErr, setFormErr] = React.useState({});
   

  const handleInputChange = (value, fieldName) => {
    setFormErr((prev) => ({
      ...prev,
      [fieldName]: {
        error: !value,
        msg: "Enter Required value",
      },
    }));
    setFormInputValue((prev) => ({
      ...prev,
      [fieldName]: value,
    }));
  };

  const handleOnBlur = (value, fieldName) => {
    
    const errMsg = value
      ? formInputFieldErrMsg[fieldName]
      : `${fieldName?.toUpperCase()} is Mandatory!!!`;
    const isError = value ? !formValidationRegex[fieldName]?.test(value) : true;
    setFormErr((prev) => ({
      ...prev,
      [fieldName]: {
        isError,
        errMsg,
      },

    }));
  };

  const userId =   useSelector((state)=>state?.login?.loginDetails?.user?.id) 
  const submitHandler = (event) => {
    event.preventDefault();
   
    const submitFormValidation = {};

    for (let key in formInputValue) {
      const errMsg = formInputValue[key]     
        ? formInputFieldErrMsg[key]
        : `${key.toUpperCase()} is Mandatory!!!`;
      const isError =
        formValidationRegex[key] &&
        !formValidationRegex[key].test(formInputValue[key]);
      submitFormValidation[key] = { errMsg, isError };
    }
    setFormErr(submitFormValidation);

    if (!Object.keys(formInputValue).length) return;

    for (let key in formInputValue) {
      if (!formInputValue || submitFormValidation[key]?.isError) {
        return;
      }
    }

    axios({
      url: "/user/createClient",
      method:"post",
      params:{userId},
      data:
        {
          "address":formInputValue.address,
          "businessName":formInputValue.businessName,
          "gstIn":formInputValue.gstn,
          "gstUserName":formInputValue.GSTNUsername
        }
    
  }).then((res)=>{
    console.log(res);
    setOpen(false);
    Swal.fire({
      title: "Client info saved!",
    }).then((result)=>{
      setUpdateClientList(true);
    })

  }).catch((error)=>{
    console.log(error)
  })

  };

  return (
    <ErrorBoundary>
      <Button variant="contained" color="primary" onClick={handleClickOpen} buttontext=" Add Clients" className="addClientBtn"/>
      <Dialog
      onClose={handleClose}
      aria-labelledby="Add Clients Form"
      open={open}
      maxWidth="sm"
      disableEscapeKeyDown
      disableBackdropClick
      classes={{ paper: "customAddClientPaper" }}
    >
      <Grid container classes={{ root: "containerClass" }} spacing={2}>
        <Grid item xs={12} className="clientTitle">
          <h2> Add Clients</h2>
          <CloseIcon onClick={handleClose} />
        </Grid>

        {inputFieldDetails.map(
          ({ type, fieldName, col, label, variant, required, classes }) => (
            <Grid item xs={col}>
              <FormLabelComponent
                labeltext={label}
                variant={variant}
                required={required}
              />
              <TextField
                error={formErr[fieldName]?.isError}
                type={type}
                value={formInputValue[fieldName] || ""}
                classes={classes}
                variant={variant}
                onBlur={(event) => handleOnBlur(event.target.value, fieldName)}
                onChange={(event) =>
                  handleInputChange(event?.target?.value, fieldName)
                }
                helperText={
                  formErr[fieldName]?.isError ? formErr[fieldName]?.errMsg : ""
                }
              />
            </Grid>
          )
        )}
        <Grid className="actionBtngrid" item xs={12}>
          <div className="actionBtn">
            <Button
              className="customBtn"
              variant="contained"
              color="secondary"
              onClick={handleClose}
              buttontext="CANCEL"
            />

            <Button
              className="customBtn"
              variant="contained"
              buttontext="SUBMIT"
              color="primary"
              onClick={submitHandler}
            />
          </div>
        </Grid>
      </Grid>
    </Dialog>
      </ErrorBoundary>
  );
}
