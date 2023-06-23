import warn from "./warn.png";
import "./Error.scss";
import { Paper } from "@mui/material";
const error = () => {
  return (
    <>
    <Paper elevation={3}>
      <div className="error-text alert-opps">
        <img src={warn} alt="alert" className="image" />
        <div className="error-text alert-opps">
          <h1> Opps!!</h1>
          <h2>Something went wrong..</h2>
        </div>
      </div>
      </Paper>
    </>
  );
};

export default error;