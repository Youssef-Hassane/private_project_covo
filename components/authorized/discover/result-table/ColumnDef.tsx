'use client';

import { faker } from '@faker-js/faker';
import Image from 'next/image';
import COVO_LOGOGRAM_BLACK_2 from "@/assets/images/COVO_LOGOGRAM_BLACK_2.png"
import {
  ColumnDef,
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
type Brand = {
  id: string;
  name: string;
  description: string;
  category: string;
  campaignCount: number;
  minFollowerCount: number;
  rating: number;
  image: string;
};


// const descriptions = [
//   "Premium quality products for every lifestyle",
//   "Innovative and cutting-edge designs",
//   "Unmatched performance and durability",
//   "Redefining beauty and self-care",
//   "Empowering you to achieve more every day",
//   "Style, comfort, and value all in one",
//   "Elevate your living spaces",
//   "Health solutions that inspire confidence",
//   "Freshness delivered to your doorstep",
// ];

const categories = [
  "Food and Beverage",
  "E-commerce",
  "Sports and Athletics",
  "Beauty and Cosmetics",
  "Technology",
  "Fashion",
  "Health and Wellness",
  "Home and Decor",
];

const createRandomBrand = () => {
  return {
    id: faker.database.mongodbObjectId(),
    name: faker.company.name(),
    description: faker.company.catchPhrase(),
    category: faker.helpers.arrayElement(categories),
    campaignCount: faker.number.int(500),
    minFollowerCount: faker.number.int({min: 1, max: 900}),
    rating: faker.number.float({min: 0, max: 5, fractionDigits: 1}),
    image: 'https://something.com' //faker.image.urlLoremFlickr({width: 100, height: 100}),
  }
}

const brandArray = faker.helpers.multiple(
  createRandomBrand,
  { count: 300 }
);

const columnHelper = createColumnHelper<Brand>();

  // id: string;
  // name: string;
  // description: string;
  // category: string;
  // campaignCount: number;
  // minFollowerCount: number;
  // rating: number;
  // image: string;

const columns: ColumnDef<Brand>[] = [
  columnHelper.accessor('image', {
    id: 'image',
    header: 'image',
    cell: props => <Image src={COVO_LOGOGRAM_BLACK_2} width={100} height={100} alt={props.getValue()} className="rounded-[30%]" />
  }),
  columnHelper.accessor('name', {
    id: 'name',
    header: 'Name',
    // cell: row => row.original,
  }),
  columnHelper.display({
    id: 'description',
    header: 'description',
    cell: ({ row }) => <CardHeader>
      <CardTitle>{row.original.name}</CardTitle>
      <CardDescription>{row.original.description}</CardDescription>
    </CardHeader>
  }),

  columnHelper.accessor('category', {
    id: 'category',
    header: 'category',
    // cell: row => row.original,
  }),
  columnHelper.accessor('campaignCount', {
    id: 'campaignCount',
    header: 'campaignCount',
    // cell: row => row.original,
  }),
  columnHelper.accessor('minFollowerCount', {
    id: 'minFollowerCount',
    header: 'minFollowerCount',
    // cell: row => row.original,
  }),
  columnHelper.accessor('rating', {
    id: 'rating',
    header: 'rating',
    // cell: row => row.original,
  }),

];

// const columns: ColumnDef<Brand>[] = [
//   {
//     accessorKey: "name",
//     header: "Details",
//   },
//   {
//     accessorKey: "category",
//     header: "Category",
//   },
//   {
//     accessorKey: "campcount",
//     header: "Campaign Count",
//   },
//   {
//     accessorKey: "minFollower",
//     header: "Minimum followers",
//   },
//   {
//     accessorKey: "rating",
//     header: "Rating",
//   },
// ];

export {
  type Brand,
  categories,
  brandArray,
  columns,
}