import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";

const columns = [
  { field: "id", headerName: "ID", flex: 1 },
  { field: "category", headerName: "Category", flex: 1 },
  { field: "color", headerName: "Color", flex: 1 },
  { field: "model", headerName: "Model", flex: 1 },
  { field: "registration-no", headerName: "Registration No", flex: 1 },
  { field: "owner", headerName: "Owner", flex: 1 },
  {
    field: "Actions",
    headerName: "Actions",
    flex: 1,
    // description: "This column has a value getter and is not sortable.",
    // sortable: false,
    renderCell: (params) => {
      return (
        <div className="display-flex">
          <div className="p-10">
            <Tooltip title="Edit">
              <IconButton>
                <ModeEditIcon />
              </IconButton>
            </Tooltip>
          </div>
          <div className="p-10">
            <Tooltip title="Delete">
              <IconButton>
                <DeleteIcon />
              </IconButton>
            </Tooltip>
          </div>
        </div>
      );
    },
  },
];

const rows = [
  { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
  { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
  { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
  { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
  { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
  { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
  { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
  { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
  { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
];

export default function CategoriesList() {
  return (
    <div style={{ height: 600 }}>
      <Typography
        sx={{ flex: "1 1 100%" }}
        variant="h6"
        id="tableTitle"
        component="div"
      >
        Categories
      </Typography>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[5]}
        // checkboxSelection
      />
    </div>
  );
}
