import { FormControl, Grid, InputAdornment } from "@mui/material";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import TextFieldComponent from "../TextFieldComponent";
import "./SearchBar.scss";

const SearchBar = (props) => {
  const {onChange,value,className} = props





  return (
    <FormControl>
      <Grid container className="searchBar-container">
        <TextFieldComponent
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
          className={className}
          onChange={onChange}
          value={value}
        />
      </Grid>
    </FormControl>
  );
};

export default SearchBar;
