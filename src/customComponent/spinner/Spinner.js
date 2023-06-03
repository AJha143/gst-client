import React from "react";
import Dialog from "@material-ui/core/Dialog";
import { CircularProgress, Typography } from "@material-ui/core";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import "./style.scss";
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
