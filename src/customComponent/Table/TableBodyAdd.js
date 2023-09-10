import React, { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import CustomSelect from "./CustomizedSelect/CustomSelect";
import CustomInput from "./CustomizedSelect/CustomInput";
import ButtonComponent from "../ButtonComponent";
import AddIcon from "@mui/icons-material/Add";

const TableBodyAdd = () => {
  const [showNewRow, setShowNewRow] = useState(false);
  let gut;
  const handleNewRow = () => {
    setShowNewRow(true);
  };
  const [itemDescription, setItenDescription] = useState(null);
  const [serialNo, setSerialNo] = useState(null);
  const [itemType, setItemType] = useState("");
  const [hs, setHs] = useState(null);
  const [qty, setQty] = useState("");
  const [uom, setUom] = useState(null);
  const [rate, setRate] = useState("");
  const [discount, setDiscount] = useState("");
  const [taxableValue, setTaxableValue] = useState("");
  const [taxableRate, setTaxableRate] = useState(null);
  const [cgst, setCGST] = useState(null);
  const [sgst, setSGST] = useState(null);
  const [igst, setIGST] = useState(null);
  const [cess, setCess] = useState("");
  const [totalRow, setTotalRow] = useState(null);
  // const [del, setDel] = useState("");
  const data = {
    seialNo: { val: itemDescription },
    itemDescription: { val: serialNo },
    itemType: { val: itemType },
    hs: { val: hs },
    qty: { val: qty },
    unityOfMeasurement: { val: uom },
    rate: { val: rate },
    discount: { per: discount },
    taxableValue: { val: taxableValue },
    taxableRate: { val: taxableRate },
    tax: { CGST: cgst, SGST: sgst, IGST: igst },
    cess: { val: cess },
    totalRow: { val: totalRow },
  };

  const options = [
    { value: 10, label: "Ten" },
    { value: 20, label: "Twenty" },
    { value: 30, label: "Thirty" },
  ];

  const handleItemDescription = (event) => {
    setItenDescription(event.target.value);
  };

  const handleSerialNo = (event) => {
    const val = event.target.value;
    setSerialNo(val);
  };

  const handleItemType = (event) => {
    setItemType(event.target.value);
  };

  const handleHs = (event) => {
    setHs(event.target.value);
  };

  const handleQty = (e) => {
    setQty(e.target.value);
  };

  const handleUom = (event) => {
    setUom(event.target.value);
  };

  const handleRate = (e) => {
    setRate(e.target.value);
  };

  const handleDiscount = (e) => {
    setDiscount(e.target.value);
  };

  const handleTaxableValue = (e) => {
    setTaxableValue(e.target.value);
  };

  const handleTaxableRate = (event) => {
    setTaxableRate(event.target.value);
  };

  const handleCGST = (e) => {
    setCGST(e.target.value);
  };

  const handleSGST = (e) => {
    setSGST(e.target.value);
  };
  const handleIGST = (e) => {
    setIGST(e.target.value);
  };

  const handleCess = (e) => {
    setCess(e.target.value);
  };

  const handleTotalRow = (e) => {
    setTotalRow(e.target.value);
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
            width: "112vh",
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
            width: "15vh",
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
            width: "18vh",
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
            width: "18vh",
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
            width: "20vh",
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
            width: "20vh",
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

  return (
    <div>
      <div>
        <div
          style={{
            display: "flex",
          }}
        >
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
            <CustomInput
              id="demo-customized-textbox"
              label={serialNo}
              onChange={handleSerialNo}
              style={{
                width: "9.5vh",
              }}
            />
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
            <CustomSelect
              options={options}
              value={itemDescription}
              style={{ width: "24.5vh" }}
              onChange={handleItemDescription}
            />
          </div>
          <div
            style={{
              width: "15vh",
              backgroundColor: "white",
              color: "black",
              display: "flex",
              justifyContent: "center",
              borderBottom: "1px solid #D4D4E0",
              borderRight: "1px solid #D4D4E0",
              alignItems: "center",
            }}
          >
            <CustomSelect
              options={options}
              label={itemType}
              onChange={handleItemType}
              style={{ width: "14.5vh" }}
            />
          </div>
          <div
            style={{
              width: "15vh",
              backgroundColor: "white",
              color: "black",
              display: "flex",
              justifyContent: "center",
              borderBottom: "1px solid #D4D4E0",
              borderRight: "1px solid #D4D4E0",
              alignItems: "center",
            }}
          >
            <CustomInput
              id="demo-customized-textbox"
              style={{ width: "14.5vh" }}
              onChange={(e) => handleHs(e)}
            />
          </div>
          <div
            style={{
              width: "10vh",
              backgroundColor: "white",
              color: "black",
              borderBottom: "1px solid #D4D4E0",
              borderRight: "1px solid #D4D4E0",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <CustomInput
              id="demo-customized-textbox"
              style={{ width: "9.5vh" }}
              value={qty}
              onChange={(e) => handleQty(e)}
            />
          </div>
          <div
            style={{
              width: "25vh",
              backgroundColor: "white",
              color: "black",
              borderBottom: "1px solid #D4D4E0",
              borderRight: "1px solid #D4D4E0",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <CustomSelect
              options={options}
              value={uom}
              onChange={(e) => handleUom(e)}
              style={{ width: "24.5vh" }}
            />
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
            <CustomInput
              id="demo-customized-textbox"
              value={rate}
              onChange={(e) => handleRate(e)}
              style={{ width: "11.5vh" }}
            />
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
            <CustomInput
              id="demo-customized-textbox"
              value={discount}
              onChange={handleDiscount}
              style={{ width: "14.5vh" }}
            />
          </div>
          <div
            style={{
              width: "18vh",
              backgroundColor: "white",
              color: "black",
              borderBottom: "1px solid #D4D4E0",
              borderRight: "1px solid #D4D4E0",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <CustomInput
              id="demo-customized-textbox"
              value={taxableValue}
              onChange={(e) => handleTaxableValue(e)}
              style={{ width: "17.5vh" }}
            />
          </div>
          <div
            style={{
              width: "18vh",
              backgroundColor: "white",
              color: "black",
              borderBottom: "1px solid #D4D4E0",
              borderRight: "1px solid #D4D4E0",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <CustomSelect
              options={options}
              onChange={handleTaxableRate}
              style={{ width: "17.5vh" }}
            />
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
                width: "7vh",
                backgroundColor: "white",
                color: "black",
                display: "flex",
                justifyContent: "center",
                borderRight: "1px solid #D4D4E0",
                alignItems: "center",
              }}
            >
              <CustomInput
                id="demo-customized-textbox"
                value={cgst}
                onChange={(e) => handleCGST(e)}
                style={{ width: "100%" }}
              />
            </div>
            <div
              style={{
                width: "7vh",
                backgroundColor: "white",
                color: "black",
                display: "flex",
                justifyContent: "center",
                borderRight: "1px solid #D4D4E0",
                alignItems: "center",
              }}
            >
              <CustomInput
                id="demo-customized-textbox"
                value={sgst}
                onChange={(e) => handleSGST(e)}
                style={{ width: "6.5vh" }}
              />
            </div>
            <div
              style={{
                width: "7vh",
                backgroundColor: "white",
                color: "black",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <CustomInput
                id="demo-customized-textbox"
                value={igst}
                onChange={(e) => handleIGST(e)}
                style={{ width: "6.5vh" }}
              />
            </div>
          </div>
          <div
            style={{
              width: "20vh",
              backgroundColor: "white",
              color: "black",
              display: "flex",
              justifyContent: "center",
              borderBottom: "1px solid #D4D4E0",
              borderRight: "1px solid #D4D4E0",
              alignItems: "center",
            }}
          >
            <CustomInput
              id="demo-customized-textbox"
              value={cess}
              onChange={(e) => handleCess(e)}
              style={{ width: "18vh" }}
            />
          </div>
          <div
            style={{
              width: "20vh",
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
            <CustomInput
              id="demo-customized-textbox"
              value={totalRow}
              onChange={(e) => handleTotalRow(e)}
              style={{ width: "15vh" }}
            />
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
    </div>
  );
};

export default TableBodyAdd;
