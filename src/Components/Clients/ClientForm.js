import React from "react";
import { Dialog, TextField, Grid } from "@mui/material";
import ButtonComponent from "../../customComponent/ButtonComponent";
import FormLabelComponent from "../../customComponent/FormLabelComponent";
import CloseIcon from "@mui/icons-material/Close";
import {
  formValidationRegex,
  formInputFieldErrMsg,
  inputFieldDetails,
} from "../ConstantData";

import "./ClientForm.scss";
import ErrorBoundary from "../../customComponent/ErrorBoundary";
import axios from "../../service/Service"

export default function SimpleDialog(props) {
  const { onClose, open } = props;
  const [formIputValue, setFormInputValue] = React.useState({});
  const [formErr, setFormErr] = React.useState({});

  const handleClose = () => {
    onClose(!open);
  };

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
    const isError = !formValidationRegex[fieldName]?.test(value);
    setFormErr((prev) => ({
      ...prev,
      [fieldName]: {
        isError,
        errMsg,
      },
    }));
  };
  const submitHandler = (event) => {
    event.preventDefault();

    axios({
        url: "/user/createClient?userId=1",
        method:"post",
        data:{
            "address":"Aashiana ranchi",
            "businessName":"kreeda ranchi",
            "gstIn":"33EJPPS8875D1AK",
            "gstUserName":"TN_NT1.6456"
        }
    }).then((res)=>{
      console.log(res);
    }).catch((error)=>{
      console.log(error)
    })
  }
  return (
    <ErrorBoundary>
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
                value={formIputValue[fieldName] || ""}
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
            <ButtonComponent
              className="customBtn"
              variant="contained"
              color="secondary"
              onClick={handleClose}
              buttontext="CANCEL"
            />

            <ButtonComponent
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
