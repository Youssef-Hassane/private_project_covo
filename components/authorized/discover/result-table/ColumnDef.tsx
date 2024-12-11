"use client";

import { ColumnDef } from "@tanstack/react-table";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Brand = {
  name: string;
  description: string;
  category: string;
  campaignCount: number;
  minFollowerCount: number;
  rating: number;
};

export const columns: ColumnDef<Brand>[] = [
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "desc",
    header: "Description",
  },
  {
    accessorKey: "category",
    header: "Category",
  },
  {
    accessorKey: "campcount",
    header: "Campaign Count",
  },
  {
    accessorKey: "minFollower",
    header: "Minimum followers",
  },
  {
    accessorKey: "rating",
    header: "Rating",
  },
];
