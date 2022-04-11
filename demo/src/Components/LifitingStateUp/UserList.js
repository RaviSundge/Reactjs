import React from "react";

import { DataGrid } from "@mui/x-data-grid";

const UserList = ({ users }) => {
  const columns = [
    {
      field: "name",
      headerName: "Name",
      width: 150,
    },
    {
      field: "mobile",
      headerName: "Mobile",
      width: 150,
    },
    {
      field: "email",
      headerName: "Email",
      width: 150,
    },
    {
      field: "city",
      headerName: "City",
      width: 150,
    },
  ];
  return (
    <>
      <div style={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={users}
          columns={columns}
          getRowId={(row) => row.name + row.city}
        />
      </div>
    </>
  );
};

export default UserList;
