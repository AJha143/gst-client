import {
  CardContent,
  Card,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import "./UploadGSTN.scss";
import ButtonComponent from "../../../../customComponent/ButtonComponent";
import { upload } from "./UploadConstant";
const UploadGSTN = () => {
  return (
    <div>
      <Card
        sx={{
          width: "90%",
          borderColor: "#ACD2FD",
          borderWidth: "5px",
          backgroundColor: "#F9FBFE",
        }}
        style={{ display: "flex", justifyContent: "space-around" }}
      >
        <CardContent>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi.
        </CardContent>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            margin: "auto",
            width: "125vh",
          }}
        >
          <div>
            <ButtonComponent
              // classes={{ root: "cancelBtn" }}
              variant="contained"
              color="primary"
              // onClick={handleClose}
              buttontext="Import Your Data"
              // width={{width:'200px'}}
            />
          </div>
          <div>
            <ButtonComponent
              // classes={{ root: "cancelBtn" }}
              variant="contained"
              color="primary"
              // onClick={handleClose}
              buttontext="Create Invoice"
            />
          </div>
        </div>
      </Card>
      <div style={{display:'flex',margin:'auto'}}>
        {upload.map((element) => {
          return (
            <Card
              sx={{
                width: "20%",
                height: "30%",
                borderColor: "#ACD2FD",
                borderWidth: "5px",
                // backgroundColor: "#F9FBFE",
                margin:'auto',
                marginTop:'2vh'
              }}
            >
              <div>
                <Grid
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <img
                    src={element.img}
                    alt="excel"
                    style={{ height: "15vh", width: "15vh" }}
                  />
                </Grid>
                <div>
                <Typography style={{display:'flex',justifyContent:'center',marginTop:'2vh'}}>{element.title}</Typography>
                <CardContent style={{display:'flex',justifyContent:'center'}}>{element.description}</CardContent>
                </div>
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default UploadGSTN;
