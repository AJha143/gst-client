import "./CustomAccordian.scss";
import React from "react";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

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
