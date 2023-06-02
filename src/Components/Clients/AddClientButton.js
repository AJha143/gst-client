import React, {useState} from "react";
import Button from "../../customComponent/ButtonComponent";
import SimpleDialog from "./ClientForm";
import ErrorBoundary from "../../customComponent/ErrorBoundary";


export default function AddClientButton() {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
  };

  return (
    <ErrorBoundary>
      <Button variant="contained" color="primary" onClick={handleClickOpen} buttontext=" Add Clients" className="addClientBtn"/>
      <SimpleDialog open={open} onClose={handleClose} />
      </ErrorBoundary>
  );
}
