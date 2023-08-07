import React, { useState } from "react";
import Accordion from "./Accordion";
const xyz = ["ABCD", "XYZ", "PQRS"];
const Accordian = () => {
  const [selectedId, setSelectedId] = useState("");
  const handleClick = (id) => {
    setSelectedId((prev, current) => {
      console.log(prev);
      if (prev !== id) return id;
      return "";
    });
  };
  return xyz.map((id) => (
    <Accordion
      key={id}
      expanded={selectedId === id}
      title={id}
      onClick={(e) => {
        handleClick(id);
      }}
      renderContent={() => <p>{id}</p>}
    />
  ));
};


export default Accordian