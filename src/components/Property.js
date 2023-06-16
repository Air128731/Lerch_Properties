import { useState, useEffect } from "react";
import '../css/project-base.css';
import { transform } from "typescript";
import { HomeIcon, UsersIcon, ShieldCheckIcon, PhoneIcon, WrenchScrewdriverIcon, ShoppingBagIcon } from "@heroicons/react/24/outline";
import { PropaneOutlined } from "@mui/icons-material";

const Property = (props) => {
  return (
    <>
      <div class="relative container w-full">
        <img src="https://www.lpc.com/wp-content/uploads/2018/02/attachment-510x382.jpg" alt="Avatar" class="image"></img>
        <div class="overlay">
          <div class="text-2xl absolute top-1/2 left-1/2 text-white font-bold" style={{transform: "translate(-50%, -50%)"}}>Hello World</div>
        </div>
      </div>
    </>
  );
}

export default Property;
