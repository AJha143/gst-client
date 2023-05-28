import React from "react";
import { Dialog, TextField, Grid } from "@material-ui/core";
import ButtonComponent from "../../ReuseComponent/ButtonComponent";
import FormLabelComponent from "../../ReuseComponent/FormLabelComponent";
import CloseIcon from "@mui/icons-material/Close";
import {
  formValidationRegex,
  formInputFieldErrMsg,
  inputFieldDetails,
} from "../../Components/ConstantData";

import "./ClientForm.scss";

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

  return (
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
            />
          </div>
        </Grid>
      </Grid>
    </Dialog>
  );
}
