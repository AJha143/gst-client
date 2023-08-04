import { Divider } from "@mui/material";
import React from "react";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

const headers = [
  { title: "#", width: "6vh", divider: false, multiLine: false },
  {
    title: "Item Description",
    width: "25vh",
    divider: false,
    multiLine: false,
  },
  { title: "Item Type", width: "15vh", divider: false, multiLine: false },
  { title: "HSN / SAC", width: "15vh", divider: false, multiLine: true },
  { title: "Qty", width: "10vh", divider: false, multiLine: false },
  {
    title: "Unity of Measurement",
    width: "25vh",
    divider: false,
    multiLine: false,
  },
  { title: "Rate (Rs.)", width: "12vh", divider: false, multiLine: false },
  {
    title: "Discount",
    width: "15vh",
    divider: true,
    multiLine: false,
    options: true,
  },
  { title: "Taxable Value", width: "18vh", divider: false, multiLine: false },
  { title: "Taxable Rate", width: "18vh", divider: false, multiLine: false },
  {
    title: "Tax Values (Rs.)",
    width: "20vh",
    divider: true,
    multiLine: false,
    subHeader: ["CGST", "SGST", "IGST"],
  },
  { title: "CESS", width: "20vh", divider: false, multiLine: false },
  { title: "Total", width: "20vh", divider: false, multiLine: false },
];

const TableHeader = () => {
  return (
    <div style={{ display: "flex" }}>
      {headers.map((header, index) => (
        <div
          key={index}
          style={{
            backgroundColor: "#5D69A7",
            // height: "12vh",
            width: header.width,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginRight: "1px",
            height:'10vh'
          }}
        >
          <span
            style={{
              fontFamily: "Poppins",
              fontSize: "16px",
              fontWeight: "600",
              lineHeight: "21px",
              letterSpacing: "0em",
              textAlign: "left",
              color: "white",
              
            }}
          >
            <div style={{ marginTop: "10px" }}>{header.title}</div>
            <div>
              {header.divider ? (
                <div>
                  <Divider style={{ backgroundColor: "white" ,marginTop:'5px'}} />

                  {header.options ? (
                    <div style={{ display: "flex" }}>
                      <div style={{ display: "flex" }}>
                        <FiberManualRecordIcon
                          fontSize="small"
                          style={{ color: "#528EEF" }}
                        />
                        <div style={{ fontSize: "12px" }}>%</div>
                      </div>
                      <div style={{ display: "flex" }}>
                        <FiberManualRecordIcon fontSize="small" />
                        <div style={{ fontSize: "12px" }}>Rs</div>
                      </div>
                    </div>
                  ) : (
                    ""
                  )}

                  {header.subHeader ? (
                    <div
                      style={{
                        display: "flex",
                        fontSize: "12px",
                        backgroundColor: "white",
                      }}
                    >
                      <div
                        style={{
                          backgroundColor: "#5D69A7",
                          marginRight: "1px",
                          paddingRight: "5px",
                        }}
                      >
                        {header.subHeader[0]}
                      </div>
                      <div
                        style={{
                          backgroundColor: "#5D69A7",
                          marginRight: "1px",
                          paddingLeft: "7px",
                          paddingRight: "7px",
                        }}
                      >
                        {header.subHeader[1]}
                      </div>
                      <div
                        style={{
                          backgroundColor: "#5D69A7",
                          marginRight: "-5px",
                          paddingRight: "5px",
                          paddingLeft: "5px",
                        }}
                      >
                        {header.subHeader[2]}
                      </div>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              ) : (
                ""
              )}
            </div>
          </span>
        </div>
      ))}
    </div>
  );
};

export default TableHeader;
