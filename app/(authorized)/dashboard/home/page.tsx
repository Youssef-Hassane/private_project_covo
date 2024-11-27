import Campaigns from "@/components/authorized/home/Campaigns.component";

export default function Page() {
  return (
    <div className="w-full">
      <div className="px-[1.5em] h-[auto] max-w-[1500px] min-h-screen grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3 content-center w-full">
        <Campaigns />
        <Campaigns />
        <Campaigns />
        <Campaigns />
      </div>
    </div>
  );
}
