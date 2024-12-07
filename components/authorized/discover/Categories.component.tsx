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

export default function Categories() {
  const categoriesArray = [
    {
      name: "Food and Beverage",
      icon: <Pizza />,
      color: "#98ACCF",
    },
    {
      name: "E-commerce",
      icon: <ShoppingBag />,
      color: "#CAD4E8",
    },
    {
      name: "Sports and Athletics",
      icon: <Volleyball />,
      color: "#398882",
    },
    {
      name: "Beauty and Cosmetics",
      icon: <Sparkles />,
      color: "#EDCBD3",
    },
    {
      name: "Technology",
      icon: <Cpu />,
      color: "#00C6BA",
    },
    {
      name: "Fashion",
      icon: <Feather />,
      color: "#0095FA",
    },
    {
      name: "Health and Wellness",
      icon: <Cross />,
      color: "#EDCBD3",
    },
    {
      name: "Home and Decor",
      icon: <PaintRoller />,
      color: "#9CA6B9",
    },
    {
      name: "All categories",
      icon: <Rows3 />,
      color: "#9CA6B9",
    },
  ];

  return (
    <div className="flex items-center pt-[1em] flex-wrap gap-2 ">
      {categoriesArray.map((item) => {
        return (
          <Card key={item.name} className="flex flex-row p-2 " >
            <CardHeader
            className= "flex flex-col justify-center p-4 items-center h-[10] w-[10] rounded-full "
            style={{ backgroundColor: item.color }} >
              <CardDescription className="text-white" >{item.icon}</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col justify-center py-[0.5em] px-[1em] ">
              <CardTitle className="">{item.name}</CardTitle>
              <CardDescription className="">
                Something
              </CardDescription>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}
