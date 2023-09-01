import React from "react";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import CustomInput from "./CustomInput";

function CustomSelect({ value, onChange, options, style }) {
  return (
    <FormControl variant="standard">
      <Select
        labelId="demo-customized-select-label"
        id="demo-customized-select"
        value={value}
        onChange={onChange}
        input={<CustomInput style={style} />}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

export default CustomSelect;
