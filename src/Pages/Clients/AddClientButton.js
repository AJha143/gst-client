import React, {useState} from "react";
import Button from "../../ReuseComponent/ButtonComponent";
import './AddClintButton.scss'
import SimpleDialog from "./ClientForm";


export default function AddClientButton() {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="contained" color="primary" onClick={handleClickOpen} buttontext=" Add Clients" className="addClientBtn"/>
      <SimpleDialog open={open} onClose={handleClose} />
    </div>
  );
}
