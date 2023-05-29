import { Alert } from '@mui/material';
import React from 'react'

const AlertComponent = (props) => {
    const {onClose,severity,sx,color,variant,alertText} = props;
  return (
    <div>
    <Alert
        onClose={onClose}
        severity={severity}
        sx={sx}
        color={color}
        variant={variant}
        {...props}
    >{alertText}
    </Alert>
    </div>
  )
}

export default AlertComponent