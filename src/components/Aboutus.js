import { useState, useEffect } from "react";
import '../css/project-base.css';
import { transform } from "typescript";

function ImageSlider() {
  return (
    <>
        <div className="flex-col w-1/3 border">
            <div></div>
            <div>
                <div className="text-2xl text-gray-600">Search our Properties</div>
                <div>Rentals are available in Edwardsville, Collinsville, Glen Carbon, & surrounding cities. We can help you find the perfect apartment, duplex, or townhouse. We manage over 1300 local properties.</div>
            </div>
        </div>
    </>
  );
}

export default ImageSlider;
