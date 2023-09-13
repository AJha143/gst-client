// import {
//   TableHead,
//   TableRow,
//   TableCell,
//   Checkbox,
//   TableSortLabel,
// } from "@material-ui/core";

import {
  TableHead,
  TableRow,
  TableCell,
  Checkbox,
  TableSortLabel,
} from "@mui/material";

const CustomTableHeader = ({
  numSelected,
  rowCount,
  onSelectAllClick,
  columns,
  order,
  orderBy,
  handleSortLabelClick,
  checkboxRequired,
}) => {
  const handleOnSortClick = (property) => (event) => {
    if (!handleSortLabelClick) return;
    handleSortLabelClick(event, property);
  };
  const checkbox = () =>
    checkboxRequired && (
      <TableCell padding="checkbox">
        <Checkbox
          color="primary"
          // classes={{ colorSecondary: "checkboxColor" }}
          indeterminate={numSelected > 0 && numSelected < rowCount}
          checked={rowCount > 0 && numSelected === rowCount}
          onChange={onSelectAllClick}
          inputProps={{ "aria-label": "select all Table Data" }}
        />
      </TableCell>
    );
  return (
    <TableHead>
      <TableRow>
        {checkbox()}
        {columns.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? "right" : "left"}
            padding={headCell.disablePadding ? "none" : "normal"}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            {/* <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : "asc"}
              onClick={handleOnSortClick(headCell.id)}
            > */}
              {headCell.label}
            {/* </TableSortLabel> */}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};

export default CustomTableHeader;
