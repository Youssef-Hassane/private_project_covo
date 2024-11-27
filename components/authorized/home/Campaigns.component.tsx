"use client";
import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Divider from "@mui/material/ListItemAvatar";
import Checkbox from "@mui/material/Checkbox";
import Avatar from "@mui/material/Avatar";

export default function CheckboxListSecondary() {
  const [checked, setChecked] = React.useState([1]);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  const data = [
    {
      id: "f230fh0g3",
      name: "Tech",
      amount: 15000,
      logo: "pi-microchip",
    },
    {
      id: "asglkj21235",
      name: "Commerce",
      amount: 11612,
      logo: "pi-shopping-cart",
    },
    {
      id: "1351asdfgjl",
      name: "Business",
      amount: 581235,
      logo: "pi-briefcase",
    },
    {
      id: "jasg61234",
      name: "Fashion",
      amount: 622000,
      logo: "pi-apple",
    },
    {
      id: "jg235nba51",
      name: "Entertainment",
      amount: 90012,
      logo: "pi-play",
    },
  ];

  return (
    <List
      sx={{}}
      subheader={
        <h3 className="pl-[1em] text-2xl bg-custom-very-soft-blue ">
          Component
        </h3>
      }
      className="w-full max-h-[25vh] border-2 overflow-y-auto bg-custom-light-grayish-blue2 rounded-md"
    >
      {data.map((value) => {
        const labelId = `checkbox-list-secondary-label-${value}`;
        return (
          <div key={value.id}>
            <ListItem
              key={value.id}
              secondaryAction={<ListItemText>${value.amount}</ListItemText>}
              disablePadding
            >
              <ListItemButton className="">
                <ListItemAvatar>
                  <div className="flex flex-row justify-center">
                    <span className={`pi ${value.logo} text-xl `}></span>
                  </div>
                </ListItemAvatar>
                <ListItemText id={labelId} primary={`${value.name}`} />
              </ListItemButton>
            </ListItem>
            <Divider />
          </div>
        );
      })}
    </List>
  );
}
