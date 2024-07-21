import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ChartContainer } from "@/components//ui/chart";
import {
  Label,
  PolarGrid,
  PolarRadiusAxis,
  RadialBar,
  RadialBarChart,
} from "recharts";
import { riskData } from "@/utils/mainConstants";
import { useState } from "react";
import { RxInfoCircled } from "react-icons/rx";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import InputContainer from "./inputSection/InputContainer";

const SecurityAnalysis = () => {
  // eslint-disable-next-line no-unused-vars
  const [analysis, setAnalysis] = useState(false);
  const chartData = [
    {
      security: "High Safe",
      analysisScore: 0,
      fill: "var(--color-security)",
    },
  ];
  const chartConfig = {
    analysisScore: {
      label: "AnalysisScore",
    },
    security: {
      label: "security",
      color: "hsl(var(--chart-2))",
    },
  };
  return (
    <Card
      className="lg:col-span-2 h-[19rem] max-sm:h-[50vh] overflow-y-scroll no-scrollbar shadow-xl"
      x-chunk="dashboard-01-chunk-4"
    >
      <CardHeader className="flex flex-col py-2">
        <CardTitle className="text-2xl max-sm:text-xl font-bold text-orange-600">
          Security Score
        </CardTitle>
        <CardDescription>
          Add at least one site to your LastPass vault to get a security score.
        </CardDescription>
        <hr />
      </CardHeader>
      <CardContent className="py-0">
        <div className="flex max-sm:flex-col w-full justify-between">
          <div className="w-2/6 max-sm:w-full">
            <ChartContainer
              config={chartConfig}
              className="aspect-square sm:mt-2 md:-mt-5 lg:-mt-0 xl:-mt-7 max-sm:-mt-10 sm:-ml-2 "
            >
              <RadialBarChart
                data={chartData}
                startAngle={90}
                endAngle={chartData[0].analysisScore * 4.5}
                innerRadius={65}
                outerRadius={90}
              >
                <PolarGrid
                  gridType="circle"
                  radialLines={false}
                  stroke="none"
                  className="first:fill-muted last:fill-background"
                  polarRadius={[70, 58]}
                />
                <RadialBar
                  dataKey="analysisScore"
                  background
                  cornerRadius={20}
                />
                <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
                  <Label
                    content={({ viewBox }) => {
                      if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                        return analysis ? (
                          <text
                            x={viewBox.cx}
                            y={viewBox.cy}
                            textAnchor="middle"
                            dominantBaseline="middle"
                          >
                            <tspan
                              x={viewBox.cx}
                              y={viewBox.cy}
                              className="fill-foreground text-3xl font-bold"
                            >
                              {chartData[0].analysisScore.toLocaleString()}%
                            </tspan>
                            <tspan
                              x={viewBox.cx}
                              y={(viewBox.cy || 0) + 24}
                              className="fill-muted-foreground text-base"
                            >
                              {chartData[0].security}
                            </tspan>
                          </text>
                        ) : (
                          <text
                            x={viewBox.cx}
                            y={viewBox.cy}
                            textAnchor="middle"
                            dominantBaseline="middle"
                          >
                            <tspan
                              x={viewBox.cx}
                              y={viewBox.cy}
                              className="fill-foreground text-6xl font-bold"
                            >
                              ?
                            </tspan>
                          </text>
                        );
                      }
                    }}
                  />
                </PolarRadiusAxis>
              </RadialBarChart>
            </ChartContainer>
          </div>
          <div className="pt-0 max-sw:py-0 text-sm">
            <Table>
              <TableBody>
                {riskData.map((data, index) => (
                  <TableRow key={index}>
                    <TableCell className="font-medium flex my-1">
                      {data.title}
                      <HoverCard>
                        <HoverCardTrigger>
                          <RxInfoCircled className="mt-1 mx-2 text-muted-foreground text-lg cursor-pointer hover:text-orange-600" />
                        </HoverCardTrigger>
                        <HoverCardContent className="mt-2">
                          {data.description}
                        </HoverCardContent>
                      </HoverCard>
                    </TableCell>
                    <TableCell className="text-center">
                      <span
                        className={`${
                          data.count > 3 || data.count === "Inactive"
                            ? "bg-red-600"
                            : "bg-green-600"
                        } rounded-full px-2 py-1 text-base text-white flex justify-center text-center`}
                      >
                        <p
                          className={`text-sm text-white flex justify-center text-center`}
                        >
                          {data.count.toUpperCase()}
                        </p>
                      </span>
                    </TableCell>
                    <TableCell className="text-right text-blue-600 dark:text-blue-300 cursor-pointer">
                      {data.link}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </CardContent>
      <hr className="px-0" />
      <CardHeader className="flex flex-col py-2 ">
        <CardTitle className="text-2xl max-sm:text-xl font-bold text-orange-600">
          Dark web monitoring
        </CardTitle>
        <CardDescription>
          Add items to your vault so you can monitor your email addresses.
        </CardDescription>
        <hr />
      </CardHeader>
      <CardContent className="flex justify-center py-5">
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="destructive" className="w-1/2">
              Add items to your vault
            </Button>
          </DialogTrigger>
          <InputContainer />
        </Dialog>
      </CardContent>
    </Card>
  );
};

export default SecurityAnalysis;
