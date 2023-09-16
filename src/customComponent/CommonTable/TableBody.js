import React from "react";
import { TableBody, TableRow, TableCell, Checkbox } from "@mui/material";
import "./style.css";

const CustomTableBody = ({
  page,
  rowsPerPage,
  order,
  orderBy,
  handleRowClick,
  selected,
  columns,
  data,
  checkboxRequired
}) => {
  const isSelected = (id) => selected.indexOf(id) !== -1;
  const checkbox = (isItemSelected, labelId) =>
    checkboxRequired && (
      <TableCell padding="checkbox">
        <Checkbox
          color="primary"
          checked={isItemSelected}
          inputProps={{ "aria-labelledby": labelId }}
        />
      </TableCell>
    );
  const stableSort = (array = [], orderBy = "calories", order = "asc") => {
    const comparator = (firstEle, nextEle) => {
      let orderedFirstEle = firstEle;
      let orderedSecondEle = nextEle;
      if (orderBy) {
        orderedFirstEle = firstEle[orderBy];
        orderedSecondEle = nextEle[orderBy];
      }
      return (
        (orderedFirstEle < orderedSecondEle ? -1 : 1) *
        (order === "asc" ? 1 : -1)
      );
    };
    return array.sort(comparator);
  };

  return (
    <TableBody>
      {stableSort(data, orderBy, order)
        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
        .map((row, index) => {
          const isItemSelected = isSelected(row.name);
          const labelId = `enhanced-table-checkbox-${index}`;
          return (
            <TableRow
              onClick={(event) => handleRowClick(event, row.name)}
              role="checkbox"
              aria-checked={isItemSelected}
              tabIndex={-1}
              key={row.name}
              selected={isItemSelected}
              classes={{ selected: "selectedRow" }}
            >
              {checkbox(isItemSelected, labelId)}
              {columns.map &&
                columns.map(({ id }) => (
                  <TableCell scope="row" align="center">
                    {row[id]}
                  </TableCell>
                ))}
            </TableRow>
          );
        })}
    </TableBody>
  );
};
export default CustomTableBody;
