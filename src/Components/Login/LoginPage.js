import React, { useState } from "react";
import {
  FormControl,
  Grid,
  IconButton,
  InputAdornment,
  Typography,
} from "@mui/material";
import "./LoginPage.scss";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import MailOutlineOutlinedIcon from "@mui/icons-material/MailOutlineOutlined";
import HttpsOutlinedIcon from "@mui/icons-material/HttpsOutlined";
import Button from "../../customComponent/ButtonComponent";
import TextField from "../../customComponent/TextFieldComponent";
import SignUpImg from "../../Images/signup_new.jpg";
import check from "../../Images/check.png";
import ForgetPassword from "../ForgetPassword/ForgetPassword";
import FormLabel from "../../customComponent/FormLabelComponent";
import { formInputFieldErrMsg, formValidationRegex } from "../ConstantData";
import ErrorBoundary from "../../customComponent/ErrorBoundary";
import axios from "../../service/Service"
import Spinner from '../../customComponent/spinner/Spinner'
import {toggleSpinner} from '../../reducers/spinnerReducer'
import {handleLogin} from '../../reducers/loginSliceReducer'
import { useSelector,useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const LoginPage = () => {
  const dispatch = useDispatch();
  const {isLoading} = useSelector((state)=> {
    console.log(state)
   return state.spinner
  });

  const [showPassword, setShowPassword] = useState(false);

  const [formInputValues, setFormInputValues] = useState({
    email: "",
    password: "",
  });
  const [formInputErr, setFormInputErr] = useState({});

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
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
    const isError = value
      ? formValidationRegex[name] && !formValidationRegex[name].test(value)
      : !value;
    setFormInputErr((prev) => ({
      ...prev,
      [name]: {
        isError,
        errMsg,
      },
    }));
  };


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
  const handleSubmit = (event) => {
    event.preventDefault();


    const submitFormValidation = {};

    for (let key in formInputValues) {
      const errMsg = formInputValues[key]
        ? formInputFieldErrMsg[key]
        : `${key.toUpperCase()} is Mandatory!!!`;
      const isError = formInputValues[key]
        ? formValidationRegex[key] &&
          !formValidationRegex[key].test(formInputValues[key])
        : !formInputValues[key];
      submitFormValidation[key] = { errMsg, isError };
    }
    setFormInputErr(submitFormValidation);


    // if (!Object.keys(formInputValues).length) return;

    // for (let key in formInputValues) {
    //   if (!formInputValues || submitFormValidation[key]?.isError) {
    //     return;
    //   }
    // }

    dispatch(toggleSpinner(true))
    axios({
      url:"/auth/authenticate",
      method : 'post',
      data: {
        "username": formInputValues.email,
        "password": formInputValues.password
      },
    }).then((res)=>{
        console.log(res);
    dispatch(toggleSpinner(false));
    dispatch(handleLogin(res.data));
    }).catch((err)=>{
        console.log(err);
    dispatch(toggleSpinner(false));

    })
  };

  return (

    <ErrorBoundary>
    <Spinner  open={isLoading} spinnerText="Please wait while we log you in !!"  />
    <Grid container className="login-page">
      <Grid item xs={6} direction="column" className="login-img-container">
        <Grid>
          <img src={SignUpImg} alt="" className="login-img" />
        </Grid>

          <Grid direction="column" className="discription-container">
            <div className="discription">
              <img src={check} alt="check icon" className="check" />
              <Typography varient="p">
                Most Economical and accurate gst software in the market to file
                return.
              </Typography>
            </div>
            <div className="discription">
              <img src={check} alt="check icon" className="check" />
              <Typography varient="p">
                Multiple subscription plan to fullfill your requirement.
              </Typography>
            </div>
          </Grid>
        </Grid>
        <Grid item xs={6} className="login-form">
          <div className="login-paper">
            <div className="form-text">
              <Typography variant="h5">Log In</Typography>
            </div>
            <form onSubmit={handleSubmit}>
              <FormControl>
                <FormLabel
                  className="input-label"
                  required
                  labeltext="Email Address"
                />

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

                <FormLabel
                  className="input-label"
                  required
                  labeltext="Password"
                />

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
                <div>
                  <Typography
                    variant="p"
                    classes={{ root: "forget-password" }}
                    onClick={handleClickOpen}
                  >
                    Forgot password?
                  </Typography>
                  <ForgetPassword open={open} onClose={handleClose} />
                </div>

                <Button
                  className="loginform-button"
                  variant="contained"
                  type="submit"
                  buttontext="Log in"
                />
                <Typography variant="p" className="switch-signup">
                  Don't have an account? <Link to="/register">Sign Up</Link>.
                </Typography>
              </FormControl>
            </form>
          </div>
        </Grid>
      </Grid>
    </ErrorBoundary>
  );
};

export default LoginPage;
