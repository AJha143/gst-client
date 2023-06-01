import React from 'react'
import { Dialog } from '@mui/material';
import PropTypes from 'prop-types';

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

DialogComponent.propTypes = {
 open:PropTypes.func,
  onClose:PropTypes.func,
  className:PropTypes.string,
  color:PropTypes.string,
  sx:PropTypes.number,
  maxWidth:PropTypes.number,
};

export default DialogComponent