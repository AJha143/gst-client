import React from 'react'
import {TextField} from "@mui/material";

const TextFieldComponent = (props) => {
    const {type,placeholder,value,} = props
  return (
    <div>
        <TextField
            type={type}
            placeholder={placeholder}
            value={value}
            {...props}
        />
    </div>
  )
}

export default TextFieldComponent