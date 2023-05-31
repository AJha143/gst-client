import React from 'react'
import {TextField} from "@mui/material";
import { PropTypes } from 'prop-types';

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

TextFieldComponent.propTypes={
  type:PropTypes.string,
  name:PropTypes.string,
  placeholder:PropTypes.string,
  InputProp:PropTypes.object,
  value:PropTypes.any,
  error:PropTypes.bool,
  onChange:PropTypes.func,
  onBlur:PropTypes.func,
  helperText:PropTypes.any,
}

export default TextFieldComponent