import React, { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import ButtonComponent from "../ButtonComponent";
import AddIcon from "@mui/icons-material/Add";
import { Checkbox, FormControlLabel } from "@mui/material";
import TableBodyAdd from "./TableBodyAdd";

const TableBody = () => {
  const [showNewRow, setShowNewRow] = useState(false);

  const handleNewRow = () => {
    setShowNewRow(true);
  };

  const [seialNo, setSerialNo] = useState("");
  const [itemDescription, setItenDescription] = useState("");
  const [itemType, setItemType] = useState("");
  const [hs, setHs] = useState("");
  const [qty, setQty] = useState("");
  const [uom, setUom] = useState("");
  const [rate, setRate] = useState("");
  const [discount, setDiscount] = useState("");
  const [taxableValue, setTaxableValue] = useState("");
  const [taxableRate, setTaxableRate] = useState("");
  const [tax, setTax] = useState("");
  const [cgst, setCGST] = useState("");
  const [sgst, setSGST] = useState("");
  const [igst, setIGST] = useState("");
  const [cess, setCess] = useState("");
  const [totalRow, setTotalRow] = useState("");
  const [del, setDel] = useState("");


  const dataItem = [
    {
      seialNo: { val: "1" },
      itemDescription: { val: "GST of Ramlal Ration" },
      itemType: { val: "Goods" },
      hs: { val: 1 },
      qty: { val: 2 },
      unityOfMeasurement: { val: "-" },
      rate: { val: 35, width: "12vh" },
      discount: { per: "12", num: 1 },
      taxableValue: { val: "1234" },
      taxableRate: { val: "5.05" },
      tax: { CGST: 2.5, SGST: 2.5, IGST: 5 },
      cess: { val: 1200 },
      totalRow: { val: 1500 },
    },
    {
      seialNo: { val: "1", width: "10vh" },
      itemDescription: { val: "GST of Ramlal Ration", width: "25vh" },
      itemType: { val: "Goods", width: "15vh" },
      hs: { val: 1, width: "15vh" },
      qty: { val: 2, width: "10vh" },
      unityOfMeasurement: { val: "-", width: "25vh" },
      rate: { val: 35, width: "12vh" },
      discount: { per: "12", num: 1, width: "15vh" },
      taxableValue: { val: "1234", width: "18vh" },
      taxableRate: { val: "5.05", width: "18vh" },
      tax: { CGST: 2.5, SGST: 2.5, IGST: 5, width: "21vh" },
      cess: { val: 1200, width: "20vh" },
      totalRow: { val: 1500, width: "20vh" },
    },
  ];

  const TableBox = (props) => {
    const { data } = props;

    return (
      <div>
        <div
          style={{
            display: "flex",
          }}
        >
          <div
            style={{
              width: "5vh",
              backgroundColor: "white",
              color: "black",
              display: "flex",
              justifyContent: "center",
              borderBottom: "1px solid #D4D4E0",
              borderRight: "1px solid #D4D4E0",
              alignItems: "center",
            }}
          >
            {data.seialNo.val}
          </div>
          <div
            style={{
              width: "25vh",
              backgroundColor: "white",
              color: "black",
              display: "flex",
              justifyContent: "center",
              borderBottom: "1px solid #D4D4E0",
              borderRight: "1px solid #D4D4E0",
              alignItems: "center",
            }}
          >
            {data.itemDescription.val}
          </div>
          <div
            style={{
              width: "12vh",
              backgroundColor: "white",
              color: "black",
              display: "flex",
              justifyContent: "center",
              borderBottom: "1px solid #D4D4E0",
              borderRight: "1px solid #D4D4E0",
              alignItems: "center",
            }}
          >
            {data.itemType.val}
          </div>
          <div
            style={{
              width: "7vh",
              backgroundColor: "white",
              color: "black",
              display: "flex",
              justifyContent: "center",
              borderBottom: "1px solid #D4D4E0",
              borderRight: "1px solid #D4D4E0",
              alignItems: "center",
            }}
          >
            {data.hs.val}
          </div>
          <div
            style={{
              width: "5vh",
              backgroundColor: "white",
              color: "black",
              borderBottom: "1px solid #D4D4E0",
              borderRight: "1px solid #D4D4E0",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {data.qty.val}
          </div>
          <div
            style={{
              width: "16vh",
              backgroundColor: "white",
              color: "black",
              borderBottom: "1px solid #D4D4E0",
              borderRight: "1px solid #D4D4E0",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {data.unityOfMeasurement.val}
          </div>
          <div
            style={{
              width: "7vh",
              backgroundColor: "white",
              color: "black",
              borderBottom: "1px solid #D4D4E0",
              borderRight: "1px solid #D4D4E0",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {data.rate.val}
          </div>
          <div
            style={{
              width: "12vh",
              backgroundColor: "white",
              color: "black",
              borderBottom: "1px solid #D4D4E0",
              borderRight: "1px solid #D4D4E0",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {data.discount.per}
          </div>
          <div
            style={{
              width: "16vh",
              backgroundColor: "white",
              color: "black",
              borderBottom: "1px solid #D4D4E0",
              borderRight: "1px solid #D4D4E0",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {data.taxableValue.val}
          </div>
          <div
            style={{
              width: "15vh",
              backgroundColor: "white",
              color: "black",
              borderBottom: "1px solid #D4D4E0",
              borderRight: "1px solid #D4D4E0",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {data.taxableRate.val}
          </div>
          <div
            style={{
              width: "21vh",
              backgroundColor: "white",
              borderBottom: "1px solid #D4D4E0",
              borderRight: "1px solid #D4D4E0",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <div style={{ backgroundColor: "black", display: "flex" }}>
              <div
                style={{
                  backgroundColor: "white",
                  color: "black",
                  width: "7vh",
                  display: "flex",
                  justifyContent: "center",
                  borderRight: "1px solid #D4D4E0",
                  alignItems: "center",
                }}
              >
                {data.tax.CGST}
              </div>
              <div
                style={{
                  backgroundColor: "white",
                  color: "black",
                  width: "7vh",
                  display: "flex",
                  justifyContent: "center",
                  borderRight: "1px solid #D4D4E0",
                  alignItems: "center",
                }}
              >
                {data.tax.SGST}
              </div>
              <div
                style={{
                  backgroundColor: "white",
                  color: "black",
                  width: "7vh",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {data.tax.IGST}
              </div>
            </div>
          </div>
          <div
            style={{
              width: "10vh",
              backgroundColor: "white",
              color: "black",
              display: "flex",
              justifyContent: "center",
              borderBottom: "1px solid #D4D4E0",
              borderRight: "1px solid #D4D4E0",
              alignItems: "center",
            }}
          >
            {data.cess.val}
          </div>
          <div
            style={{
              width: "10vh",
              backgroundColor: "white",
              color: "black",
              display: "flex",
              justifyContent: "center",
              height: "7vh",
              borderBottom: "1px solid #D4D4E0",
              borderRight: "1px solid #D4D4E0",
              alignItems: "center",
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
                // paddingTop: "1.5vh",
                alignItems: "center",
              }}
            >
              <DeleteIcon />
            </div>
          </div>
        </div>
      </div>
    );
  };

  const TableLastBox = () => {
    return (
      <div
        style={{
          display: "flex",
        }}
      >
        <div
          style={{
            width: "77vh",
            height: "7vh",
            backgroundColor: "white",
            color: "black",
            display: "flex",
            justifyContent: "left",
            borderBottom: "1px solid #D4D4E0",
            borderRight: "1px solid #D4D4E0",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              paddingLeft: "10vh",
            }}
            onClick={handleNewRow}
          >
            <AddIcon color="primary" fontSize="medium" />
            <div
              style={{
                color: "#315BC2",
                fontFamily: "Poppins",
                fontSize: "15px",
                fontStyle: "normal",
                fontWeight: 600,
                lineHeight: "normal",
              }}
            >
              <ButtonComponent
                buttontext="Add another row"
                variant="text"
                sx={{
                  width: "175px",
                  color: "#315BC2",
                  fontFamily: "Poppins",
                  fontSize: "15px",
                  fontStyle: "normal",
                  fontWeight: 600,
                  lineHeight: "normal",
                }}
                onClick={handleNewRow}
              />
            </div>
          </div>
        </div>
        <div
          style={{
            width: "12vh",
            backgroundColor: "#9CAED82B",
            color: "black",
            display: "flex",
            justifyContent: "center",
            borderBottom: "1px solid #D4D4E0",
            borderRight: "1px solid #D4D4E0",
            alignItems: "center",
          }}
        >
          1
        </div>
        <div
          style={{
            width: "16vh",
            backgroundColor: "#9CAED82B",
            color: "black",
            display: "flex",
            justifyContent: "center",
            borderBottom: "1px solid #D4D4E0",
            borderRight: "1px solid #D4D4E0",
            alignItems: "center",
          }}
        >
          1
        </div>
        <div
          style={{
            width: "15vh",
            backgroundColor: "white",
            color: "black",
            borderBottom: "1px solid #D4D4E0",
            borderRight: "1px solid #D4D4E0",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          1
        </div>
        <div
          style={{
            width: "21vh",
            backgroundColor: "white",
            borderBottom: "1px solid #D4D4E0",
            borderRight: "1px solid #D4D4E0",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              backgroundColor: "#9CAED82B",
              color: "black",
              width: "7vh",
              display: "flex",
              justifyContent: "center",
              borderRight: "1px solid #D4D4E0",
              alignItems: "center",
            }}
          >
            1
          </div>
          <div
            style={{
              backgroundColor: "#9CAED82B",
              color: "black",
              width: "7vh",
              display: "flex",
              justifyContent: "center",
              borderRight: "1px solid #D4D4E0",
              alignItems: "center",
            }}
          >
            2
          </div>
          <div
            style={{
              backgroundColor: "#9CAED82B",
              color: "black",
              width: "7vh",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            3
          </div>
        </div>
        <div
          style={{
            width: "15vh",
            backgroundColor: "white",
            borderBottom: "1px solid #D4D4E0",
            borderRight: "1px solid #D4D4E0",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          ty
        </div>
        <div
          style={{
            width: "15vh",
            backgroundColor: "#9CAED82B",
            borderBottom: "1px solid #D4D4E0",
            borderRight: "1px solid #D4D4E0",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          12
        </div>
      </div>
    );
  };

  const CheckboxComp = () => {
    return (
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <div style={{ marginRight: "5vh" }}>
          <FormControlLabel
            value="top"
            control={<Checkbox />}
            label="RoundOff Total"
            labelPlacement="right"
          />
        </div>
        <div style={{ marginTop: "1.5vh" }}>
          Grand Total: <span>$ 256</span>
        </div>
      </div>
    );
  };

  const SaveComp = () => {
    return (
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est varius
          diam sollicitudin posuere nec laoreet. Nibh dictum feugiat lectus eget
          maecenas laoreet imperdiet orci.
        </div>
        <div style={{ display: "flex" }}>
          <div style={{ marginLeft: "5vh" }}>
            <ButtonComponent
              buttontext="Save Invoice"
              variant="contained"
              sx={{ width: "175px" }}
            />
          </div>
          <div style={{ marginLeft: "10vh" }}>
            <ButtonComponent
              buttontext="Cancel"
              variant="outlined"
              sx={{ width: "175px" }}
            />
          </div>
        </div>
      </div>
    );
  };
  return (
    <div>
      {dataItem.length > 0 ? (
        <div>
          {dataItem.map((data, index) => (
            <TableBox data={data} index={index} />
          ))}
        </div>
      ) : (
        ""
      )}

      {showNewRow ? <TableBodyAdd /> : ""}
      <TableLastBox />
      <CheckboxComp />
      <SaveComp />
    </div>
  );
};

export default TableBody;
