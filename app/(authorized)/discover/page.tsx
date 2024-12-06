import Search from "@/components/authorized/discover/Search.component";
import Categories from "@/components/authorized/discover/Categories.component";

export default function Page() {
  return (
    <div className="w-[80%]" >
      <div className="w-[80%]">
        <Search />
        <Categories />
      </div>
    </div>
  );
}
