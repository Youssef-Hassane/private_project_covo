'use client';

import * as React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Feather,
  Cpu,
  Sparkles,
  Volleyball,
  ShoppingBag,
  Pizza,
  Cross,
  PaintRoller,
  Rows3,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const categoriesArray = [
  {
    name: "Food and Beverage",
    icon: <Pizza />,
    color: "#98ACCF",
    selected: false,
  },
  {
    name: "E-commerce",
    icon: <ShoppingBag />,
    color: "#CAD4E8",
    selected: false,
  },
  {
    name: "Sports and Athletics",
    icon: <Volleyball />,
    color: "#398882",
    selected: false,
  },
  {
    name: "Beauty and Cosmetics",
    icon: <Sparkles />,
    color: "#EDCBD3",
    selected: false,
  },
  {
    name: "Technology",
    icon: <Cpu />,
    color: "#00C6BA",
    selected: false,
  },
  {
    name: "Fashion",
    icon: <Feather />,
    color: "#0095FA",
    selected: false,
  },
  {
    name: "Health and Wellness",
    icon: <Cross />,
    color: "#EDCBD3",
    selected: false,
  },
  {
    name: "Home and Decor",
    icon: <PaintRoller />,
    color: "#9CA6B9",
    selected: false,
  },
  {
    name: "All categories",
    icon: <Rows3 />,
    color: "#9CA6B9",
    selected: false,
  },
];


export default function Categories() {
  const [selectedCategories, setSelectedCategories] = React.useState(categoriesArray);

  const handleClickEvent = (item, event) => {
    setSelectedCategories(
      selectedCategories.map((category) =>
        category.name === item.name
          ?
            category.selected
              ? { ...category, selected: false }
              : { ...category, selected: true }
          : { ...category }
      )
    );
  };

  categoriesArray.map((category) => {
    console.log(category.name);
  })

  return (
    <div className="flex flex-col gap-1 pt-[1em]">
      <h3 className="font-extrabold text-xl">Categories</h3>
      <div className="flex items-center flex-wrap gap-2 ">
        {categoriesArray.map((item) => {
          const isSelected = selectedCategories.find(
            (category) => category.name === item.name
          ).selected;

          return (
            <button key={item.name} onClick={(event) => handleClickEvent(item, event)}>
              <Card
                className={`flex flex-row p-2 items-center ${
                  isSelected ? "bg-blue-200 border-blue-500" : "bg-[hsl(var(--sidebar-border))] "
                } duration-300`}
              >
                <CardHeader
                  className="flex flex-col justify-center p-2 items-center h-10 w-10 border-2 rounded-full"
                  style={{ backgroundColor: item.color }}
                >
                  <CardDescription className="text-white">{item.icon}</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col justify-center py-[0.5em] px-[1em]">
                  <CardTitle className="">{item.name}</CardTitle>
                  <CardDescription className="">Something</CardDescription>
                </CardContent>
              </Card>
            </button>
          );
        })}
      </div>
    </div>
  );
}