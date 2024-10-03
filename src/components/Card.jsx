
import React, { useState } from 'react';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import { MdOutlineShoppingCart } from "react-icons/md";
import { TbArrowsRightLeft } from "react-icons/tb";
import { TbFileExport } from "react-icons/tb";
import { FaArrowTrendUp } from "react-icons/fa6";
const DashboardCards = () => {

  const cards = [
    { title: "Total Sales", value: "721K", percentage: "+11.01%", icon: <MdOutlineShoppingCart/> },
    { title: "Net", value: "721K", percentage: "+11.01%", icon: <MonetizationOnOutlinedIcon/> },
    { title: "Invoice Due", value: "721K", percentage: "+11.01%", icon: <TbFileExport/> },
    { title: "Total Sell Return", value: "721K", percentage: "+11.01%", icon: <TbArrowsRightLeft/> },
    { title: "Total Purchase", value: "721K", percentage: "+11.01%", icon:  <MonetizationOnOutlinedIcon/> },
    { title: "Purchase Due", value: "721K", percentage: "+11.01%", icon:  <MonetizationOnOutlinedIcon/> },
    { title: "Total Purchase Return", value: "721K", percentage: "+11.01%", icon:  <MonetizationOnOutlinedIcon/> },
    { title: "Net", value: "721K", percentage: "+11.01%", icon: <MonetizationOnOutlinedIcon/> }
  ];

  return (
    <div className="rounded-md mt-10 mb-3 bg-blue-200  ">
      
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-4xl font-sans ">Welcome Admin</h1>
      
        <div className="mt-4">
          <select className="w-full bg-white p-2 border rounded-md">
            <option>Today</option>
            <option>This Week</option>
            <option>This month</option>
          </select>
        </div>
      </div>

     <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
  {cards.map((card, index) => (
    <div
      key={index}
      className="bg-white p-6 rounded-lg shadow-md transition duration-300 ease-in-out hover:bg-blue-100 cursor-pointer"
    >
      {/* First row: Icon and Title */}
      <div className="flex items-center justify-center mb-4">
        <div className="text-xl mr-3">{card.icon}</div>
        <h5 className="text-gray-500 text-xl">{card.title}</h5>
      </div>

      {/* Second row: Value and Percentage */}
      <div className="flex justify-center gap-2 items-center">
        <h3 className="text-2xl font-bold">{card.value}</h3>
        <p className="text-green-500 flex items-center">
          {card.percentage}
          <span className="ml-1"><FaArrowTrendUp/></span>
        </p>
      </div>
    </div>
  ))}
</div>

    </div>
  );
};

export default DashboardCards;

