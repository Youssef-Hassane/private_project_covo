import Search from "@/components/authorized/discover/Search.component";
import Categories from "@/components/authorized/discover/Categories.component";
import TableShad from "@/components/authorized/discover/ResultTable.component";

export default function Page() {
  return (
    <div className="flex flex-col items-center p-[2em] w-full border-2 border-blue-200 ">
      <div className="flex flex-col items-center w-[80%] border-2 border-red-400 ">
        <Search />
        <Categories />
        <TableShad />
      </div>
    </div>
  );
}
