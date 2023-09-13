import React from "react";
import { Table } from "@mui/material";
import { TableContainer } from "@mui/material";
import { Paper } from "@mui/material";

import TableBody from "../../../../../customComponent/CommonTable/TableBody"
import TableHeader from "../../../../../customComponent/CommonTable/TableHeader";
import "../../../../../customComponent/CommonTable/style.css";

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Donut", 452, 25.0, 51, 4.9),
  createData("Eclair", 262, 16.0, 24, 6.0),
];

const headCells = [
  {
    id: "name",
    numeric: false,
    disablePadding: true,
    label: "Dessert (100g serving)",
  },
  { id: "calories", numeric: true, disablePadding: false, label: "Calories" },
  { id: "fat", numeric: true, disablePadding: false, label: "Fat (g)" },
  { id: "carbs", numeric: true, disablePadding: false, label: "Carbs (g)" },
  { id: "protein", numeric: true, disablePadding: false, label: "Protein (g)" },
];

export default function EnhancedTable3() {
  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState("calories");
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(1000);

  const handleRequestSort = (event, property) => {
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

  const handleClick = (event, name) => {
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
              //   checkboxRequired
            />
            <TableBody
              columns={headCells}
              data={rows}
              page={page}
              order={order}
              orderBy={orderBy}
              selected={selected}
              rowsPerPage={rowsPerPage}
              //   checkboxRequired
              handleRowClick={handleClick}
            />
          </Table>
        </TableContainer>
      </Paper>
    </div>
  );
}
