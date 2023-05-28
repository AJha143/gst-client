
import React from 'react'
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

export default ButtonComponent