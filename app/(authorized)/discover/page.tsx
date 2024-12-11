import Search from "@/components/authorized/discover/Search.component";
import Categories from "@/components/authorized/discover/Categories.component";
import TableShad from "@/components/authorized/discover/result-table/ResultTable.component";
import {
  columns,
  Brand,
} from "@/components/authorized/discover/result-table/ColumnDef";

// Arrays of names and descriptions for categories
const names = [
  "Taste of Gourmet",
  "Athletic Edge",
  "Style Spectrum",
  "Tech Hub",
  "Wellness Wonders",
  "E-Deals",
  "Glow Essentials",
  "Comfort Corner",
  "Fresh Picks",
];

const descriptions = [
  "Premium quality products for every lifestyle",
  "Innovative and cutting-edge designs",
  "Unmatched performance and durability",
  "Redefining beauty and self-care",
  "Empowering you to achieve more every day",
  "Style, comfort, and value all in one",
  "Elevate your living spaces",
  "Health solutions that inspire confidence",
  "Freshness delivered to your doorstep",
];

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

// Function to generate random integers in a range
const getRandomInt = (min, max) =>
  Math.floor(Math.random() * (max - min) + min);

// Async function to generate 100 brandArray objects
const generateBrandArray = async () => {
  const brandArray = [];

  for (let i = 0; i < 100; i++) {
    const name = names[getRandomInt(0, names.length)];
    const description = descriptions[getRandomInt(0, descriptions.length)];
    const category = categories[getRandomInt(0, categories.length)];
    const campaignCount = getRandomInt(50, 500);
    const minFollowerCount = getRandomInt(1000, 100000);
    const rating = Math.random() * (5 - 1) + 1;
    // const image = null;

    brandArray.push({
      name,
      description,
      category,
      campaignCount,
      minFollowerCount,
      rating,
    });
  }

  return brandArray;
};

export default async function Page() {
  const data = await generateBrandArray();

  return (
    <div className="flex flex-col items-center p-[2em] w-full border-2 border-blue-200 ">
      <div className="flex flex-col items-center w-[80%] border-2 border-red-400 ">
        <Search />
        <Categories />
        <TableShad columns={columns} data={data} />
      </div>
    </div>
  );
}
