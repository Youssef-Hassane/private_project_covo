import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Search() {
  return (
    <div className="flex items-center pt-[1em] w-[100%] ">
      <Input
        type="search"
        placeholder="Search for Brand..."
        className="bg-[hsl(var(--sidebar-border))] rounded-l-full border border-[#814F6A]"
      />
      <Button
        type="submit"
        className="rounded-r-full bg-[hsl(var(--sidebar-border))] text-black border border-[#814F6A] "
      >
        Search
      </Button>
    </div>
  );
}
