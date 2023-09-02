import React from "react";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import PropTypes from "prop-types";
import { InputLabel } from "@mui/material";
import OutlinedInput from "@mui/material/OutlinedInput";

const DropDownComponent = (props) => {
  const { label, options, onChange, value, outlined } = props;
  const border = outlined ? <OutlinedInput /> : "";

  return (
    <div>
      <FormControl sx={{ m: 0, minWidth: 120 }}>
        {outlined ? (
          ""
        ) : (
          <InputLabel id="demo-simple-select-label">{label}</InputLabel>
        )}
        <Select
          // label={label}
          value={value}
          onChange={onChange}
          displayEmpty
          input={border}
          placeholder="lol"
          inputProps={{ "aria-label": "Without label" }}
          sx={{ width: "275px",}}
          {...props}
        >
          {outlined ? (
            <MenuItem disable value="">
              <em>{label}</em>
            </MenuItem>
          ) : (
            ""
          )}
          {options.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

DropDownComponent.propTypes = {
  value: PropTypes.any,
  onChange: PropTypes.func,
  displayEmpty: PropTypes.any,
  inputProps: PropTypes.object,
  options: PropTypes.any,
};

export default DropDownComponent;
