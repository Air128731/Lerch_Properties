import { useState, useEffect } from "react";
import '../css/project-base.css';
import { transform } from "typescript";
import { HomeIcon, UsersIcon, ShieldCheckIcon, PhoneIcon, WrenchScrewdriverIcon, ShoppingBagIcon } from "@heroicons/react/24/outline";
import { PropaneOutlined } from "@mui/icons-material";

const Property = (props) => {
  return (
    <>
      <div className="container w-full">
        <div className="absolute text-2xl font-bold text-red-500 left-3 top-3">{props.price}</div>
        <div className="absolute text-xl font-bold text-white right-3 top-3">{props.status}</div>
        <img src={props.imageUrl} alt="Avatar" className="image"></img>
        <div className="overlay">
          <div className="absolute text-2xl font-bold text-white top-1/2 left-1/2" style={{transform: "translate(-50%, -50%)"}}>{props.title}</div>
        </div>
      </div>
    </>
  );
}

export default Property;
