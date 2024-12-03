"use client";
import * as React from "react";
import ListItemIcon from "@mui/material/ListItemIcon";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import IconButton from "@mui/material/IconButton";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import CommentIcon from "@mui/icons-material/Comment";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import COVO_BLACK from "@/assets/images/COVO_LOGOGRAM_BLACK.png";
import Divider from "@mui/material/ListItemAvatar";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Inter } from "next/font/google";
import Checkbox from "@mui/material/Checkbox";
import Avatar from "@mui/material/Avatar";
import { Box, ListSubheader } from "@mui/material";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const theme = createTheme({
  typography: {
    fontFamily: inter.style.fontFamily,
  },
});

export default function Messages() {
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
      name: "COVO",
      text: "Verify your registration",
      image: "",
    },
    {
      id: "a521uh94g3",
      name: "Adidas Team",
      text: "When to start?",
      image: "",
    },
    {
      id: "n32jl55k66k4",
      name: "COVO",
      text: "Complete your profile",
      image: "",
    },
    {
      id: "x05jk3991s35",
      name: "Barbie Marketing",
      text: "Brand launch ready",
      image: "",
    },
    {
      id: "j19jg863kd",
      name: "ZARA Team",
      text: "Final steps",
      image: "",
    },
  ];

  return (
    <ThemeProvider theme={theme}>
      <Box className="relative ">
        <div className={`border-2 bg-cutsom-light-grayish-blue2`}>Messages</div>
        <List
          // subheader={
          //   <h3 className="pl-[1em] text-2xl bg-custom-very-soft-blue ">
          //     Messages
          //   </h3>
          // }

          className={`w-full max-h-[33vh] border-blue-200 border-b-4 overflow-y-auto bg-custom-light-grayish-blue2 rounded-md ${inter.className}`}
        >
          {data.map((value) => {
            const labelId = `checkbox-list-label-${value}`;

            return (
              <ListItem
                key={value.id}
                secondaryAction={
                  <IconButton edge="end" aria-label="comments">
                    <ArrowForwardIosIcon />
                  </IconButton>
                }
                disablePadding
              >
                <ListItemButton role={undefined} onClick={handleToggle(value)}>
                  <ListItemIcon>
                    <ListItemAvatar className="border-2">
                      <Avatar src="@/assets/svg/chat_bot.svg" />
                    </ListItemAvatar>
                  </ListItemIcon>

                  <ListItemText
                    id={labelId}
                    primary={value.name}
                    secondary={value.text}
                  />
                </ListItemButton>
              </ListItem>
            );
          })}
        </List>
      </Box>
    </ThemeProvider>
  );
}
