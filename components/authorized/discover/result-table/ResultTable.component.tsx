// "use client";

// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import {
//   Table,
//   TableBody,
//   TableCaption,
//   TableCell,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from "@/components/ui/table";
// import {
//   ColumnDef,
//   flexRender,
//   getCoreRowModel,
//   useReactTable,
// } from "@tanstack/react-table";

// // const brandArray = [
// //   {
// //     name: "Food lovers market",
// //     description: "Fresh produce and gourmet food",
// //     category: "Food and Beverage",
// //     campaignCount: "250",
// //     minFollowerCount: 50000,
// //     rating: 4.9,
// //     image: null,
// //   },
// // ];

// // Food and Beverage
// // E-commerce
// // Sports and Athletics
// // Beauty and Cosmetics
// // Technology
// // Fashion
// // Health and Wellness
// // Home and Decor

// interface DataTableProps<TData, TValue> {
//   columns: ColumnDef<TData, TValue>[];
//   data: TData[];
// }

// export default function TableShad<TData, TValue>({
//   columns,
//   data,
// }: DataTableProps<TData, TValue>) {
//   const table = useReactTable({
//     data,
//     columns,
//     getCoreRowModel: getCoreRowModel(),
//   });

//   return (
//     <div className="rounded-md border">
//       <Table>
//         <TableHeader>
//           {table.getHeaderGroups().map((headerGroup) => (
//             <TableRow key={headerGroup.id}>
//               {headerGroup.headers.map((header) => {
//                 return (
//                   <TableHead key={header.id}>
//                     {header.isPlaceholder
//                       ? null
//                       : flexRender(
//                           header.column.columnDef.header,
//                           header.getContext()
//                         )}
//                   </TableHead>
//                 );
//               })}
//             </TableRow>
//           ))}
//         </TableHeader>
//         <TableBody >
//           {table.getRowModel().rows?.length ? (
//             table.getRowModel().rows.map((row) => (
//               <TableRow
//                 className=""
//                 key={row.id}
//                 data-state={row.getIsSelected() && "selected"}
//               >
//                 {row.getVisibleCells().map((cell) => (
//                   <TableCell key={cell.id} className="">
//                     {flexRender(cell.column.columnDef.cell, cell.getContext())}
//                   </TableCell>
//                 ))}
//               </TableRow>
//             ))
//           ) : (
//             <TableRow>
//               <TableCell colSpan={columns.length} className="h-24 text-center">
//                 No results.
//               </TableCell>
//             </TableRow>
//           )}
//         </TableBody>
//       </Table>
//     </div>
//   );
// }

"use client";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Brand, categories, brandArray, columns } from "./ColumnDef";
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}

export default function CardTable<TData, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  return (
    <div className="space-y-4">
      {/* Sorting Header */}
      <div className="flex bg-[hsl(var(--sidebar-border))] sticky top-16 z-10 ">
        <div className="flex flex-row justify-between items-center space-x-2 ">
          {table.getHeaderGroups().map((headerGroup) =>
            headerGroup.headers.map((header) => (
              <Button
                key={header.id}
                variant="outline"
                onClick={header.column.getToggleSortingHandler()}
                className="text-sm bg-transparent border-3 border-blue-400 "
              >
                {flexRender(
                  header.column.columnDef.header,
                  header.getContext()
                )}
              </Button>
            ))
          )}
        </div>
        {/* <Input
          placeholder="Search..."
          className="w-1/3"
          onChange={(e) => {
            // Add search/filter logic if needed
          }}
        /> */}
      </div>

      {/* Results as Cards */}
      <div className="grid grid-cols-1  gap-4">
        {table.getRowModel().rows.map((row) => (
          <Card
            key={row.id}
            className="border shadow-sm hover:shadow-md w-[67vw]"
          >
            <CardContent className="flex flex-row items-center ">
              {/* <CardTitle>
                {row.getVisibleCells().map((cell) => (
                  <div key={cell.id}>
                    {cell.column.columnDef.header === "Name" &&
                      flexRender(cell.column.columnDef.cell, cell.getContext())
                    }
                  </div>
                ))}
              </CardTitle> */}

              {row.getVisibleCells().map((cell) => (
                <div key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </div>
              ))}
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Pagination Footer */}
      <div className="flex justify-between items-center">
        <Button
          variant="outline"
          disabled={!table.getCanPreviousPage()}
          onClick={() => table.previousPage()}
        >
          Previous
        </Button>
        <span>
          Page {table.getState().pagination.pageIndex + 1} of{" "}
          {table.getPageCount()}
        </span>
        <Button
          variant="outline"
          disabled={!table.getCanNextPage()}
          onClick={() => table.nextPage()}
        >
          Next
        </Button>
      </div>
    </div>
  );
}
