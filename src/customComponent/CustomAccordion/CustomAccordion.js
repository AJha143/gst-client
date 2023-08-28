import "./CustomAccordion.scss";
import React from "react";
import { Accordion,AccordionSummary,AccordionDetails ,Typography } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const CustomAccordian = (props) => {
  const { renderContent, title, expanded, onClick, key } = props;
  const handleClick = () => {
    if (!onClick) return;
    onClick();
  };
  return (
    <div className="accordionContainer">
      <Accordion
        elevation={4}
        classes={{ root: "customAcc" }}
        expanded={expanded}
        onClick={handleClick}
        key={key}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel-content"
          id="panel-header"
        >
          <Typography>{title}</Typography>
        </AccordionSummary>
        <AccordionDetails>{renderContent && renderContent()}</AccordionDetails>
      </Accordion>
    </div>
  );
};

export default CustomAccordian;
