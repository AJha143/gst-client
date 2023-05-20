import React, { useState } from "react";
import {
 
  FormControl,
  FormLabel,
  IconButton,
  InputAdornment,
  Paper,
  // TextField,
  Typography,
} from "@mui/material";
import "./LoginPage.scss";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import MailOutlineOutlinedIcon from "@mui/icons-material/MailOutlineOutlined";
import HttpsOutlinedIcon from "@mui/icons-material/HttpsOutlined";
import Button from "../ButtonComponent";
import TextField from "../TextFieldComponent";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  
 

  const [formInputValues, setFormInputValues] = useState({
    email: "",
    password: "",
  });
  const [formInputErr, setFormInputErr] = useState({});

  const formInputFieldErrMsg = {
    email: "Please Enter Valid Email.",
  };

  const formValidationRegex = {
    email: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
  };


  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleOnBlur = (event) => {
    const { name, value } = event.target;
    const errMsg = value 
      ? formInputFieldErrMsg[name] || `${name.toUpperCase()} is Mandatory!!!`
      : `${name.toUpperCase()} is Mandatory!!!`;
    const isError = value ? formValidationRegex[name] &&  !formValidationRegex[name].test(value) : !value;
    setFormInputErr((prev) => ({
      ...prev,
      [name]: {
        isError,
        errMsg
      }
    }));
  };

  const validateFormValue = ()=>{
    const submitFormValidation = {
    }
  
    for (let key in formInputValues) {
      const errMsg = formInputValues[key]
      ? formInputFieldErrMsg[key]
      : `${key.toUpperCase()} is Mandatory!!!`;
    const isError = formInputValues[key]  ? formValidationRegex[key] &&  !formValidationRegex[key].test(formInputValues[key]) : !formInputValues[key];
    submitFormValidation[key] = {errMsg , isError}
    }
    console.log(submitFormValidation)
    setFormInputErr(submitFormValidation)
  }
  

  const handleOnChange = (event) => {
  console.log(event)
    const { value, name } = event.target || {};
    setFormInputErr((prev) => ({
      ...prev,
      [name]: {}
    }));
    setFormInputValues((prev) => ({
      ...prev,
      [name]: value
    }));
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log("hello");
    validateFormValue();
    if (!Object.keys(formInputValues).length) return;

    for (let key in formInputValues) {
      // console.log(key, formInputFieldErrMsg[key]);
      if (!formInputValues || formInputErr[key]?.isError) {
        // console.log("Validation Failed !!!!");
        return;
      }
    }
    // console.log("M HERE");
  };
  // const handleEmailChange = (event) => {
  //   const { value } = event.target;
  //   setEmail(value);
  // };

  // const handlePasswordChange = (event) => {
  //   const { value } = event.target;
  //   setPassword(value);
  // };

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   const isEmailValid = validateEmail(email);
  //   const isPasswordValid = validatePassword(password);
  //   setEmailValid(isEmailValid);
  //   setPasswordValid(isPasswordValid);
  //   setFormSubmitted(true);

  //   if (isEmailValid && isPasswordValid) {
  //     // Additional logic for successful form submission
  //     setEmail("");
  //     setPassword("");
  //   }
  // };





  return (
    <div className="login-form">
      <Paper elevation={3} className="login-paper">
        <div className="form-text">
          <Typography variant="h5">Log In</Typography>
        </div>
        <form onSubmit={handleSubmit}>
          <FormControl>
            <FormLabel className="input-label" required>Email Address</FormLabel>
            
            <TextField
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <MailOutlineOutlinedIcon />
                  </InputAdornment>
                ),
              }}
              className="loginform-input"
              type="email"
              name="email"
              placeholder="Email Address"
              error={formInputErr["email"]?.isError}
                    value={formInputValues.email || ""}
              onChange={handleOnChange}
          
              onBlur={handleOnBlur}
              helperText={
                      formInputErr["email"]?.isError
                        ? formInputErr["email"]?.errMsg
                        : ""
                    }
            />
      

            <FormLabel className="input-label" required>Password</FormLabel>
            <TextField
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <HttpsOutlinedIcon />
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              className="loginform-input"
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              name="password"
              error={formInputErr["password"]?.isError}
                    value={formInputValues.password || ""}
                    onChange={handleOnChange}
                    onBlur={handleOnBlur}
                    
                    helperText={
                      formInputErr["password"]?.isError
                        ? formInputErr["password"]?.errMsg ||
                        "password is mandatory"
                        : ""
                    }
            />
        
          

            <Typography variant="p" className="forget-password">
              Forgot password?
            </Typography>
            <Button
              className="loginform-button"
              variant="contained"
              type="submit"
              buttontext="Log in"
             
            />
            <Typography variant="p" className="switch-signup">
              Don't have an account? Sign in.
            </Typography>
          </FormControl>
        </form>
      </Paper>
    </div>
  );
};

export default LoginPage;
