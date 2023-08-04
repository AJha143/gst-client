import React from 'react'
import {LocalPhoneOutlinedIcon,  MailOutlineOutlinedIcon } from "@mui/icons-material";
import { Typography } from '@mui/material';
import './Footer.scss'
import ErrorBoundary from '../../customComponent/ErrorBoundary';
function Footer() {
  return (
  
    <ErrorBoundary>
         
    <footer className="footer-info">
        <span>
          <MailOutlineOutlinedIcon />
          <Typography variant="p"> support@gmail.com</Typography>
        </span>
        <span>
          <LocalPhoneOutlinedIcon />
          <Typography variant="p">+91 7901022478 | 040-48531992</Typography>
        </span>
      </footer>
    </ErrorBoundary>
  )
}

export default Footer