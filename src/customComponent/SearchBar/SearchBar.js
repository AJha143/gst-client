import { FormControl, Grid, InputAdornment } from "@mui/material";
import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import TextFieldComponent from "../TextFieldComponent";
import "./SearchBar.scss";

const SearchBar = () => {
  const filterData = (searchInput, clientData) => {
    return clientData.filter((client) => client.name.includes(searchInput));
  };

  const [searchInput, setSearchInput] = useState("");
  const [clientData, setClientData] = useState(); // use clientdata from API as default data

  const handleOnChange = (event) => {
    setSearchInput(event.target.value);
    const data = filterData(searchInput, clientData);
    setClientData(data);
  };

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
          className="search-field"
          onChange={handleOnChange}
          value={searchInput}
        />
      </Grid>
    </FormControl>
  );
};

export default SearchBar;
