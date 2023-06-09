import React from "react";
import Dialog from "@mui/material/Dialog";
import { CircularProgress, Typography } from "@mui/material";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import "./Spinner.scss";
export default function CustomSpinner({ open = false, spinnerText = "" }) {
  return (
    <React.Fragment>
      <Dialog
        maxWidth={"xs"}
        open={open}
        aria-labelledby="spinner"
        classes={{ paperWidthXs: "dialogPaper" }}
      >
        <DialogContent classes={{ root: "spinnerDialogContent" }}>
          <DialogContentText>
            <CircularProgress size={80} className="customCircularSpinner" />
            <Typography variant="h6" className="spinnerText">
              {spinnerText || "Please wait while we load the data ... "}
            </Typography>
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </React.Fragment>
  );
}
