import GroupIcon from "@mui/icons-material/Group";
import HomeIcon from '@mui/icons-material/Home';
import AssessmentIcon from "@mui/icons-material/Assessment";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import Clients from "../Pages/Clients/Clients";
import Home from "../Pages/Home/Home";
import HelpIcon from '@mui/icons-material/Help';
import NoteAltIcon from '@mui/icons-material/NoteAlt';
import Crop169Icon from '@mui/icons-material/Crop169';

export const drawerItems = [
  {
    hasMultiple: false,
    label: "Home",
    path: "/home",
    icon: <HomeIcon />,
    page: <Home />,
  },
  {
    hasMultiple: false,
    label: "Clients",
    path: "/clients",
    icon: <GroupIcon />,
    page: <Clients />,
  },
  {
    hasMultiple: false,
    label: "Reports",
    path: "/reports",
    icon: <AssessmentIcon />,
  },
  {
    hasMultiple: true,
    label: "GSTR",
    icon: <InsertDriveFileIcon />,
    path: "/gstr",
    subIcon: <Crop169Icon fontSize="small"/>,
    subGSTR: [
      { name: "GSTR-1", location: "/gstr/gstr1" },
      { name: "GSTR-3B", location: "/gstr/gstr3b" },
      { name: "IFF (QRMP)", location: "/gstr/iff" },
      { name: "CMP-0B", location: "/gstr/cmp" },
      { name: "GSTR-4", location: "/gstr/gstr4" },
      { name: "GSTR-9", location: "/gstr/gstr9" },
      { name: "GSTR-9C", location: "/gstr/gstr9c" },
    ],
  },
  {
    hasMultiple: false,
    label: "Challan",
    icon: <NoteAltIcon/>,
    path: "/challan",
  },
  {
    hasMultiple: false,
    label: "Products",
    icon: <LocalMallIcon />,
    path: "/products",
  },
  {
    hasMultiple: false,
    label: "Help and Support",
    icon: <HelpIcon />,
    path: "/helpandsupport",
  },

];









export const formInputFieldErrMsg = {
  name: "Please Enter Valid Name.",
  firstName: "Please Enter Valid Name.",
  lastName: "Please Enter Valid Name.",
  phoneNumber: "Please Enter Valid Phone Number.",
  email: "Please Enter Valid Email.",
  gstn:"Please Enter Valid GSTN",
  GSTNUsername :"Please Enter Valid GSTN UserName",
  address: "Please Enter Your Address",
  password:
    "Password should be minimum 6 digits & contain one lower, upper, numeric & special Characters.",
};

export const formValidationRegex = {
  name: /^[a-zA-Z\s]+$/,
  firstName: /^[a-zA-Z\s]+$/,
  lastName: /^[a-zA-Z\s]+$/,
  phoneNumber: /^\d{10}$/,
  email: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
  password: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/,
  address: /^(\d{1,}) [a-zA-Z0-9\s]+(\,)? [a-zA-Z]+(\,)? [A-Z]{2} [0-9]{5,6}$/,
  gstn: /^[0-9]{2}[A-Z]{5}""[0-9]{4}[A-Z]{1}[""1-9A-Z]{1}Z[0-9A-Z]{1}$/,
  GSTNUsername : /^[a-zA-Z0-9]+([._]?[a-zA-Z0-9]+)*$/,
};

export const inputFieldDetails = [
  {
    type: "text",
    fieldName: "firstName",
    col: 6,
    label: "First Name",
    variant: "outlined",
    required: true,
    classes: { root: "customTextField" },
  },
  {
    type: "text",
    fieldName: "lastName",
    col: 6,
    label: "Last Name",
    variant: "outlined",
    required: true,
    classes: { root: "customTextField" },
  },
  {
    type: "text",
    fieldName: "gstn",
    col: 12,
    label: "GSTN",
    variant: "outlined",
    required: true,
    classes: { root: "customTextField" },
  },
  {
    type: "email",
    fieldName: "email",
    col: 12,
    label: "Email",
    variant: "outlined",
    required: true,
    classes: { root: "customTextField" },
  },
  {
    type: "address",
    fieldName: "address",
    col: 12,
    label: "Address",
    variant: "outlined",
    required: true,
    classes: { root: "customTextField" },
  },
  {
    type: "tel",
    fieldName: "phoneNumber",
    col: 12,
    label: "Phone Number",
    variant: "outlined",
    required: true,
    classes: { root: "customTextField" },
  },
  {
    type: "text",
    fieldName: "GSTNUsername",
    col: 12,
    label: "GSTN Username",
    variant: "outlined",
    required: true,
    classes: { root: "customTextField" },
  },
];