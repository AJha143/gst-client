import GroupIcon from "@mui/icons-material/Group";
import HomeIcon from "@mui/icons-material/Home";
import AssessmentIcon from "@mui/icons-material/Assessment";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import Clients from "../Pages/Clients/Clients";
import Home from "../Pages/Home/Home";
import HelpIcon from "@mui/icons-material/Help";
import NoteAltIcon from "@mui/icons-material/NoteAlt";
import LensIcon from "@mui/icons-material/Lens";
import TableB2B from "../Pages/GSTR/GSTR1/Summary/Table/TableB2B";
import TableB2C from "../Pages/GSTR/GSTR1/Summary/Table/TableB2C";
import TableAdvanceHSN from "../Pages/GSTR/GSTR1/Summary/Table/TableAdvanceHSN";
import TableB2COthers from "../Pages/GSTR/GSTR1/Summary/Table/TableB2Cothers";
import TableExportInvoice from "../Pages/GSTR/GSTR1/Summary/Table/TableExportInvoice";
import TableNIL from "../Pages/GSTR/GSTR1/Summary/Table/TableNIL";
import TableDocumentIssue from "../Pages/GSTR/GSTR1/Summary/Table/TableDocumentIssue";

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
    subIcon: <LensIcon fontSize="small" />,
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
    icon: <NoteAltIcon />,
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
  businessName: "Please Enter Valid Name.",
  phoneNumber: "Please Enter Valid Phone Number.",
  email: "Please Enter Valid Email.",
  gstn: "Please Enter Valid GSTN",
  GSTNUsername: "Please Enter Valid GSTN UserName",
  address: "Please Enter Your Address",
  password:
    "Password should be minimum 6 digits & contain one lower, upper, numeric & special Characters.",
};

export const formValidationRegex = {
  name: /^[a-zA-Z\s]+$/,
  businessName: /^[a-zA-Z\s]+$/,
  phoneNumber: /^\d{10}$/,
  email: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
  password: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/,
  address: /^[a-zA-Z\s]+$/,
  gstn: /^[A-Z0-9]*$/,
  GSTNUsername: /^[A-Z0-9!@#$%^&*()_+=\-{}[\]:;<>|./?,`~]*$/,
};

export const inputFieldDetails = [
  {
    type: "text",
    fieldName: "businessName",
    col: 12,
    label: "Business Name",
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
    type: "address",
    fieldName: "address",
    col: 12,
    label: "Address",
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
export const summaryText = [
  {
    id: 1,
    title: "B2B and Credit Debit Note (Registered) Section Summary",
    content: <TableB2B />,
  },
  {
    id: 2,
    title: "B2C Large and Credit Debit Note (Unregistered) Section Summary",
    content: <TableB2C />,
  },
  {
    id: 3,
    title:
      "Advances Received (Tax Liability), Adjustment of Advances and HSN Section Summary",
    content: <TableAdvanceHSN />,
  },
  { id: 4, title: "B2C Others - Section Summary", content: <TableB2COthers/> },
  { id: 5, title: "Export Invoices Section Summary", content: <TableExportInvoice/> },
  { id: 6, title: "NIL Section Summary", content: <TableNIL/> },
  { id: 7, title: "Documents Issued Section Summary", content: <TableDocumentIssue /> },
];
