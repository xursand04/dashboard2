import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataInvoices } from "../../data/mockData";
import Header from "../../components/Header";
import { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import ColorizeIcon from "@mui/icons-material/Colorize";
const Invoices = () => {
  const theme = useTheme();

  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      <Header title="INVOICES" subtitle="List of Invoice Balances" />
      <Box
        sx={{
          border: "1px solid gray",
          height: "100vh",
          position: "relative",
          overflow: "auto",
        }}
      >
        <Box
          sx={{
            height: "64px",
            background: colors.blueAccent[600],
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "0 10px",
            marginBottom: "3px",
            position: "relative",
          }}
        >
          <p style={{ margin: "0" }}>Course name</p>
          <p style={{ margin: "0" }}>Group name</p>
          <p style={{ margin: "0" }}>Bolalar soni</p>
          <p style={{ margin: "0" }}>Teacher</p>
          <p style={{ margin: "0" }}>Start time</p>
          <p style={{ margin: "0" }}>Close time</p>
          <p style={{ margin: "0" }}>Start date</p>
          <p style={{ margin: "0" }}>Close date</p>
          <p style={{ margin: "0" }}>Number zone</p>
          <p style={{ margin: "0" }}>Cost</p>
          <p style={{ margin: "0" }}>Money time</p>
          <p style={{ margin: "0" }}>Actions</p>
        </Box>
        <Box sx={{ overflow: "auto", height: "auto", position: "relative" }}>
          {mockDataInvoices.map((items) => (
            <Box key={items.id}>
              <table
                style={{
                  width: "100%",
                  height: "100%",
                }}
              >
                <tr>
                  <th>
                    <input
                      style={{
                        width: "110px",
                        background: "transparent",
                        border: "none",
                        outline: "none",
                        color: "white",
                      }}
                      type="text"
                      value={items.courseName}
                    />
                  </th>
                  <th>
                    <input
                      style={{
                        width: "90px",
                        background: "transparent",
                        border: "none",
                        outline: "none",
                        color: "white",
                      }}
                      name="groupname"
                      type="text"
                      value={items.groupName}
                    />
                  </th>
                  <th>
                    <input
                      style={{
                        width: "100px",
                        background: "transparent",
                        border: "none",
                        outline: "none",
                        color: "white",
                      }}
                      type="text"
                      value={items.numberChildren}
                    />
                  </th>
                  <th>
                    <input
                      style={{
                        width: "80px",
                        background: "transparent",
                        border: "none",
                        outline: "none",
                        color: "white",
                      }}
                      type="text"
                      value={items.teacher}
                    />
                  </th>
                  <th>
                    <input
                      style={{
                        width: "80px",
                        background: "transparent",
                        border: "none",
                        outline: "none",
                        color: "white",
                      }}
                      type="text"
                      value={items.startTime}
                    />
                  </th>
                  <th>
                    <input
                      style={{
                        width: "90px",
                        background: "transparent",
                        border: "none",
                        outline: "none",
                        color: "white",
                      }}
                      type="text"
                      value={items.closeTime}
                    />
                  </th>
                  <th>
                    <input
                      style={{
                        width: "90px",
                        background: "transparent",
                        border: "none",
                        outline: "none",
                        color: "white",
                      }}
                      type="text"
                      value={items.startDate}
                    />
                  </th>
                  <th>
                    <input
                      style={{
                        width: "90px",
                        background: "transparent",
                        border: "none",
                        outline: "none",
                        color: "white",
                      }}
                      type="text"
                      value={items.closeDate}
                    />
                  </th>
                  <th>
                    <input
                      style={{
                        width: "70px",
                        background: "transparent",
                        border: "none",
                        outline: "none",
                        color: "white",
                      }}
                      type="text"
                      value={items.numberZona}
                    />
                  </th>
                  <th style={{ fontSize: "12px" }}>
                    <input
                      style={{
                        width: "90px",
                        background: "transparent",
                        border: "none",
                        outline: "none",
                        color: "white",
                      }}
                      type="text"
                      value={items.cost}
                    />
                  </th>
                  <th>
                    <input
                      style={{
                        // width: "70px",
                        background: "transparent",
                        border: "none",
                        outline: "none",
                        color: "white",
                      }}
                      type="text"
                      value={items.moneytime}
                    />
                  </th>
                  <th
                    style={{
                      background: "transparent",
                      border: "none",
                      outline: "none",
                      color: "white",
                      padding: "2px",
                      border: "1px solid white",
                      display: "flex",
                    }}
                  >
                    <IconButton>
                      <ColorizeIcon sx={{ color: "white" }} />
                    </IconButton>
                    <IconButton>
                      <DeleteIcon sx={{ color: "red" }} />
                    </IconButton>
                  </th>
                </tr>
              </table>
            </Box>
          ))}
        </Box>
        <Box
          sx={{
            width: "100%",
            height: "64px",
            background: colors.blueAccent[600],
          }}
        ></Box>
      </Box>
    </Box>
  );
};

export default Invoices;
