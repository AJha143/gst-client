import React, { useState } from "react";
import Accordion from "../../customComponent/CustomAccordion/CustomAccordion";
import { summaryData } from "../AccordianData";
const Accordian = () => {
  const [selectedId, setSelectedId] = useState("");
  const handleClick = (id) => {
    setSelectedId((prev, _current) => {
      if (prev !== id) return id;
      return "";
    });
  };
  return summaryData.map(({ title, id, content }) => (
    <Accordion
      key={id}
      expanded={selectedId === id}
      title={title}
      onClick={(e) => {
        handleClick(id);
      }}
      renderContent={() => <p>{content}</p>}
    />
  ));
};

export default Accordian;
