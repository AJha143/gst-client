import React, { useState } from "react";
import {
  FormControl,
  Typography,
  RadioGroup,
  Radio,
  FormControlLabel,
  Checkbox,
  Grid,
} from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import IconButton from "@mui/material/IconButton";
import MailOutlineOutlinedIcon from "@mui/icons-material/MailOutlineOutlined";
import HttpsOutlinedIcon from "@mui/icons-material/HttpsOutlined";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import TextField from "../../customComponent/TextFieldComponent";
import FormLabel from "../../customComponent/FormLabelComponent";
import Button from "../../customComponent/ButtonComponent";
import SignUpImg from "../../Images/signup_new.jpg";
import "./SignUp.scss";
import { formInputFieldErrMsg, formValidationRegex } from "../ConstantData";

import SnackbarComponent from "../../customComponent/SnackbarComponent";
import ErrorBoundary from "../../customComponent/ErrorBoundary";
import { Link } from "react-router-dom";
import axios from "../../service/Service";
import Spinner from "../../customComponent/spinner/Spinner";
import { toggleSpinner } from "../../reducers/spinnerReducer";
import { useSelector, useDispatch } from "react-redux";

const SignUp = () => {
  const [formInputValues, setFormInputValues] = useState({
    name: "",
    phoneNumber: "",
    email: "",
    password: "",
    profession: "Individual User",
  });
  const [formInputErr, setFormInputErr] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [agreement, setAgreement] = useState(false);

  const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => {
    console.log(state);
    return state.spinner;
  });

  function checkChangeHandler(e) {
    setAgreement(e.target.checked);
  }

  const handleOnChange = (event) => {
    const { value, name } = event.target || {};
    setFormInputErr((prev) => ({
      ...prev,
      [name]: {},
    }));
    setFormInputValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleClickShowPassword = () => setShowPassword((show) => !show);
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
        errMsg,
      },
    }));
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    setOpenSnack(!agreement);

    const submitFormValidation = {};

    for (let key in formInputValues) {
      const errMsg = formInputValues[key]
        ? formInputFieldErrMsg[key]
        : `${key.toUpperCase()} is Mandatory!!!`;
      const isError =
        formValidationRegex[key] &&
        !formValidationRegex[key].test(formInputValues[key]);
      submitFormValidation[key] = { errMsg, isError };
    }
    setFormInputErr(submitFormValidation);

    if (!Object.keys(formInputValues).length || !agreement) return;

    for (let key in formInputValues) {
      if (!formInputValues || submitFormValidation[key]?.isError) {
        return;
      }
    }

    const firstAndLastName = formInputValues.name.split(" ");

    dispatch(toggleSpinner(true));
    axios({
      url: "/user/createUser",
      method: "post",
      data: {
        firstName: firstAndLastName[0],
        lastName: firstAndLastName[firstAndLastName.length-1] || "",
        userName:formInputValues.email,
        password: formInputValues.password,
        email: formInputValues.email,
        active: true,
      },
    })
      .then((res) => {
        console.log(res);
        dispatch(toggleSpinner(false));
      })
      .catch((err) => {
        console.log(err);
        dispatch(toggleSpinner(false));
      });
  };

  const [openSnack, setOpenSnack] = React.useState(false);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenSnack(false);
  };

  return (
    <ErrorBoundary>
      <Spinner
        open={isLoading}
        spinnerText="Please wait while we register you in !!"
      />
      <Grid container className="signup-page">
        <Grid item xs={6} className="signup-img-container">
          <Grid>
            <img src={SignUpImg} alt="signup" className="signup-img" />
          </Grid>
        </Grid>
        <Grid item xs={6} className="signup-form">
          <div className="form-container">
            <div className="paper-box">
              <div className="form-text">
                <Typography variant="h5">Get Started</Typography>
                <Typography variant="p">
                  Already have an account? <Link to="/">Log in</Link>
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
                    <FormLabel
                      required
                      labeltext="Full Name"
                      className="input-label"
                    />
                    <TextField
                      name="name"
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <PersonOutlineIcon />
                          </InputAdornment>
                        ),
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
                    <FormLabel
                      className="input-label"
                      required
                      labeltext="Mobile Number"
                    />
                    <TextField
                      name="phoneNumber"
                      inputProps={{ maxLength: 10 }}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <PhoneOutlinedIcon />
                          </InputAdornment>
                        ),
                      }}
                      type="tel"
                      placeholder="Phone Number"
                      className="input-fields"
                      error={formInputErr["phoneNumber"]?.isError}
                      value={formInputValues.phoneNumber || ""}
                      onChange={handleOnChange}
                      onBlur={handleOnBlur}
                      helperText={
                        formInputErr["phoneNumber"]?.isError
                          ? formInputErr["phoneNumber"]?.errMsg
                          : ""
                      }
                    />
                    <FormLabel
                      required
                      className="input-label"
                      labeltext="Email Address"
                    />
                    <TextField
                      name="email"
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <MailOutlineOutlinedIcon />
                          </InputAdornment>
                        ),
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
                    <FormLabel
                      required
                      className="input-label"
                      labeltext="Password"
                    />
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
                              {showPassword ? (
                                <VisibilityOff />
                              ) : (
                                <Visibility />
                              )}
                            </IconButton>
                          </InputAdornment>
                        ),
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
                        control={<Checkbox onChange={checkChangeHandler} />}
                        label={
                          <Typography variant="p">
                            I accept the terms of service and privacy policy.
                          </Typography>
                        }
                        className="checkbox-label"
                      />
                    </div>

                    <SnackbarComponent
                      open={openSnack}
                      autoHideDuration={6000}
                      onClose={handleClose}
                      anchorOrigin={{
                        vertical: "top",
                        horizontal: "left",
                      }}
                      severity="error"
                      sx={{ width: "100%" }}
                      alertText=" Kindly accept the terms of service and privacy policy !"
                    />

                    <Button
                      type="submit"
                      variant="contained"
                      className="signup-button"
                      buttontext="Sign up"
                    />
                  </FormControl>
                </form>
              </div>
            </div>
          </div>
        </Grid>
      </Grid>
    </ErrorBoundary>
  );
};

export default SignUp;
