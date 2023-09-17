import React, { useState } from "react";
import DialogComponent from "../../customComponent/DialogComponent";
import { Grid, Typography } from "@mui/material";
import FormLabelComponent from "../../customComponent/FormLabelComponent";
import TextFieldComponent from "../../customComponent/TextFieldComponent";
import ButtonComponent from "../../customComponent/ButtonComponent";
import Lock from "../../Images/lock.png";
import CloseIcon from '@mui/icons-material/Close';
import "./ForgetPassword.scss";
import ErrorBoundary from "../../customComponent/ErrorBoundary";
import { useFormik, } from "formik";
import * as Yup from 'yup';


const ForgetPassword = (props) => {
  const { onClose, open } = props;


  const handleClose = () => {
    onClose(!open);
    formik.resetForm();
    };



  const formik = useFormik({
    initialValues: {
    
      email: '',
 
    },
    validationSchema: Yup.object({
   
      email: Yup.string().email('Invalid email address !!').required('EMAIL is Mandatory!!!*'),


    }),
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });
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
    
                type="email"
         
              className={"forgotPwdTextField"}
                variant="outlined"
              
            
                {...formik.getFieldProps('email')}
              />
              {formik.touched.email && formik.errors.email ? (
        <div className="errorTextStyle">{formik.errors.email}</div>
      ) : null}
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
