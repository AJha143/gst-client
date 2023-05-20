import React, { useState } from "react";
import {
  FormControl,
  // FormLabel,
  // TextField,
  // Button,
  Typography,
  RadioGroup,
  Radio,
  FormControlLabel,
  Checkbox
} from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import IconButton from "@mui/material/IconButton";
import MailOutlineOutlinedIcon from "@mui/icons-material/MailOutlineOutlined";
import HttpsOutlinedIcon from "@mui/icons-material/HttpsOutlined";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import Paper from "@mui/material/Paper";
import TextField from "../TextFieldComponent";
import FormLabel from "../FormLabelComponent";
import Button from "../ButtonComponent";
import "./SignUp.scss";

const SignUp = () => {
  const [formInputValues, setFormInputValues] = useState({
    name: "",
    phoneNumber: "",
    email: "",
    password: "",
    profession: "Individual User"
  });
  const [formInputErr, setFormInputErr] = useState({});
  const [showPassword, setShowPassword] = useState(false);

  const formInputFieldErrMsg = {
    name: "Please Enter Valid Name.",
    phoneNumber: "Please Enter Valid Phone Number.",
    email: "Please Enter Valid Email.",
    password:"Password should be minimum 6 digits & contain one lower, upper, numeric & special Characters."
  };

  const formValidationRegex = {
    name: /^[a-zA-Z\s]+$/,
    phoneNumber: /^\d{10}$/,
    email: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
    password: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/
  };

  const handleOnChange = (event) => {
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
const validateFormValue = ()=>{
  const submitFormValidation = {
  }

  for (let key in formInputValues) {
    const errMsg = formInputValues[key]
    ? formInputFieldErrMsg[key]
    : `${key.toUpperCase()} is Mandatory!!!`;
  const isError = formValidationRegex[key] && !formValidationRegex[key].test(formInputValues[key]);
  submitFormValidation[key] = {errMsg , isError}
  }
  console.log(submitFormValidation)
  setFormInputErr(submitFormValidation)
}

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  // console.log(formInputValues);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const handleOnBlur = (event) => {
    const { name, value } = event.target;
    const errMsg = value
      ? formInputFieldErrMsg[name]
      : `${name.toUpperCase()} is Mandatory!!!`;
    const isError = !formValidationRegex[name].test(value);
    setFormInputErr((prev) => ({
      ...prev,
      [name]: {
        isError,
        errMsg
      }
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

  return (
    <>
      <div className="signup-form">
        <div className="form-container">
          <Paper elevation={3} className="paper-box">
            <div className="form-text">
              <Typography variant="h5">Get Started</Typography>
              <Typography variant="p">
                Already have an account? <a href="/">Log in</a>
              </Typography>
            </div>
            <div className="form-inputs">
              <form onSubmit={handleSubmit}>
                <FormControl>
                  <RadioGroup
                    name="profession"
                    value={formInputValues?.profession}
                    onChange={handleOnChange}
                    row
                    className="radio-labels"
                    error={true}
                    helperText="abcd"
                  >
                    <FormControlLabel
                      value="CA/CMA/CS/Tax Professional"
                      control={<Radio color="default" />}
                      label="CA/CMA/CS/Tax Professional"
                      className="my-radio-label"
                    />
                    <FormControlLabel
                      value="Suvidha Center"
                      control={<Radio color="default" />}
                      label="Suvidha Center"
                      className="my-radio-label"
                    />
                    <FormControlLabel
                      value="Individual User"
                      control={<Radio color="default" />}
                      label="Individual User"
                      className="my-radio-label"
                    />
                  </RadioGroup>

                  <FormLabel required labeltext="Full Name" className="input-label" />
                  <TextField
                    name="name"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <PersonOutlineIcon />
                        </InputAdornment>
                      )
                    }}
                 
                    type="text"
                    className="input-fields"
                    placeholder="Full Name"
                    error={formInputErr["name"]?.isError}
                    value={formInputValues.name || ""}
                    onChange={handleOnChange}
                    onBlur={handleOnBlur}
                    helperText={
                      formInputErr["name"]?.isError
                        ? formInputErr["name"]?.errMsg
                        : ""
                    }
                  />

                  <FormLabel className="input-label"    required  labeltext="Mobile Number"/>
                  <TextField
                    name="phoneNumber"
                    inputProps={{ maxLength: 10 }}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <PhoneOutlinedIcon />
                        </InputAdornment>
                      )
                    }}
                    type="tel"
                 
                    placeholder="Phone Number"
                    className="input-fields"
                    error={formInputErr["phoneNumber"]?.isError}
                    // className={`input-fields ${
                    //   !numberValid && formSubmitted ? "invalid" : ""
                    // }`}
                    value={formInputValues.phoneNumber || ""}
                    onChange={handleOnChange}
                    onBlur={handleOnBlur}
                    helperText={
                      formInputErr["phoneNumber"]?.isError
                        ? formInputErr["phoneNumber"]?.errMsg
                        : ""
                    }
                  />
                  <FormLabel required className="input-label" labeltext="Email Address"/>
                  <TextField
                    name="email"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <MailOutlineOutlinedIcon />
                        </InputAdornment>
                      )
                    }}
                
                    type="email"
                    className="input-fields"
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
                  <FormLabel required className="input-label" labeltext="Password"/>
                  <TextField
                    name="password"
                   
                    className="input-fields"
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
                      )
                    }}
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    error={formInputErr["password"]?.isError}
                    value={formInputValues.password || ""}
                    onChange={handleOnChange}
                    onBlur={handleOnBlur}
                    helperText={
                      formInputErr["password"]?.isError
                        ? formInputErr["password"]?.errMsg
                        : ""
                    }
                  />
                  <div className="checkbox-container">
                    <FormControlLabel
                      control={<Checkbox />}
                      label={
                        <Typography variant="p">
                          I accept the terms of service and privacy policy.
                        </Typography>
                      }
                      className="checkbox-label"
                    />
                  </div>

                  <Button
                    type="submit"
                    variant="contained"
                    className="signup-button"
                    buttontext="Sign up"
                 />
                    
                  
                </FormControl>
              </form>
            </div>
          </Paper>
        </div>
      </div>
    </>
  );
};

export default SignUp;