
import React from 'react'
 import {Button} from "@mui/material";

//  Example.propTypes = {
//   message: PropTypes.string,
//   count: PropTypes.number,
//   disabled: PropTypes.bool,
//   level: PropTypes.symbol,
// }
const ButtonComponent = (props) => {
  const { variant, onClick, buttontext } = props ;
  return (
    <>
      <Button 
      variant={variant}
      onClick={onClick}
      {...props}
       >{buttontext}</Button>
    </>
  )
}

export default ButtonComponent