import { useState } from "react";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import TableSortLabel from "@mui/material/TableSortLabel";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import DeleteIcon from "@mui/icons-material/Delete";
import FilterListIcon from "@mui/icons-material/FilterList";
import { visuallyHidden } from "@mui/utils";
import { IVehicle } from "../common";
import { brandConversor } from "../mocks";
import { useNavigate } from "react-router-dom";

// function createData(
//   id: number,
//   brand: string,
//   model: string,
//   km: number,
//   price: number,
//   year: number,
//   concession: string
// ): Omit<IVehicle, "year"> & {
//   year: number;
// } {
//   return {
//     id,
//     brand,
//     model,
//     km,
//     price,
//     year,
//     concession,
//   };
// }

// const rows = [
//   createData(1, "Bmw", "X1", 12000, 30000, 2020, "Si"),
//   createData(2, "Bmw", "X2", 14000, 34000, 2021, "No"),
//   createData(3, "Bmw", "X3", 13000, 32000, 2022, "No"),
//   createData(4, "Bmw", "X2", 11000, 31000, 2020, "No"),
//   createData(5, "Mercedes", "CLA", 10000, 36000, 2024, "No"),
// ];

function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

type Order = "asc" | "desc";

function getComparator<Key extends keyof any>(
  order: Order,
  orderBy: Key
): (
  a: { [key in Key]: number | string },
  b: { [key in Key]: number | string }
) => number {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort<T>(
  array: readonly T[],
  comparator: (a: T, b: T) => number
) {
  const stabilizedThis = array.map((el, index) => [el, index] as [T, number]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

interface HeadCell {
  disablePadding: boolean;
  id: keyof IVehicle;
  label: string;
  numeric: boolean;
}

const headCells: readonly HeadCell[] = [
  {
    id: "brand",
    numeric: false,
    disablePadding: false,
    label: "Marca",
  },
  {
    id: "model",
    numeric: false,
    disablePadding: true,
    label: "Modelo",
  },
  {
    id: "price",
    numeric: true,
    disablePadding: false,
    label: "Precio",
  },
  {
    id: "km",
    numeric: true,
    disablePadding: false,
    label: "Kilometraje",
  },
  {
    id: "year",
    numeric: true,
    disablePadding: false,
    label: "Año",
  },
  {
    id: "concession",
    numeric: false,
    disablePadding: false,
    label: "Concesion",
  },
];

interface EnhancedTableProps {
  numSelected: number;
  onRequestSort: (property: keyof IVehicle) => void;
  order: Order;
  orderBy: string;
  rowCount: number;
}

function EnhancedTableHead(props: EnhancedTableProps) {
  const { order, orderBy, onRequestSort } = props;
  const createSortHandler =
    (property: keyof IVehicle) => (event: React.MouseEvent<unknown>) => {
      onRequestSort(property);
    };

  return (
    <TableHead>
      <TableRow>
        {headCells.map((headCell, idx) => (
          <TableCell
            key={headCell.id}
            align={idx === 0 ? "left" : "right"}
            padding={headCell.disablePadding ? "none" : "normal"}
            style={{ color: "#fff" }}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : "asc"}
              onClick={createSortHandler(headCell.id)}
              style={{ color: "#fff" }}
              sx={{
                color: "#fff",
                "&:hover": {
                  color: "#fff",
                },
              }}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === "desc" ? "sorted descending" : "sorted ascending"}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

interface EnhancedTableToolbarProps {
  numSelected: number;
  handleRemove: () => void;
}

function EnhancedTableToolbar(props: EnhancedTableToolbarProps) {
  const { numSelected, handleRemove } = props;

  return (
    <Toolbar
      style={{
        borderBottom: "1px solid #fff",
      }}
      sx={{
        background: "#000",
        padding: 0,
        ...(numSelected > 0 && {
          background: "#000",
          color: "#fff",
        }),
      }}
    >
      {numSelected > 0 ? (
        <Typography
          sx={{ flex: "1 1 100%" }}
          color="inherit"
          variant="subtitle1"
          component="div"
        >
          {numSelected} seleccionado(s)
        </Typography>
      ) : (
        <Typography
          sx={{ flex: "1 1 100%", color: "#fff" }}
          variant="h6"
          id="tableTitle"
          component="div"
        >
          Vehiculos
        </Typography>
      )}
      {numSelected > 0 ? (
        <Tooltip title="Delete">
          <IconButton onClick={() => handleRemove()}>
            <DeleteIcon sx={{ color: "#fff" }} />
          </IconButton>
        </Tooltip>
      ) : (
        <Tooltip title="Filter list">
          <IconButton>
            <FilterListIcon sx={{ color: "#fff" }} />
          </IconButton>
        </Tooltip>
      )}
    </Toolbar>
  );
}

interface TableProps {
  carsListData: Array<IVehicle>;
  setCarsListData: (v: Array<IVehicle>) => void;
}

export const EnhancedTable = ({
  carsListData,
  setCarsListData,
}: TableProps) => {
  const [order, setOrder] = useState<Order>("asc");
  const [orderBy, setOrderBy] = useState<keyof IVehicle>("brand");
  const [selected, setSelected] = useState<readonly number[]>([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const navigate = useNavigate();

  const handleRequestSort = (property: keyof IVehicle) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);

    const data = stableSort(
      carsListData as any,
      getComparator(isAsc ? "desc" : "asc", property)
    ).slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);
    console.log({ page, rowsPerPage, carsListData });
    setCarsListData(data as any);
  };

  const handleClick = (event: React.MouseEvent<unknown>, id: number) => {
    navigate(`/car/${id}`);
    // const selectedIndex = selected.indexOf(id);
    // let newSelected: readonly number[] = [];
    // if (selectedIndex === -1) {
    //   newSelected = newSelected.concat(selected, id);
    // } else if (selectedIndex === 0) {
    //   newSelected = newSelected.concat(selected.slice(1));
    // } else if (selectedIndex === selected.length - 1) {
    //   newSelected = newSelected.concat(selected.slice(0, -1));
    // } else if (selectedIndex > 0) {
    //   newSelected = newSelected.concat(
    //     selected.slice(0, selectedIndex),
    //     selected.slice(selectedIndex + 1)
    //   );
    // }
    // setSelected(newSelected);
  };

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const isSelected = (id: number) => selected.indexOf(id) !== -1;

  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - carsListData.length) : 0;

  const handleRemove = () => {
    const filteredData = [...carsListData].filter(
      (item) => !selected.includes(Number(item.id))
    );

    setCarsListData(filteredData);
    localStorage.setItem("CARS_LIST", JSON.stringify(filteredData));
  };

  return (
    <>
      <Box sx={{ width: "100%" }}>
        <Paper sx={{ width: "100%", mb: 2 }}>
          <EnhancedTableToolbar
            numSelected={selected.length}
            handleRemove={handleRemove}
          />
          <TableContainer>
            <Table
              sx={{
                minWidth: 750,
                backgroundColor: "#000",
              }}
              aria-labelledby="tableTitle"
              size={"medium"}
            >
              <EnhancedTableHead
                numSelected={selected.length}
                order={order}
                orderBy={orderBy}
                onRequestSort={handleRequestSort}
                rowCount={carsListData.length}
              />
              <TableBody sx={{}}>
                {carsListData.map((row, index) => {
                  const isItemSelected = isSelected(Number(row.id));
                  const labelId = `enhanced-table-checkbox-${index}`;

                  return (
                    <TableRow
                      hover
                      onClick={(event) => handleClick(event, Number(row.id))}
                      role="checkbox"
                      aria-checked={isItemSelected}
                      tabIndex={-1}
                      key={row.id}
                      selected={isItemSelected}
                      sx={{
                        cursor: "pointer",
                        "&:hover": {
                          backgroundColor: "#FF472F",
                          ".MuiTableCell-root": {
                            borderColor: "#FF472F",
                            background: "#FF472F",
                            color: "#fff",
                          },
                        },
                        "&.Mui-selected": {
                          backgroundColor: "#FF472F",
                          ".MuiTableCell-root": {
                            borderColor: "#FF472F",
                            color: "#fff",
                          },
                        },
                      }}
                    >
                      <TableCell
                        component="th"
                        id={labelId}
                        scope="row"
                        padding="none"
                        sx={{
                          cursor: "pointer",
                          color: "#fff",
                          padding: "0 16px",
                        }}
                      >
                        {brandConversor(row.brand as string)}
                      </TableCell>
                      <TableCell
                        align="right"
                        sx={{
                          cursor: "pointer",
                          color: "#fff",
                        }}
                      >
                        {row.model.toString().toUpperCase()}
                      </TableCell>
                      <TableCell
                        align="right"
                        sx={{
                          cursor: "pointer",
                          color: "#fff",
                        }}
                      >
                        {row.price?.toString().includes("$") ? "" : "$"}
                        {row.price}
                      </TableCell>
                      <TableCell
                        align="right"
                        sx={{
                          cursor: "pointer",
                          color: "#fff",
                          textAlign: "right",
                        }}
                      >
                        {row.km}
                      </TableCell>
                      <TableCell
                        align="right"
                        sx={{
                          cursor: "pointer",
                          color: "#fff",
                        }}
                      >
                        {row.year.toString().split("-")[0]}
                      </TableCell>
                      <TableCell
                        align="right"
                        sx={{
                          cursor: "pointer",
                          color: "#fff",
                        }}
                      >
                        {row.concession === "0" ? "Si" : "No"}
                      </TableCell>
                    </TableRow>
                  );
                })}
                {emptyRows > 0 && (
                  <TableRow
                    style={{
                      height: 53 * emptyRows,
                    }}
                  >
                    <TableCell colSpan={6} />
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={carsListData.length}
            rowsPerPage={rowsPerPage}
            labelRowsPerPage={"Resultados Por Pagina"}
            sx={{
              background: "#000",
              color: "#fff",
              ".MuiTablePagination-displayedRows": {
                // color: "red",
              },
              // ".MuiTablePagination-selectLabel": {
              //   color: "green",
              // },
              // "& .MuiTablePagination-icon": {
              //   color: "#fff",
              // },
              "& .MuiTablePagination-actions": {
                color: "#fff",
              },
            }}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Paper>
      </Box>
    </>
  );
};
