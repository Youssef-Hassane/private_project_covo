import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Search() {
  return (
    <div className="flex w-full items-center ">
      <Input
        type="email"
        placeholder="Email"
        className="bg-[hsl(var(--sidebar-border))] rounded-l-full border border-[#814F6A]"
      />
      <Button
        type="submit"
        className="rounded-r-full bg-[hsl(var(--sidebar-border))] text-black border border-[#814F6A] "
      >
        Subscribe
      </Button>
    </div>
  );
}
