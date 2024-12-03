"use client";

import * as React from "react";
import {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableRow,
  TableHead,
  TableCell,
} from "@/components/ui/table";
import { Inter } from "next/font/google";

// import List from "@mui/material/List";
// import ListItem from "@mui/material/ListItem";
// import ListItemButton from "@mui/material/ListItemButton";
// import ListItemText from "@mui/material/ListItemText";
// import ListItemAvatar from "@mui/material/ListItemAvatar";
// import Divider from "@mui/material/ListItemAvatar";
// import { createTheme, ThemeProvider } from "@mui/material/styles";
// import Checkbox from "@mui/material/Checkbox";
// import Avatar from "@mui/material/Avatar";
// import { ColumnDef } from "@tanstack/react-table"

export default function Campaigns() {
  const columns = [
    {
      accessorKey: "logo",
      header: "Logo",
    },
    {
      accessorKey: "name",
      header: "Category",
    },
    {
      accessorKey: "amount",
      header: "Amount",
    },
  ];

  const data = [
    {
      id: "f230fh0g3",
      name: "Tech",
      amount: "$15000",
      logo: "pi-microchip",
    },
    {
      id: "asglkj21235",
      name: "Commerce",
      amount: "$11612",
      logo: "pi-shopping-cart",
    },
    {
      id: "1351asdfgjl",
      name: "Business",
      amount: "$581235",
      logo: "pi-briefcase",
    },
    {
      id: "jasg61234",
      name: "Fashion",
      amount: "$622000",
      logo: "pi-apple",
    },
    {
      id: "ghal13",
      name: "Entertainment",
      amount: "$90012",
      logo: "pi-play",
    },
    {
      id: "15jlags",
      name: "Entertainment",
      amount: "$90012",
      logo: "pi-play",
    },
    {
      id: "jag191ja19",
      name: "Entertainment",
      amount: "$90012",
      logo: "pi-play",
    },
  ];

  return (
    <div>
      <h1>Campaigns</h1>
      <Table>
        <TableHeader>
          <TableRow>
            {columns.map((column) => (
              <TableHead key={column.accessorKey}>{column.header}</TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((row, rowIndex) => (
            <TableRow key={rowIndex}>
              {columns.map((column) => (
                <TableCell key={column.accessorKey}>
                  {row[column.accessorKey]}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
