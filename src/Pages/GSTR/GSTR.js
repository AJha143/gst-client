import React, { useState } from "react";
// import CustomizedSteppers2 from "../../Components/Stepper/Stepper2";
// import FileUpload from "../../customComponent/uploadFile/UploadFile";
// import CustomInput from "../../customComponent/Table/CustomizedSelect/CustomInput";
// import CustomSelect from "../../customComponent/Table/CustomizedSelect/CustomSelect";
// import EnhancedTable from "../../customComponent/CommonTable/demo";
import Accordian from "../../Components/Accordion/Accordion";
import EnhancedTable from "../../customComponent/CommonTable/demo";
import GSTRtable from "./GSTR1/TableGSTR/GSTRtable";
import UploadDocTable from "./GSTR1/TableGSTR/UploadDocTable";

const options = [
  { label: "Ten", value: 10 },
  { label: "Twenty", value: 20 },
  { label: "Thirty", value: 30 },
];

const GSTR = () => {
  const activeStep = 0;
  const steps = ["Step 1", "Step 2", "Step 3"];

  const handleUploadSuccess = (data) => {
    // You can perform additional actions here after a successful upload.
  };

  const [age, setAge] = useState("");

  const handleSelectChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div>
      GSTR
      {/* <CustomizedSteppers2
        steps={steps}
        activeStep={activeStep}
        orientation="vertical"
      /> */}
      {/* <FileUpload
        uploadUrl="YOUR_UPLOAD_API_URL"
        onUpload={handleUploadSuccess}
      /> */}
      {/* <div>
        <div>
          <CustomInput
            id="demo-customized-textbox"
            style={{ width: "500px" }}
          />
        </div>

        <div>
          <CustomSelect
            value={age}
            onChange={handleSelectChange}
            options={options}
            style={{ width: "500px" }}
          />
        </div>
        <EnhancedTable />
      </div> */}
      <Accordian />
      <p>2nd table</p>
      <GSTRtable />
      <UploadDocTable />
    </div>
  );
};

export default GSTR;
