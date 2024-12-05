"use client"

import * as React from "react"
import { TrendingUp, TrendingDown } from "lucide-react"
import { Bar, BarChart, ResponsiveContainer, CartesianGrid, Cell, LabelList } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

const chartConfig = {
  delta: {
    label: "Delta",
  },
} satisfies ChartConfig

export default function NegativeBar({monthlyIncome, averageMonthlyIncome, className}) {
  // Memoized Average
  const averageMonthDeviation = React.useMemo(() =>
    monthlyIncome.map(({month, total}) => {
      return {month: month.split(' ')[0], delta: (averageMonthlyIncome - total)}
    }),
    []
  )

  console.log(averageMonthDeviation);

  return (
    <Card className={className} >
      <CardHeader>
        <CardTitle>Bar Chart - Trend</CardTitle>
        <CardDescription>2024</CardDescription>
      </CardHeader>

      <CardContent>
        <ResponsiveContainer width="100%" height={150}>
          <ChartContainer config={chartConfig}>
            <BarChart accessibilityLayer data={averageMonthDeviation}>
              <CartesianGrid vertical={false} />
              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent hideLabel hideIndicator />}
              />
              <Bar dataKey="delta">
                <LabelList position="top" dataKey="month" fillOpacity={1} />
                {averageMonthDeviation.map((item) => (
                  <Cell
                    key={item.month}
                    fill={
                      item.delta > 0
                        ? "var(--chart-1)"
                        : "var(--chart-2)"
                    }
                  />
                ))}
              </Bar>
            </BarChart>
          </ChartContainer>
        </ResponsiveContainer>
      </CardContent>

      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 font-medium leading-none">

          {
            <p className="inline">
              Trending {`${ averageMonthDeviation.slice(-1)[0].delta > 0 ? `up` : `down` }`} by {`$${averageMonthDeviation.slice(-1)[0].delta}`} this month {averageMonthDeviation.slice(-1)[0].delta > 0 ? <TrendingUp className="h-4 w-4 inline" /> : <TrendingDown className="h-4 w-4 inline" /> }
            </p>
          }
        </div>
        <div className="leading-none text-muted-foreground">
          Showing total income trends for the last year
        </div>
      </CardFooter>
    </Card>
  )
}
