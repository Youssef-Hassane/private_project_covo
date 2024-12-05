"use client"

import { TrendingUp } from "lucide-react"
import * as React from "react"
import { Bar, BarChart, CartesianGrid, XAxis, ResponsiveContainer, Cell, LabelList } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import { Button } from "@/components/ui/button"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger
} from "@/components/ui/drawer"

const chartConfig = {
  income: {
    label: "Total Income",
    color: "var(--chart-2)",
  },
} satisfies ChartConfig

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

export default function Barchart() {
  // Extract unique years from dates
  const extractYear = (dateString) => new Date(dateString).getFullYear()
  const extractQuarter = (dateString) => {
    const month = new Date(dateString).getMonth() + 1
    if (month <= 3) return 'Q1'
    if (month <= 6) return 'Q2'
    if (month <= 9) return 'Q3'
    return 'Q4'
  }

  // Memoized years and quarters
  const availableYears = React.useMemo(() =>
    [...new Set(chartData.map(item => extractYear(item.date)))].sort((a, b) => b - a),
    [chartData]
  )

  const availableQuarters = ['Q1', 'Q2', 'Q3', 'Q4']

  // State management for filters
  const [selectedYear, setSelectedYear] = React.useState(availableYears[0])
  const [selectedQuarter, setSelectedQuarter] = React.useState('Q1')
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false)

  // Filter data based on selected year and quarter
  const filteredData = React.useMemo(() => {
    return chartData.filter(item => {
      const itemYear = extractYear(item.date)
      const itemQuarter = extractQuarter(item.date)
      return itemYear === selectedYear && itemQuarter === selectedQuarter
    })
  }, [chartData, selectedYear, selectedQuarter])

  // Calculate total income for filtered data
  const total = React.useMemo(
    () => ({
      income: filteredData.reduce((acc, curr) => acc + curr.income, 0),
    }),
    [filteredData]
  )


  // Responsive filter component
  const FilterComponent = () => (
    <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-2 ">
      {/* Year Dropdown */}
      <Select
        value={selectedYear.toString()}
        onValueChange={(value) => setSelectedYear(Number(value))}
      >
        <SelectTrigger className="w-full sm:w-[100px]">
          <SelectValue placeholder="Year" />
        </SelectTrigger>
        <SelectContent>
          {availableYears.map(year => (
            <SelectItem key={year} value={year.toString()}>
              {year}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      {/* Quarter Dropdown */}
      <Select
        value={selectedQuarter}
        onValueChange={setSelectedQuarter}
      >
        <SelectTrigger className="w-full sm:w-[100px]">
          <SelectValue placeholder="Quarter" />
        </SelectTrigger>
        <SelectContent>
          {availableQuarters.map(quarter => (
            <SelectItem key={quarter} value={quarter}>
              {quarter}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  )

  return (
    <Card className="w-full border-2 border-blue-500 ">
      {/* Desktop and larger screens header */}
      <CardHeader className="sm:flex flex-col items-stretch space-y-0 border-b p-0 sm:flex-row">
        <div className="flex flex-1 flex-row justify-between gap-1 px-6 py-1 sm:py-6">
          <div className="flex flex-col justify-center gap-1 px-6 py-5 sm:py-6">
            <CardTitle>Total Campaign Income</CardTitle>
            <CardDescription>
              Showing income by year and quarter
            </CardDescription>
          </div>
          <div className="ml-4 flex flex-col justify-center ">
            <span className="text-lg font-bold leading-none sm:text-3xl">
              ${total.income}
            </span>
          </div>
        </div>
        <div className="hidden md:flex items-center space-x-2 px-6 py-4 ">
          <FilterComponent />
        </div>
      </CardHeader>

      {/* Mobile view - Drawer for filters */}
      <div className="sm:hidden border-2 flex">
        <Drawer open={isDrawerOpen} onOpenChange={setIsDrawerOpen}>
          <DrawerTrigger asChild>
            <Button variant="outline" className="w-full m-2">
              Filter and View Details
            </Button>
          </DrawerTrigger>
          <DrawerContent>
            <DrawerHeader>
              <DrawerTitle>Filter Income Data</DrawerTitle>
              <DrawerDescription>
                Select year and quarter to view income
              </DrawerDescription>
            </DrawerHeader>
            <div className="p-4">
              <FilterComponent />
            </div>
            <DrawerFooter>
              <DrawerClose>
                <Button variant="outline">Close</Button>
              </DrawerClose>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </div>


      {/* Responsive Chart Container */}
      <CardContent className="px-2 sm:p-6">
          <ResponsiveContainer width="100%" height={250}>
            <ChartContainer config={chartConfig} className="">
            <BarChart
              data={filteredData}
              margin={{
                left: 12,
                right: 12,
                top: 20,
                bottom: 20
              }}
            >
              <CartesianGrid vertical={false} />
              <XAxis
                dataKey="date"
                tickLine={false}
                axisLine={false}
                tickMargin={8}
                minTickGap={32}
                tickFormatter={(value) => {
                  const date = new Date(value)
                  return date.toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                  })
                }}
              />
              <ChartTooltip
                content={
                  <ChartTooltipContent
                    className="w-[150px]"
                    nameKey="income"
                    labelFormatter={(value) => {
                      return new Date(value).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })
                    }}
                  />
                }
              />
              <Bar dataKey="income" fill={chartConfig.income.color} />
            </BarChart>
          </ChartContainer>
          </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}