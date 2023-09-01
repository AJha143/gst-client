import React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

export default function AutoCompleteComponent({
  options = [],
  initialValue = "",
  onChange,
  onInputChange,
  width,
  label
}) {
  const [value, setValue] = React.useState(initialValue);
  const [inputValue, setInputValue] = React.useState("");

  const handleValueChange = (newValue) => {
    setValue(newValue);
    if (onChange) {
      onChange(newValue);
    }
  };

  const handleInputChange = (newInputValue) => {
    setInputValue(newInputValue);
    if (onInputChange) {
      onInputChange(newInputValue);
    }
  };

  return (
    <div>
      <Autocomplete
        value={value}
        onChange={(event, newValue) => handleValueChange(newValue)}
        inputValue={inputValue}
        onInputChange={(event, newInputValue) =>
          handleInputChange(newInputValue)
        }
        id="controllable-states-demo"
        options={options}
        sx={width}
        renderInput={(params) => <TextField {...params} label={label} />}
      />
    </div>
  );
}
