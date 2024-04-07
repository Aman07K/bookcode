import React from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import list from "../../public/list.json"
function Freebook() {
    const filterData=list.filter((data)=>data.category==="Free"); 
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <h1 className="font-semibold text-xl">Purchase</h1>
        <p>Lorem, ipsum dolar sit amet comsecteture adipisicing elit.Accusantium 
            verutatis alias pariatur ad dolar repudiandae eligendi corporis nulls
            non suscipit, iure neque earum? 
            </p>
      </div>
    </>
  );
}

export default Freebook;
