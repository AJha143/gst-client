import { Typography } from "@mui/material";
import  Accordion  from "../../../../Components/Accordion/Accordion";
import './Summary.scss'

const Summary = () => {
  return (<>
  <Typography variant="h5" className="summary-heading">GSTR-1 Summary for July 2022</Typography>
  <Typography variant="P" className="summary-para">This is the summary fetched from Government’s GSTN for <span>GSTN: {"24BFDPG0138K2Z2"}</span>  and <span>Return Period: {"072017"}</span> </Typography>

  <Accordion/>
  </>);
};

export default Summary;
