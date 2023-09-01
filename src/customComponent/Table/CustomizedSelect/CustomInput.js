import React from "react";
import { styled } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";

const BootstrapInput = styled(InputBase)(({ theme, style }) => ({
  "label + &": {
    marginTop: theme.spacing(3),
  },
  "& .MuiInputBase-input": {
    borderRadius: 0,
    position: "relative",
    backgroundColor: theme.palette.background.paper,
    border: "1px solid white",
    fontSize: 14,
    padding: "10px 26px 10px 12px",
    // width: "100px",
    fontFamily: ["Poppins"].join(","),
    "&:focus": {
      borderRadius: 0,
    },
    ...style, // Apply the passed-in style
  },
}));

function CustomInput(props) {
  const { style, ...rest } = props;
  return <BootstrapInput {...rest} style={style} />;
}

export default CustomInput;
