import React from "react";
import { Table } from "@mui/material";
import { TableContainer } from "@mui/material";
import { Paper } from "@mui/material";
import { IconButton } from "@mui/material";
import { Tooltip } from "@mui/material";
import Delete from "@mui/icons-material/Delete";
import { FilterList } from "@mui/icons-material";
import TableBody from "./TableBody";
import TableHeader from "./TableHeader";
import TablePagination from "./TablePagination";
import TableToolbar from "./TableToolbar";
import "./style.css";

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Donut", 452, 25.0, 51, 4.9),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
  createData("Honeycomb", 408, 3.2, 87, 6.5),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Jelly Bean", 375, 0.0, 94, 0.0),
  createData("KitKat", 518, 26.0, 65, 7.0),
  createData("Lollipop", 392, 0.2, 98, 0.0),
  createData("Marshmallow", 318, 0, 81, 2.0),
  createData("Nougat", 360, 19.0, 9, 37.0),
  createData("Oreo", 437, 18.0, 63, 4.0),
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

export default function EnhancedTable() {
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

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  const toolbarRenderFns = () => {
    if (selected.length > 0) {
      return (
        <Tooltip title="Delete">
          <IconButton aria-label="delete">
            <Delete />
          </IconButton>
        </Tooltip>
      );
    } else {
      return (
        <Tooltip title="Filter list">
          <IconButton aria-label="filter list">
            <FilterList />
          </IconButton>
        </Tooltip>
      );
    }
  };
  return (
    <div>
      <Paper>
        {/* <TableToolbar
          title="Nutrition"
          numSelected={selected.length}
          renderFunction={toolbarRenderFns}
        /> */}
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
        {/* <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        /> */}
      </Paper>
    </div>
  );
}
