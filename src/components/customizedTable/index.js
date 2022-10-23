import React, { useState, useEffect } from "react";
import _ from "lodash";
import { DataGrid } from "@mui/x-data-grid";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import Tooltip from "@mui/material/Tooltip";
import { Snackbar, Alert } from "@mui/material";
import Typography from "@mui/material/Typography";
import PrimaryButton from "components/buttons/primaryButton";
import AlertDialog from "components/alertDialog";
import "./style.scss";

export default function CustomizedTable({ heading, columns, rows, title }) {
  let update = "Update";
  let delt = "Delete";
  let actions = {
    field: "Actions",
    headerName: "Actions",
    flex: 1,
    renderCell: (params) => {
      return (
        <div className="display-flex">
          <div className="p-10">
            <Tooltip title={update}>
              <IconButton onClick={() => handleShow(update)}>
                <ModeEditIcon />
              </IconButton>
            </Tooltip>
          </div>
          <div className="p-10">
            <Tooltip title={delt}>
              <IconButton onClick={() => handleShow(delt)}>
                <DeleteIcon />
              </IconButton>
            </Tooltip>
          </div>
        </div>
      );
    },
  };
  const [modifiedColumn, setModifiedColumn] = useState([]);
  const [showAlert, setShowAlert] = useState(false);
  const [alertType, setAlertType] = useState();
  const [alertMsg, setAlertMsg] = useState();
  const [showSnack, setShowSnack] = useState(false);
  const [snackMsg, setSnackMsg] = useState(false);
  const [editRow, setEditRow] = useState({});
  const [updateRow, setUpdateRow] = useState({});

  useEffect(() => {
    setModifiedColumn([...columns, actions]);
  }, [columns]);

  const handleShow = (type) => {
    console.log("Yes Show");
    if (type === update)
      setAlertMsg(`Are you sure you want to update this ${title} details?`);
    if (type === delt)
      setAlertMsg(`Are you sure you want to delete this ${title}?`);
    setAlertType(type);
    setShowAlert(true);
  };

  const handleConfirm = () => {
    if (alertType === update)
      setSnackMsg("Record has been updated successfully!");
    if (alertType === delt)
      setSnackMsg("Record has been deleted successfully!");
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

  const handleEditRowsModelChange = React.useCallback((newModel) => {
    if (!_.isEmpty(newModel)) setEditRow(newModel);
  }, []);

  const handleEditStop = (params, e) => {
    let data = {
      ...params.row,
      [params["field"]]: editRow[params.id][params.field].value,
    };
    console.log("GG", data);
    setUpdateRow(data);
    e.defaultMuiPrevented = true;
  };

  return (
    <div className="table__height">
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
          {snackMsg}
        </Alert>
      </Snackbar>
      <div className="display-flex mb-20">
        <Typography
          sx={{ flex: "1 1 100%", display: "flex", alignItems: "center" }}
          variant="h6"
          id="tableTitle"
          component="div"
        >
          {heading}
        </Typography>
        <PrimaryButton
          btnType="submit"
          label={"Add New"}
          onClick={() => {}}
          classes="table__btn"
        />
      </div>
      {modifiedColumn && (
        <DataGrid
          rows={rows}
          columns={modifiedColumn}
          editRowsModel={editRow}
          onEditRowsModelChange={handleEditRowsModelChange}
          onCellEditStop={handleEditStop}
          pageSize={10}
          rowsPerPageOptions={[5]}
          // checkboxSelection
        />
      )}
    </div>
  );
}
