import Campaigns from "@/components/authorized/home/Campaigns.component";
import Messages from "@/components/authorized/home/Messages.component";
import HeaderStats from "@/components/authorized/home/HeaderStats.component";
import Barchart from "@/components/authorized/home/HeroChart.component";
import NegativeBar from "@/components/authorized/home/NegativeBar.component";
import PieChartDivided from "@/components/authorized/home/PieChartDivided.component";
import { Inter } from "next/font/google";


const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "700"],
});

function generateYearlyIncomeData(year = 2024, minIncome = 50, maxIncome = 500) {
  const chartData = [];
  const startDate = new Date(`${year}-01-01`);
  const endDate = new Date(`${year}-12-31`);
  let currentDate = new Date(startDate);
  while (currentDate <= endDate) {
    const income = Math.floor(Math.random() * (maxIncome - minIncome + 1)) + minIncome;
    const formattedDate = currentDate.toISOString().split('T')[0];
    chartData.push({
      date: formattedDate,
      income: income
    });
    currentDate.setDate(currentDate.getDate() + 1);
  }
  return chartData;
}

function calculateMonthlyIncome(chartData) {
  // Create an object to store monthly totals
  const monthlyIncome = {};

  // Iterate through each data point
  chartData.forEach(entry => {
    // Create a Date object from the entry's date
    const date = new Date(entry.date);

    // Extract month and year
    const monthKey = date.toLocaleString('default', {
      month: 'long',
      year: 'numeric'
    });

    // Add income to the corresponding month
    if (!monthlyIncome[monthKey]) {
      monthlyIncome[monthKey] = 0;
    }
    monthlyIncome[monthKey] += entry.income;
  });

  // Calculate average monthly income
  const monthlyTotals = Object.entries(monthlyIncome).map(([month, total]) => ({
    month,
    total,
  }));

  const averageMonthlyIncome = monthlyTotals.reduce((acc, curr) => acc + curr.total, 0) / monthlyTotals.length;

  return {
    monthlyIncome: monthlyTotals,
    averageMonthlyIncome: Math.round(averageMonthlyIncome)
  };
}

const chartData = generateYearlyIncomeData(2024, 50, 1032);

const {monthlyIncome, averageMonthlyIncome} = calculateMonthlyIncome(chartData);

export default function Page() {
  return (
    <div className={`w-full flex flex-col justify-center ${inter.className} `}>
      <div className="flex justify-center " >
        <HeaderStats />
      </div>

      <div className="px-[2em] lg:px-[3em] xl:px-[12em] flex flex-col gap-3 " >
        <Barchart chartData={chartData} />
        <div className="flex flex-col-reverse md:flex-row lg:flex-row gap-2 " >
          <PieChartDivided className={`basis-1/3 bg-[hsl(var(--sidebar-border))]`} />
          <NegativeBar monthlyIncome={monthlyIncome} averageMonthlyIncome={averageMonthlyIncome} className={`basis-2/3 bg-[hsl(var(--sidebar-border))]`} />
        </div>
      </div>

      <div className="px-[2em] lg:px-[4em] xl:px-[12em] min-h-screen grid grid-cols-1 gap-y-8 md:grid-cols-2 lg:grid-cols-2 md:gap-3 lg:gap-6 content-center w-full border-2 border-red-200 justify-center ">
        <Campaigns />
        <Campaigns />
        <Campaigns />
      </div>

    </div>
  );
}
