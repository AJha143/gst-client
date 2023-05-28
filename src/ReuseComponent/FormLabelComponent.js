import { FormLabel } from '@mui/material'
import React from 'react'

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

export default FormLabelComponent