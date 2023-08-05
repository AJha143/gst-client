import React from 'react'
import PropTypes from 'prop-types';
 import {Button} from "@mui/material";


const ButtonComponent = (props) => {
  const { variant, onClick, buttontext, type, className, color ,classes} = props ;
  return (
    <>
      <Button 
      type={type}
      variant={variant}
      onClick={onClick}
      className={className}
      classes={classes}
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
  classes:PropTypes.object,
  color:PropTypes.string
};

export default ButtonComponent