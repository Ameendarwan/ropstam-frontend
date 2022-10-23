import React, { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Snackbar, Alert } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import PrimaryButton from "components/buttons/primaryButton";
import AlertDialog from "components/alertDialog";
import "./style.scss";

export default function CarsList() {
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
                <IconButton onClick={() => handleShow("Edit")}>
                  <ModeEditIcon />
                </IconButton>
              </Tooltip>
            </div>
            <div className="p-10">
              <Tooltip title="Delete">
                <IconButton onClick={() => handleShow("Delete")}>
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
  const [showAlert, setShowAlert] = useState(false);
  const [alertType, setAlertType] = useState();
  const [alertMsg, setAlertMsg] = useState();
  const [showSnack, setShowSnack] = useState(false);

  const handleShow = (type) => {
    console.log("Yes Show");
    if (type === "Edit")
      setAlertMsg("Are you sure you want to update this car details?");
    else setAlertMsg("Are you sure you want to delete this car?");
    setAlertType(type);
    setShowAlert(true);
  };

  const handleConfirm = () => {
    if (alertType === "Edit") console.log("Yes Edit");
    if (alertType === "Delete") console.log("Yes Delete");
    setShowAlert(false);
    setShowSnack(true);
  };
  const handleCancel = () => {
    console.log("Cancel");
    setShowAlert(false);
  };
  const handleSnackClose = () => {
    setShowSnack(false);
  };
  return (
    <div className="cars__height">
      {showAlert && (
        <AlertDialog
          msg={alertMsg}
          title={alertType}
          handleCancel={handleCancel}
          handleConfirm={handleConfirm}
          showAlert={showAlert}
        />
      )}
      <Snackbar
        open={showSnack}
        autoHideDuration={3000}
        onClose={handleSnackClose}
        anchorOrigin={{ horizontal: "right", vertical: "top" }}
      >
        <Alert onClose={handleCancel} severity="success" sx={{ width: "100%" }}>
          This is a success message!
        </Alert>
      </Snackbar>
      <div className="display-flex mb-20">
        <Typography
          sx={{ flex: "1 1 100%", display: "flex", alignItems: "center" }}
          variant="h6"
          id="tableTitle"
          component="div"
        >
          Cars
        </Typography>
        <PrimaryButton
          btnType="submit"
          label={"Add New"}
          onClick={() => {}}
          classes="cars__btn"
        />
      </div>
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
