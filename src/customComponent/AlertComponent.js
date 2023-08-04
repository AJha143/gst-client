import { Alert } from '@mui/material';
import React from 'react'
import PropTypes from 'prop-types';

const AlertComponent = (props) => {
    const {onClose,severity,sx,color,variant,alertText} = props;
  return (
    <>
    <Alert
        onClose={onClose}
        severity={severity}
        sx={sx}
        color={color}
        variant={variant}
        {...props}
    >{alertText}
    </Alert>
    </>
  )
}
AlertComponent.propTypes = {
  variant:PropTypes.string,
  onClose:PropTypes.func,
  className:PropTypes.string,
  color:PropTypes.string,
  sx:PropTypes.number,
  severity:PropTypes.string,
};
export default AlertComponent