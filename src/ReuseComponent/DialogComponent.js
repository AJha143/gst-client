import React from 'react'
import { Dialog } from '@mui/material';
const DialogComponent = (props) => {
    const {open, onClose,maxWidth} = props
  return (
    <div>
        <Dialog
        open={open}
        onClose={onClose}
        maxWidth={maxWidth}
            {...props}
        />
    </div>
  )
}

export default DialogComponent