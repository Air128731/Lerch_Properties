import { useState, useEffect } from "react";
import '../css/slide-show.css'
import '../css/project-base.css';
import '../css/animations.css';

const Footer = () => {
  return (
    <>
      <div className="flex flex-col font-bold text-white fadeInRight">
        <div className="grid grid-cols-3 py-10 text-white bg-gray-500 border-none _md:grid-cols-1">
          <div className="flex flex-col">
            <div className="py-2 text-3xl">Our services</div>
            <div className="py-2 text-gray-800">Maintenance Request</div>
            <div className="py-2 text-gray-800">Move Out Information</div>
            <div className="py-2 text-gray-800">SIUE Off-Campus Housing</div>
          </div>
          <div className="flex flex-col _md:py-10">
            <div className="py-2 text-3xl">Lerch Properties-2921 N Center St, Suite 6</div>
            <div className="py-2 text-gray-800">Maryville, IL 62062</div>
            <div className="py-2 text-gray-800">Contact Us (618)288-3108</div>
            <div className="py-2 text-gray-800">Hours Monday-Friday 9AM-5PM</div>
          </div>
          <div className="flex justify-center">
            <img src="https://lerchproperties.net/wp-content/uploads/2023/06/Lerch-Properties-2.webp"></img>
          </div>
        </div>
        <div className="py-5 text-white bg-gray-500 border-none">
          <div>Lerch Properties • 2921 N Center St, Suite 6, Maryville, IL 62062 • (618) 288-3108</div>
          <div>Hometown Marketing Group, Inc. © 2023 • All Rights Reserved • Sitemap</div>
        </div>
      </div>
    </>
  );
}

export default Footer;
