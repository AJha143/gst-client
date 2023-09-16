import { TableHead, TableRow, TableCell, Checkbox } from "@mui/material";

const CustomTableHeader = ({
  numSelected,
  rowCount,
  onSelectAllClick,
  columns,
  order,
  orderBy,
  checkboxRequired,
}) => {
  const checkbox = () =>
    checkboxRequired && (
      <TableCell padding="checkbox">
        <Checkbox
          color="primary"
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
            align="center"
            padding={headCell.disablePadding ? "none" : "normal"}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            {headCell.label}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};

export default CustomTableHeader;
