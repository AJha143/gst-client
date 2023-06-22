import React, { useState } from "react";
import CustomizedSteppers2 from "../../Components/Stepper/Stepper2";
import AutoCompleteComponent from "../../customComponent/AutoComplete/AutoComplete";
import { TextField } from "@mui/material";
import DropDownComponent from "../../customComponent/DropDown/DropDown";

const GSTR = () => {
  const activeStep = 0;
  const steps = [
    "Select campaign settings",
    "Create an ad group",
    "Create an ad",
    "boi",
  ];
  const options = [
    { value: 10, label: "Ten" },
    { value: 20, label: "Twenty" },
    { value: 30, label: "Thirty" },
  ];

  const [inputValue, setInputValue] = useState();

  const handleChange = (newValue) => {
  };

  const handleInputChange = (newInputValue) => {
    setInputValue(newInputValue);
  };

  const [selectedOption, setSelectedOption] = useState("");

  const handleChangeDropDown = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div>
      GSTR
      {/* <CustomizedSteppers2
        steps={steps}
        activeStep={activeStep}
        orientation="vertical"
      /> */}
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
    </div>
  );
};

export default GSTR;
