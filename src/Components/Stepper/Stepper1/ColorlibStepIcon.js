import React from "react";
import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import SettingsIcon from "@mui/icons-material/Settings";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import VideoLabelIcon from "@mui/icons-material/VideoLabel";
import { PersonPinCircle } from "@mui/icons-material";
import ModeIcon from "@mui/icons-material/Mode";
import ReceiptIcon from "@mui/icons-material/Receipt";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import SummarizeIcon from "@mui/icons-material/Summarize";
import ViewListIcon from "@mui/icons-material/ViewList";

const ColorlibStepIconRoot = styled("div")(({ theme, ownerState }) => ({
  backgroundColor:
    theme.palette.mode === "dark" ? theme.palette.grey[700] : "#ccc",
  zIndex: 1,
  color: "#fff",
  width: 75,
  height: 75,
  display: "flex",
  borderRadius: "50%",
  justifyContent: "center",
  alignItems: "center",
  ...(ownerState.active && {
    backgroundImage:
      "linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)",
    boxShadow: "0 4px 10px 0 rgba(0,0,0,.25)",
  }),
  ...(ownerState.completed && {
    backgroundImage:
      "linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)",
  }),
}));

function ColorlibStepIcon(props) {
  const { active, completed, className } = props;

  const icons = {
    1: <ModeIcon fontSize="large" />,
    2: <ReceiptIcon fontSize="large" />,
    3: <FileUploadIcon fontSize="large" />,
    4: <SummarizeIcon fontSize="large" />,
    5: <ViewListIcon fontSize="large" />,
  };

  return (
    <ColorlibStepIconRoot
      ownerState={{ completed, active }}
      className={className}
    >
      {icons[String(props.icon)]}
    </ColorlibStepIconRoot>
  );
}

ColorlibStepIcon.propTypes = {
  active: PropTypes.bool,
  className: PropTypes.string,
  completed: PropTypes.bool,
  icon: PropTypes.node,
};

export default ColorlibStepIcon;
