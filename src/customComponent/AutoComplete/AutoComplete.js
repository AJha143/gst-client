import React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import PropTypes from 'prop-types';

const AutoCompleteComponent = (props) => {
  const { value, id, width, label, options, inputValue, onChange, onInputChange } = props;

  const handleChange = ( newValue) => {
    if (onChange) {
      onChange(newValue);
    }
  };

  const handleInputChange = (newInputValue) => {
    if (onInputChange) {
      onInputChange(newInputValue);
    }
  };

  return (
    <div>
      <br />
      <Autocomplete
        value={value}
        onChange={handleChange}
        inputValue={inputValue}
        onInputChange={handleInputChange}
        id={id}
        options={options}
        sx={width}
        renderInput={(params) => <TextField {...params} label={label} />}
      />
    </div>
  );
};

AutoCompleteComponent.propTypes = {
  value: PropTypes.any,
  id: PropTypes.string,
  width: PropTypes.object,
  label: PropTypes.string,
  options: PropTypes.array,
  inputValue: PropTypes.string,
  onChange: PropTypes.func,
  onInputChange: PropTypes.func,
};

export default AutoCompleteComponent;
