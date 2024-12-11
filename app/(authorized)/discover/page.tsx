'use client';

import Search from "@/components/authorized/discover/Search.component";
import Categories from "@/components/authorized/discover/Categories.component";
import TableShad from "@/components/authorized/discover/result-table/ResultTable.component";
import CardTable from "@/components/authorized/discover/result-table/ResultTable.component";
import {
  Brand,
  categories,
  brandArray,
  columns,
} from "@/components/authorized/discover/result-table/ColumnDef";

export default function Page() {
  return (
    <div className="flex flex-col items-center p-[2em] w-full border-2 border-blue-200 ">
      <div className="flex flex-col items-center w-[80%] border-2 border-red-400 ">
        <Search />
        <Categories />
      </div>
      {/* <TableShad columns={columns} data={brandArray} className="w-full" /> */}
      <CardTable columns={columns} data={brandArray} />
    </div>
  );
}
