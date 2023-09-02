import { Divider } from "@mui/material";
import React from "react";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

const headers = [
  { title: "#", width: "10vh", divider: false, multiLine: false },
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
    width: "21vh",
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
            width: header.width,
            height: "10vh",
            // marginRight: "0.2vh",
            border: "1px solid white",
          }}
        >
          <div
            style={{
              fontFamily: "Poppins",
              fontSize: "16px",
              fontWeight: "600",
              letterSpacing: "0em",
              textAlign: "left",
              color: "white",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center", // Optional, if you want to center vertically as well
                paddingTop: header.divider ? "1vh" : "3vh",
              }}
            >
              {header.title}
            </div>

            {header.divider ? (
              <Divider style={{ backgroundColor: "white", marginTop: "5px" }} />
            ) : (
              ""
            )}

            {header.options ? (
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-evenly",
                  paddingTop: "1vh",
                }}
              >
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
          </div>
          {header.subHeader ? (
            <div
              style={{
                display: "flex",
                height: "100%",
              }}
            >
              <div
                style={{
                  color: "white",
                  width:'7vh',
                  paddingTop: "0.5vh",
                  borderRight: "1px solid white",
                  display:'flex',
                  justifyContent:'center'
                }}
              >
                CGST
              </div>

              <div
                style={{
                  color: "white",
                  paddingTop: "0.5vh",
                  borderRight: "1px solid white",
                  width:'7vh',
                  display:'flex',
                  justifyContent:'center'

                }}
              >
                SGST
              </div>

              <div
                style={{
                  color: "white",
                  paddingTop: "0.5vh",
                  width:'7vh',
                  display:'flex',
                  justifyContent:'center'
                }}
              >
                IGST
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      ))}
    </div>
  );
};

export default TableHeader;
