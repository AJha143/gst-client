import { CardContent, Card, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import "./UploadGSTN.scss";
import ButtonComponent from "../../../../customComponent/ButtonComponent";
import { upload } from "./UploadConstant";
import SalesInvoice from "../CreateAmendSalesInvoice/SalesInvoice";
const UploadGSTN = ({ renderStatus }) => {
  const [importData, setImportData] = useState(false);
  const [createInvoice, setCreateInvoice] = useState(false);

  const handleImport = () => {
    setImportData(true);
    setCreateInvoice(false);
  };

  const handleCreateInvoice = () => {
    setCreateInvoice(true);
    setImportData(false);
    renderStatus(3);
  };

  const handleButton = () => {
    renderStatus(3);
  };
  return (
    <>
      <div className="wrapper">
        <div className="textWrapper">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi.
        </div>
        <div className="buttonWrapper">
          <div className="btn">
            <ButtonComponent
              variant="contained"
              color="primary"
              // onClick={handleClose}
              buttontext="Import Your Data"
              onClick={handleImport}
            />
          </div>
          <div className="btn">
            <ButtonComponent
              variant="contained"
              color="primary"
              // onClick={handleClose}
              buttontext="Create Invoice"
              onClick={handleCreateInvoice}
            />
          </div>
        </div>
      </div>

      {importData ? (
        <div className="uploadMain">
          {upload.map((element) => {
            return (
              <Card className="cardWrapper">
                <div onClick={handleButton} className="upload">
                  <div>
                    <img src={element.img} alt="excel" className="uploadImg" />
                  </div>
                  <div className="uploadHeader">{element.title}</div>
                  <div className="uploadText">{element.description}</div>{" "}
                </div>
              </Card>
            );
          })}
        </div>
      ) : (
        ""
      )}
      {createInvoice ? <SalesInvoice props /> : ""}
    </>
  );
};

export default UploadGSTN;
