import React from "react";
import { Table } from "@mui/material";
import { TableContainer } from "@mui/material";
import { Paper } from "@mui/material";
import TableHeader from "../../../../customComponent/CommonTable/TableHeader";
import TableBody from "../../../../customComponent/CommonTable/TableBody";
import "./style.css";

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("B2B", 305, 3.7, 67, 4.3),
  createData("B2B", 452, 25.0, 51, 4.9),
  createData("B2B", 262, 16.0, 24, 6.0),
];

const headCells = [
  {
    id: "name",
    numeric: false,
    disablePadding: true,
    label: "Type of Document",
  },
  {
    id: "calories",
    numeric: true,
    disablePadding: false,
    label: "Need to be Uploaded",
  },
  {
    id: "fat",
    numeric: true,
    disablePadding: false,
    label: "Uploaded to GSTN",
  },
];

export default function UploadDocTable() {
  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState("calories");
  const [selected, setSelected] = React.useState([]);

  const handleRequestSort = (property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = rows.map((n) => n.name);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClick = (name) => {
    let newSelected = [...selected];
    if (!selected.includes(name)) {
      newSelected.push(name);
    } else {
      newSelected = selected.filter((id) => id !== name);
    }
    setSelected(newSelected);
  };

  return (
    <div>
      <Paper>
        <TableContainer>
          <Table aria-labelledby="tableTitle" aria-label="enhanced table">
            <TableHeader
              columns={headCells}
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              handleSortLabelClick={handleRequestSort}
              rowCount={rows.length}
            />
            <TableBody
              columns={headCells}
              data={rows}
              page={0}
              order={order}
              orderBy={orderBy}
              selected={selected}
              rowsPerPage={1000}
              handleRowClick={handleClick}
            />
          </Table>
        </TableContainer>
      </Paper>
    </div>
  );
}
