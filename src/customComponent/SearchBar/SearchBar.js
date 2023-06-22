import { FormControl, InputAdornment } from "@mui/material";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import TextFieldComponent from "../TextFieldComponent";


const SearchBar = (props) => {
  const {onChange,value,classes} = props
  return (
    <FormControl>
        <TextFieldComponent
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        classes={classes}
          onChange={onChange}
          value={value}
          {...props}
        />
    </FormControl>
  );
};

export default SearchBar;
