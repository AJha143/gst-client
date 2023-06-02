import React, { useState } from "react";
import DialogComponent from "../../customComponent/DialogComponent";
import { Grid, Typography } from "@mui/material";
import FormLabelComponent from "../../customComponent/FormLabelComponent";
import TextFieldComponent from "../../customComponent/TextFieldComponent";
import ButtonComponent from "../../customComponent/ButtonComponent";
import Lock from "../../Images/lock.png";
import CloseIcon from '@mui/icons-material/Close';
import "./ForgetPassword.scss";
import { formValidationRegex } from "../ConstantData";
import ErrorBoundary from "../../customComponent/ErrorBoundary";


const ForgetPassword = (props) => {
  const { onClose, open } = props;
  const [formIputValue, setFormInputValue] = useState("");
  const [formErr, setFormErr] = useState("");

  const handleClose = () => {
    onClose(!open);
  };

  const handleInputChange = (value) => {
    setFormErr("")
    setFormInputValue(value)
  };

const formValidationHandler = (value) =>{
  if(!value){
    setFormErr("Please enter registered email address !!")
  }else if(!formValidationRegex.email.test(value))
    {
      setFormErr("Please enter valid email address !!")
    }else{
      setFormErr("")
    }
}

  const handleOnBlur = (value) => {
    formValidationHandler(value)
  }


  return (
    <ErrorBoundary>
    <DialogComponent
      onClose={handleClose}
      aria-labelledby="Add Clients Form"
      open={open}
      maxWidth="sm"
      disableEscapeKeyDown
      disableBackdropClick
      classes={{ paper: "customForgetPwdPaper" }}
    >
      <Grid container classes={{ root: "forgetPwdContainer" }} spacing={2}>
        <Grid item xs={12} className="title">
          <h2> Forget Password</h2>
          <CloseIcon  onClick={handleClose}/>
        </Grid>
        <Grid item xs={12} classes={{ root: "imgContainer" }}>
       
          <img src={Lock} alt="lock" />
          <Typography variant="p">
            Please enter you registered email address and press submit button
            you will get reset password link shortly
          </Typography>
        </Grid>
        
            <Grid item xs={12}>
              <FormLabelComponent labeltext="Email Address" required />
              <TextFieldComponent
                error={formErr}
                type="email"
                value={formIputValue}
              className="forgotPwdTextField"
                variant="outlined"
                onBlur={(event)=>handleOnBlur(event?.target?.value)}
                onChange={ (event) => handleInputChange(event?.target?.value)}   
                helperText={formErr ? formErr : ""}
              />
            </Grid>
    

        <Grid className="BtnContainergrid" item xs={12}>
          <div className="btnContainer">
            <ButtonComponent
              classes={{ root: "cancelBtn" }}
              variant="contained"
              color="secondary"
              onClick={handleClose}
              buttontext="CANCEL"
            />

            <ButtonComponent
              // className="customBtn2"
              classes={{root : "submitBtn"}}
              variant="contained"
              buttontext="SUBMIT"
              color="primary"
            />
          </div>
        </Grid>
      </Grid>
    </DialogComponent>
    </ErrorBoundary>
  );
};

export default ForgetPassword;
