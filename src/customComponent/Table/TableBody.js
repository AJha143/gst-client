import React from "react";
import DropDownComponent from "../DropDown/DropDown";
import DeleteIcon from "@mui/icons-material/Delete";
import { Button } from "@mui/material";

const TableBody = () => {
  const dataItem = [
    {
      seialNo: { val: "1", width: "6vh" },
      itemDescription: { val: "GST of Ramlal Ration", width: "25vh" },
      itemType: { val: "Goods", width: "15vh" },
      hs: { val: 1, width: "15vh" },
      qty: { val: 2, width: "10vh" },
      unityOfMeasurement: { val: "-", width: "25vh" },
      rate: { val: 35, width: "12vh" },
      discount: { per: "12", num: 1, width: "15vh" },
      taxableValue: { val: "1234", width: "18vh" },
      taxableRate: { val: "5.05", width: "18vh" },
      tax: { CGST: 2.5, SGST: 2.5, IGST: 5, width: "20vh" },
      cess: { val: 1200, width: "20vh" },
      totalRow: { val: 1500, width: "20vh" },
    },
    {
      seialNo: { val: "1", width: "6vh" },
      itemDescription: { val: "GST of Ramlal Ration", width: "25vh" },
      itemType: { val: "Goods", width: "15vh" },
      hs: { val: 1, width: "15vh" },
      qty: { val: 2, width: "10vh" },
      unityOfMeasurement: { val: "-", width: "25vh" },
      rate: { val: 35, width: "12vh" },
      discount: { per: "12", num: 1, width: "15vh" },
      taxableValue: { val: "1234", width: "18vh" },
      taxableRate: { val: "5.05", width: "18vh" },
      tax: { CGST: 2.5, SGST: 2.5, IGST: 5, width: "20vh" },
      cess: { val: 1200, width: "20vh" },
      totalRow: { val: 1500, width: "20vh" },
    },
    {
      seialNo: { val: "1", width: "6vh" },
      itemDescription: { val: "GST of Ramlal Ration", width: "25vh" },
      itemType: { val: "Goods", width: "15vh" },
      hs: { val: 1, width: "15vh" },
      qty: { val: 2, width: "10vh" },
      unityOfMeasurement: { val: "-", width: "25vh" },
      rate: { val: 35, width: "12vh" },
      discount: { per: "12", num: 1, width: "15vh" },
      taxableValue: { val: "1234", width: "18vh" },
      taxableRate: { val: "5.05", width: "18vh" },
      tax: { CGST: 2.5, SGST: 2.5, IGST: 5, width: "20vh" },
      cess: { val: 1200, width: "20vh" },
      totalRow: { val: 1500, width: "20vh" },
    },
  ];
  return (
    <div style={{ backgroundColor: "black" }}>
      {dataItem.map((data, index) => (
        <div
          style={{
            display: "flex",
          }}
        >
          <div
            style={{
              //   marginTop: "10px",
              width: data.seialNo.width,
              marginRight: "1px",
              marginBottom: "1px",
              backgroundColor: "white",
              color: "black",
              display: "flex",
              justifyContent: "center",
            }}
          >
            {data.seialNo.val}
          </div>
          <div
            style={{
              width: data.itemDescription.width,
              backgroundColor: "white",
              color: "black",
              marginRight: "1px",
              marginBottom: "1px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            {data.itemDescription.val}
          </div>
          <div
            style={{
              width: data.itemType.width,
              backgroundColor: "white",
              color: "black",
              marginRight: "1px",
              marginBottom: "1px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            {data.itemType.val}
          </div>
          <div
            style={{
              width: data.hs.width,
              backgroundColor: "white",
              color: "black",
              marginRight: "1px",
              marginBottom: "1px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            {data.hs.val}
          </div>
          <div
            style={{
              width: data.qty.width,
              backgroundColor: "white",
              color: "black",
              marginRight: "1px",
              marginBottom: "1px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            {data.qty.val}
          </div>
          <div
            style={{
              width: data.unityOfMeasurement.width,
              backgroundColor: "white",
              color: "black",
              marginRight: "1px",
              marginBottom: "1px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            {data.unityOfMeasurement.val}
          </div>
          <div
            style={{
              width: data.rate.width,
              backgroundColor: "white",
              color: "black",
              marginRight: "1px",
              marginBottom: "1px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            {data.rate.width}
          </div>
          <div
            style={{
              width: data.discount.width,
              backgroundColor: "white",
              color: "black",
              marginRight: "1px",
              marginBottom: "1px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            {data.discount.per}
          </div>
          <div
            style={{
              width: data.taxableValue.width,
              backgroundColor: "white",
              color: "black",
              marginRight: "1px",
              marginBottom: "1px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            {data.taxableValue.val}
          </div>
          <div
            style={{
              width: data.taxableRate.width,
              backgroundColor: "white",
              color: "black",
              marginRight: "1px",
              marginBottom: "1px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            {data.taxableRate.val}
          </div>
          <div
            style={{
              width: data.tax.width,
              backgroundColor: "white",
              // color: "black",
              marginRight: "1px",
              marginBottom: "1px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <div style={{ backgroundColor: "black", display: "flex" }}>
              <div
                style={{
                  backgroundColor: "white",
                  marginRight: "1px",
                  color: "black",
                  width: "6vh",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                {data.tax.CGST}
              </div>
              <div
                style={{
                  backgroundColor: "white",
                  marginRight: "1px",
                  color: "black",
                  width: "6vh",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                {data.tax.SGST}
              </div>
              <div
                style={{
                  backgroundColor: "white",
                  color: "black",
                  width: "5vh",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                {data.tax.IGST}
              </div>
            </div>
          </div>
          <div
            style={{
              width: data.cess.width,
              backgroundColor: "white",
              color: "black",
              marginRight: "1px",
              marginBottom: "1px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            {data.cess.val}
          </div>
          <div
            style={{
              width: data.totalRow.width,
              backgroundColor: "white",
              color: "black",
              marginRight: "1px",
              marginBottom: "1px",
              display: "flex",
              justifyContent: "center",
              height: "7vh",
            }}
          >
            {data.totalRow.val}
          </div>
          <div style={{ backgroundColor: "white" }}>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                width: "5vh",
                backgroundColor: "white",
                color: "black",
                height: "7vh",
              }}
            >
              <DeleteIcon />
            </div>
          </div>
        </div>
      ))}
      <div style={{ display: "flex" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            width: "108.8vh",
            backgroundColor: "white",
            color: "black",
            height: "7vh",
            marginRight: "1px",
          }}
        >
          <Button variant="text" >+ Add another row</Button>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            width: "15vh",
            backgroundColor: "white",
            color: "black",
            height: "7vh",
            marginRight: "1px",
          }}
        >
          0.00
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            width: "18vh",
            backgroundColor: "white",
            color: "black",
            height: "7vh",
            marginRight: "1px",
          }}
        >
          0.00
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            width: "18vh",
            backgroundColor: "white",
            color: "black",
            height: "7vh",
            marginRight: "1px",
          }}
        ></div>
        <div
          style={{
            width: "20vh",
            backgroundColor: "white",
            // color: "black",
            marginRight: "1px",
            marginBottom: "1px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div style={{ backgroundColor: "black", display: "flex" }}>
            <div
              style={{
                backgroundColor: "white",
                marginRight: "1px",
                color: "black",
                width: "6vh",
                display: "flex",
                justifyContent: "center",
              }}
            >
              0.0
            </div>
            <div
              style={{
                backgroundColor: "white",
                marginRight: "1px",
                color: "black",
                width: "6vh",
                display: "flex",
                justifyContent: "center",
              }}
            >
              0.0
            </div>
            <div
              style={{
                backgroundColor: "white",
                color: "black",
                width: "5vh",
                display: "flex",
                justifyContent: "center",
              }}
            >
              0.0
            </div>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            width: "20vh",
            backgroundColor: "white",
            color: "black",
            height: "7vh",
            marginRight: "1px",
          }}
        ></div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            width: "20vh",
            backgroundColor: "white",
            color: "black",
            height: "7vh",
            marginRight: "1px",
            marginBottom:'1px',
          }}
        ></div>
        <div
          style={{ backgroundColor: "white", height: "7.1vh", width: "5vh" }}
        ></div>
      </div>
    </div>
  );
};

export default TableBody;
