"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import ConnectWithoutContactIcon from "@mui/icons-material/ConnectWithoutContact";
import ArticleIcon from "@mui/icons-material/Article";
import { ListItemIcon } from "@mui/material";
import FormatAlignJustifyIcon from "@mui/icons-material/FormatAlignJustify";
import Link from "next/link";

export default function Sidebar() {
  const [state, setState] = React.useState({
    bottom: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{
        width: anchor === "top" || anchor === "bottom" ? "auto" : 250,
        bgcolor: "#C56A28",
        color: "white",
      }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List className="h-[250px]">
        {["Home", "Contact Us"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <Link
              href={index === 0 ? "/" : "/Contact"}
              className="w-full"
            >
              <ListItemButton>
                <ListItemIcon className="text-white ">
                  {index === 0 ? (
                    <HomeIcon />
                  ) : (
                    <ConnectWithoutContactIcon />
                  )}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </Link>
          </ListItem>
        ))}
      </List>
      <Divider />
    </Box>
  );

  return (
    <div className="block">
      {["bottom"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button
            className="text-main font-bold text-8xl"
            onClick={toggleDrawer(anchor, true)}
          >
            <FormatAlignJustifyIcon className="text-3xl" />
          </Button>
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>
  );
}
