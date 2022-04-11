import React, { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { IconButton } from "@mui/material";
import CheckIcon from "@mui/icons-material/VerifiedOutlined";
import ReviewIcon from "@mui/icons-material/CommentBankRounded";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
// import Backdrop from "@mui/material/Backdrop";
// import Box from '@mui/material/Box';
import Modal from "@mui/material/Modal";
// import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
// import Typography from "@mui/material/Typography";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
// import FormControl from '@mui/material/FormControl';
import FormLabel from "@mui/material/FormLabel";

//modal=========
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "#8AFFFF",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
//====================

const TableTask = () => {
  //   const [milk, setMilk] = useState([""]);

  //   const handleChange = (event) => {
  //     setMilk([...milk, event.target.value]);
  //   };

  //   =====modal==============
  const [open, setOpen] = React.useState(false);
  const handleOpen = (Id) => {
    setOpen(true);
    console.log(Id);
  };
  const handleClose = () => setOpen(false);
  // ================================

  const [radio, setRadio] = useState(["NA"]);
  const handleRadio = (e) => {
    setRadio([e.target.value]);
  };

  const success = (id) => {
    setRadio(["Delivered suceessfully"]);
  };

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "name",
      headerName: "Name",
      width: 180,
      editable: true,
    },
    {
      field: "societyName",
      headerName: "Society Name",
      width: 180,
      editable: true,
    },
    {
      field: "mobile",
      headerName: "Mobile",
      type: "string",
      width: 160,

      editable: true,
    },
    {
      field: "quantity",
      headerName: "Quantity",
      type: "number",
      width: 110,
      editable: true,
      renderCell: (row) => {
        return (
          <>
            <Box sx={{ minWidth: 90 }}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Qty</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  //   value={milk}
                  //   defaultValue={1}
                  variant={"filled"}
                  label="Type"
                  //   onChange={handleChange}
                  sx={{ maxHeight: 38 }}
                >
                  <MenuItem value={1}>1Lit</MenuItem>
                  <MenuItem value={1.5}>1.5Lit</MenuItem>
                  <MenuItem value={2}>2Lit</MenuItem>
                  <MenuItem value={2.5}>2.5Lit</MenuItem>
                  <MenuItem value={3}>3Lit</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </>
        );
      },
    },
    {
      field: "milkType",
      headerName: "Milk Type",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 160,
      renderCell: (row) => {
        return (
          <>
            <Box sx={{ minWidth: 90 }}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Type</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  //   value={milk}
                  label="Type"
                  variant={"filled"}
                  //   onChange={handleChange}
                  sx={{ maxHeight: 38 }}
                >
                  <MenuItem value={`buffelo`}>Buffelo</MenuItem>
                  <MenuItem value={`cow`}>Cow</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </>
        );
      },
    },
    {
      field: "status",
      headerName: "Status",
      width: 200,
      editable: true,
    },
    {
      field: "action",
      headerName: "Action",
      width: 110,
      renderCell: (row) => {
        return (
          <>
            <IconButton color="primary" onClick={() => handleOpen(row.id)}>
              <ReviewIcon />
            </IconButton>
            <IconButton color="error" onClick={() => success(row.id)}>
              <CheckIcon />
            </IconButton>
          </>
        );
      },
    },
  ];
  const rows = [
    {
      id: 1,
      name: "Ravindra",
      societyName: "xyz",
      mobile: 9856566555,
      milkType: "cow",
      status: `${radio}`,
    },
    {
      id: 2,
      name: "Rahul",
      societyName: "aaaaa",
      mobile: 9756421589,
      milkType: "cow",
      status: `${radio}`,
    },
    {
      id: 3,
      name: "Abhi",
      societyName: "ksksksks",
      mobile: 9985641235,
      milkType: "cow",
      status: `${radio}`,
    },
    {
      id: 4,
      name: "Nitin",
      societyName: "Jon",
      mobile: 7845695156,
      milkType: "cow",
      status: `${radio}`,
    },
    {
      id: 5,
      name: "Jhon",
      societyName: "ddkkdk",
      mobile: 7894562565,
      milkType: "cow",
      status: `${radio}`,
    },
  ];

  return (
    <>
      <div style={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection
          disableSelectionOnClick
        />
      </div>

      {/* =====modal========== */}
      <Modal
        hideBackdrop
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box sx={{ ...style, width: "600px" }}>
          <h2 id="child-modal-title" style={{ textAlign: "center" }}>
            Not Delivered
          </h2>
          <p id="child-modal-description">
            <FormControl>
              <FormLabel
                id="demo-radio-buttons-group-label"
                sx={{
                  width: "auto",
                  marginBottom: 2,
                  marginLeft: "200px",
                  color: "tomato",
                }}
              >
                Expected Reason
              </FormLabel>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue={radio}
                name="radio-buttons-group"
              >
                <FormControlLabel
                  value="Door was closed"
                  control={<Radio />}
                  label="Door was closed.."
                  onChange={handleRadio}
                />
                <FormControlLabel
                  value="member out of town"
                  control={<Radio />}
                  label="member out of town"
                  onChange={handleRadio}
                />
                <FormControlLabel
                  value="Milk shortage"
                  control={<Radio />}
                  label="Milk shortage"
                  onChange={handleRadio}
                />
              </RadioGroup>
            </FormControl>
          </p>
          <Button
            onClick={handleClose}
            variant={"contained"}
            color={"warning"}
            fullWidth
          >
            Close
          </Button>
        </Box>
      </Modal>
    </>
  );
};

export default TableTask;
