import React, { useState } from "react";
import CustomizedSteppers2 from "../../Components/Stepper/Stepper2";
import AutoCompleteComponent from "../../customComponent/AutoComplete/AutoComplete";
import { InputAdornment, TextField } from "@mui/material";
import DropDownComponent from "../../customComponent/DropDown/DropDown";
import MailOutlineOutlinedIcon from "@mui/icons-material/MailOutlineOutlined";
import {
  formInputFieldErrMsg,
  formValidationRegex,
} from "../../Components/ConstantData";
import TextFieldComponent from "../../customComponent/TextFieldComponent";
import CustomizedSteppers from "../../Components/Stepper/Stepper1/CustomizedSteppers";
import ButtonComponent from "../../customComponent/ButtonComponent";

const GSTR = () => {
  const step = ['Select campaign settings', 'Create an ad group', 'Create an ad'];
  const activeStep = 0;
  const steps = [
    "Step 1",
    "Step 2",
    "Step 3",
  ];
  const options = [
    { value: 10, label: "Ten" },
    { value: 20, label: "Twenty" },
    { value: 30, label: "Thirty" },
  ];

  const [inputValue, setInputValue] = useState();
  const [showPassword, setShowPassword] = useState(false);

  const [formInputValues, setFormInputValues] = useState({
    email: "",
    password: "",
  });
  const [formInputErr, setFormInputErr] = useState({});

  const handleChange = (newValue) => {};

  const handleInputChange = (newInputValue) => {
    setInputValue(newInputValue);
  };

  const [selectedOption, setSelectedOption] = useState("");

  const handleChangeDropDown = (event) => {
    setSelectedOption(event.target.value);
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

  return (
    <div>
      GSTR
      <CustomizedSteppers2
        steps={steps}
        activeStep={activeStep}
        orientation="vertical"
      />
      <AutoCompleteComponent
        value={""}
        onChange={handleChange}
        inputValue={inputValue}
        onInputChange={handleInputChange}
        id="controllable-states-demo"
        options={options}
        width={{ width: 200 }}
        label="Controllable"
      />
      <DropDownComponent
        options={options}
        value={selectedOption}
        onChange={handleChangeDropDown}
        label="Select"
        outlined={false}
      />
      <TextFieldComponent label="Name" />
 
 {/* <CustomizedSteppers/> */}
    </div>
  );
};

export default GSTR;
