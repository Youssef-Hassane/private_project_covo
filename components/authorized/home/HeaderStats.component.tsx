import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { DollarSign, TrendingUp, Percent, ChartColumn} from "lucide-react"; // Example icons

export default function HeaderStats() {
  return (
    // <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    <div className="flex flex-col md:flex-row lg:flex-row justify-center gap-6 mx-[1em] my-[2em] w-full">
      {/* Average Campaign Income */}
      <Card className="bg-blue-50 border border-[#0092d2] shadow-md">
        <CardHeader>
          <div className="flex items-center gap-3">
            <DollarSign className="text-blue-500" />
            <CardTitle className="text-lg font-bold text-[#215abb] ">
              Average Campaign Income
            </CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-4xl font-extrabold text-[#215abb] ">$5,432</p>
          <CardDescription className="text-sm text-blue-600">
            Based on active campaigns
          </CardDescription>
        </CardContent>
      </Card>

      {/* Total Campaign Income */}
      <Card className="bg-green-50 border border-[#00968b] shadow-md">
        <CardHeader>
          <div className="flex items-center gap-3">
            <ChartColumn className="text-[#007816]" />
            <CardTitle className="text-lg font-bold text-[#007816] ">
              Total Campaign Income
            </CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-4xl font-extrabold text-[#52825b] ">$42,765</p>
          <CardDescription className="text-sm text-[#559260] ">
            Across all campaigns
          </CardDescription>
        </CardContent>
      </Card>

      {/* Total Campaign Income */}
      <Card className="bg-green-50 border border-[#00b88f] shadow-md">
        <CardHeader>
          <div className="flex items-center gap-3">
            <TrendingUp className="text-[#00b88f] " />
            <CardTitle className="text-lg font-bold text-[#22c55e] ">
              Year-over-Year Increase
            </CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-4xl font-extrabold text-[#009e3b] ">12%</p>
          <CardDescription className="text-sm text-green-600">
            Across all campaigns
          </CardDescription>
        </CardContent>
      </Card>

    </div>
  );
}
