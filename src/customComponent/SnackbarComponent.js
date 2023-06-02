
import { Snackbar } from '@mui/material';
import React from 'react'
import AlertComponent from './AlertComponent';
import PropTypes from 'prop-types';

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

SnackbarComponent.propTypes = {
  open:PropTypes.func,
  onClose:PropTypes.func,
  className:PropTypes.string,
  color:PropTypes.string,
  autoHideDuration:PropTypes.number,
  anchorOrigin:PropTypes.object,
  sx:PropTypes.number,
  severity:PropTypes.string,
  alertText:PropTypes.string,
}
export default SnackbarComponent