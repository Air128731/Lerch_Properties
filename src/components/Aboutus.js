import { useState, useEffect } from "react";
import '../css/project-base.css';
import { transform } from "typescript";
import { HomeIcon, UsersIcon, ShieldCheckIcon, PhoneIcon, WrenchScrewdriverIcon, ShoppingBagIcon } from "@heroicons/react/24/outline";
import { PropaneOutlined } from "@mui/icons-material";

const ImageSlider = (props) => {
  return (
    <>
        <div className="flex-col w-1/3 p-4 text-left bg-gray-100 rounded-lg AboutusItem" style={{width: "450px", boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}}>
            <div></div>
            <div>
                <div className="flex flex-row items-center gap-3 text-2xl font-bold text-gray-500">
                    <div className="p-2.5 rounded-md bg-[#6366f1]">
                        {props.flag == 1 ? <HomeIcon className="w-6 h-6 text-white"/> : <></>}
                        {props.flag == 2 ? <UsersIcon className="w-6 h-6 text-white"/> : <></>}
                        {props.flag == 3 ? <ShieldCheckIcon className="w-6 h-6 text-white"/> : <></>}
                        {props.flag == 4 ? <PhoneIcon className="w-6 h-6 text-white"/> : <></>}
                        {props.flag == 5 ? <WrenchScrewdriverIcon className="w-6 h-6 text-white"/> : <></>}
                        {props.flag == 6 ? <ShoppingBagIcon className="w-6 h-6 text-white"/> : <></>}
                    </div>
                    <div>{props.title}</div>
                </div>
                <br></br>
                <div className="font-bold text-gray-600 text-md">{props.content}</div>
            </div>
        </div>
    </>
  );
}

export default ImageSlider;
