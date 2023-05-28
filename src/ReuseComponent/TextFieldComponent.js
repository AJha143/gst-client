import React from 'react'
import {TextField} from "@mui/material";

const TextFieldComponent = (props) => {
    const {type,placeholder,value, name ,InputProp, error,onChange,onBlur,helperText} = props
  return (
    <div>
        <TextField
            type={type}
            name={name}
            placeholder={placeholder}
            InputProp={InputProp}
            value={value}
            error={error}
            onChange={onChange}
            onBlur={onBlur}
            helperText={helperText}
            {...props}
        />
    </div>
  )
}

export default TextFieldComponent