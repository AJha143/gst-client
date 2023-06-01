import React from 'react'
import AddClient from "./AddClientButton"
import "./Clients.scss";
import {  Paper, Typography } from "@material-ui/core";


const Clients = () => {
  return (
    <>
    <div className='clientBtnContainer'>
    <Typography variant='h4'>All Clients</Typography>
    <AddClient />
    </div>
    <div  className="clientContainer">
      <Paper classes={{root:'clientPaper'}} elevation={3}>
        <div className="clientCard">
          <div className="clientDetailsContainer">
            <div className="clientSeqContainer">1</div>
            <div className="clientProfile">
              <b>AYUSH KUMAR JHA</b>
              <p>HARYANA</p>
              <p> GSTN: 078976655AS</p>
            </div>
          </div>

          <div className="addClientActionContainer">
            <div className="actionBtn-regular">REGULAR</div>
            <div className="actionBtn">GET FILING STATUS</div>
            <div className="actionBtn">MONTHLY</div>
            <div className="actionBtn">RETURNS</div>
          </div>
        </div>
      </Paper>
      <div className="filingStatusContainer">
        <p>
          <h4>Filing Status: </h4>
          <span> GSTR-1 / IFF</span>
          <span>FEB</span> {"|"}
          <span>MAR</span> {"|"}
          <span>APR</span>
        </p>
        <p>
          <span> GSTR-3B</span>
          <span>FEB</span> {"|"}
          <span>MAR</span> {"|"}
          <span>APR</span>
        </p>
        <p>
          <span>GSTR-9</span>
          <span>2019-20</span> {"|"}
          <span>2020-21</span>
        </p>
      </div>
    </div>
    </>
  )
}

export default Clients