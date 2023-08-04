import React from 'react'
import PropTypes from 'prop-types';
 import {Button} from "@mui/material";


const ButtonComponent = (props) => {
  const { variant, onClick, buttontext, type, className, color } = props ;
  return (
    <>
      <Button 
      type={type}
      variant={variant}
      onClick={onClick}
      className={className}
      color={color}
      {...props}
       >{buttontext}</Button>
    </>
  )
}

ButtonComponent.propTypes = {
  type: PropTypes.string,
  variant:PropTypes.string,
  onClick:PropTypes.func,
  className:PropTypes.string,
  color:PropTypes.string
};

export default ButtonComponent