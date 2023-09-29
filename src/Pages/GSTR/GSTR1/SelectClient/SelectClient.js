import React, { useState } from "react";
import DropDownComponent from "../../../../customComponent/DropDown/DropDown";
import EnhancedTable1 from "../PrepareData/Table/AmendmentDetails";
import EnhancedTable2 from "../PrepareData/Table/InvoiceDetails";
import EnhancedTable3 from "../PrepareData/Table/SummaryLevelDetails";
import ReusableTabs from "../../../../customComponent/Tabs/CustomTab";
import "./SelectClient.scss";

const SelectClient = ({ renderStatus }) => {
  const [selectedOption, setSelectedOption] = useState("");
  const options = [
    { value: 10, label: "Ten" },
    { value: 20, label: "Twenty" },
    { value: 30, label: "Thirty" },
    { value: 40, label: "Forty" },
  ];
  const handleChangeDropDown = () => {
    renderStatus(1);
  };

  const tabs = [
    { label: "Invoice Details", content: <EnhancedTable1 /> },
    {
      label: "Amendment Details",
      content: <EnhancedTable2 />,
    },
    {
      label: "Summary Level Details",
      content: <EnhancedTable3 />,
    },
  ];

  return (
    <>
      <div className="mainContainer">
        <div className="boxContainer">
          <div className="header-text">
            Please select Client for whom you want file GSTR1
          </div>

          <DropDownComponent
            options={options}
            value={selectedOption}
            onChange={handleChangeDropDown}
            label="Select a client"
            outlined={1}
            className="dropDownStyle"
            style={{
              // Implementing inline styling as scss is not working
              fontFamily: "Poppins",
              fontSize: "14px",
              fontStyle: "normal",
              fontWeight: 600,
            }}            
          />
        </div>
      </div>
      <ReusableTabs tabs={tabs} />
    </>
  );
};

export default SelectClient;
