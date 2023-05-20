import GroupIcon from "@mui/icons-material/Group";
import HomeIcon from '@mui/icons-material/Home';
import AssessmentIcon from "@mui/icons-material/Assessment";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import Clients from "../Pages/Clients/Clients";
import Home from "../Pages/Home/Home";
import TagIcon from '@mui/icons-material/Tag';
import HelpIcon from '@mui/icons-material/Help';
import NoteAltIcon from '@mui/icons-material/NoteAlt';

export const drawerItems = [
  {
    hasMultiple: false,
    label: "Home",
    path: "/",
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
    subIcon: <TagIcon fontSize="small"/>,
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
