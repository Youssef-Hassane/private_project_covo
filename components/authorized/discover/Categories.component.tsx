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
      icon: <Cross className=" p-[12px] bg-[#EDCBD3] rounded-full " />,
      color: "#EDCBD3",
    },
    {
      name: "Home and Decor",
      icon: <PaintRoller />,
      color: "#9CA6B9",
    },
    {
      name: "All categories",
      icon: null,
      color: "#9CA6B9",
    },
  ];

  return (
    <div className="flex items-center pt-[1em] ">
      {categoriesArray.map((item) => {
        return (
          <Card key={item.name}>
            {/* <CardHeader>
              <CardTitle>Card Title</CardTitle>
              <CardDescription>Card Description</CardDescription>
            </CardHeader> */}

            <CardContent>
              <p>{item.name}</p>
              <p className={``}>{item.icon}</p>
            </CardContent>
            <CardFooter>
              <p>Card Footer</p>
            </CardFooter>
          </Card>
        );
      })}
    </div>
  );
}
