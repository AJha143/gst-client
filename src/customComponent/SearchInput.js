import { FormControl, TextField } from "@mui/material";
import React from "react";

const SearchInput = (props) => {
  const {variant} = props;
  return (
    <div>
      <FormControl>
        <TextField
          variant={variant}
          {...props}
        />
      </FormControl>
    </div>
  );
};

export default SearchInput;
