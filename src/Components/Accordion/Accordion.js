import React, { useState } from "react";
import Accordion from "../../customComponent/CustomAccordion/CustomAccordion";
import { summaryText } from "../ConstantData";
const Accordian = () => {
  const [selectedId, setSelectedId] = useState("");
  const handleClick = (id) => {
    setSelectedId((prev, current) => {
      console.log(prev);
      if (prev !== id) return id;
      return "";
    });
  };
  return summaryText.map(({title,id}) => (
    <Accordion
      key={id}
      expanded={selectedId === id}
      title={title}
      onClick={(e) => {
        handleClick(id);
      }}
      renderContent={() => <p>{"vgvjggvjhv"}</p>}
    />
  ));
};


export default Accordian