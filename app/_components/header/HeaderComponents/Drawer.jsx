"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
// import DrawerNavigation from "../UiComponents/DrawerNavigation";
// import AllDrawerNavigation from "./AllDrawerNavigation";
export default function TemporaryDrawer() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 330 }} role="presentation" onClick={toggleDrawer(false)}>
      <div className="bg-[#ecf7ff] flex justify-between items-center py-6 px-3">
        <div className="text-[#59a2d7] flex justify-between items-center">
          <div>
            <AccountCircleIcon />
          </div>

          <div className="px-2 text-xs">
            <p className="text-[#323232]">Name of Person</p>
            <p className="text-[#2e2e2e]">+91 4521521424</p>
          </div>
        </div>
        <button className="text-xs text-[#005491] font-bold mx-3">Edit</button>
      </div>
      {/* <AllDrawerNavigation /> */}
    </Box>
  );

  return (
    <div>
      {/* <img
        onClick={toggleDrawer(true)}
        alt="usericon"
        className="h-[30px]"
        src="logo.png"
      ></img> */}
      <div className="flex items-center">
        <div
          className="h-[35px] w-[40px] lg:rounded-[46px] lg:h-[44px] lg:w-[44px]  bg-[#EAEDEE] rounded-full"
          onClick={toggleDrawer(true)}
        ></div>
        <div className="flex gap-2 md:gap-[16px] text-[50px] text-[#1F2A37] invisible lg:visible">
          <p className="text-[14px] md:text-[14px] leading-[14px] text-center font-medium ">
            FR
          </p>
          <img className="h-[13px] " src="/header/downarrow.svg"></img>
        </div>
      </div>

      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}
