
import { Snackbar } from '@mui/material';
import React from 'react'
import AlertComponent from './AlertComponent';

const SnackbarComponent = (props) => {
    const {open,autoHideDuration,onClose,anchorOrigin, alertText,severity,sx} = props;
  return (
    <>
        <Snackbar
            open={open}
            autoHideDuration={autoHideDuration}
            onClose={onClose}
            anchorOrigin={anchorOrigin}
      {...props}
       >
       <div>
        <AlertComponent
        severity={severity}
        sx={sx}
        alertText={alertText}
       
        />
        </div>
       </Snackbar>
    </>
  )
}

export default SnackbarComponent