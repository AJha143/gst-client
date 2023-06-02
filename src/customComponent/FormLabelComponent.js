import { FormLabel } from '@mui/material'
import React from 'react'
import PropTypes from 'prop-types';

const FormLabelComponent = (props) => {
    const {required,labeltext,disabled,color,classes,className} = props
  return (
    <div>
        <FormLabel
        required={required}
        disabled={disabled}
        color={color}
        classes={classes}
        className={className}
        {...props}
        >{labeltext}</FormLabel>
    </div>
  )
}

FormLabelComponent.propTypes = {
  required:PropTypes.string,
  disabled:PropTypes.string,
   className:PropTypes.string,
   classes:PropTypes.object,
   color:PropTypes.string,
   sx:PropTypes.number,
   maxWidth:PropTypes.number,
 };

export default FormLabelComponent