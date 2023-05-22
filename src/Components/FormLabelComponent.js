import { FormLabel } from '@mui/material'
import React from 'react'

const FormLabelComponent = (props) => {
    const {required,labeltext} = props
  return (
    <div>
        <FormLabel
        required={required}
        {...props}
        >{labeltext}</FormLabel>
    </div>
  )
}

export default FormLabelComponent