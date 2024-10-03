import React from "react";
import { PiNotebookDuotone } from "react-icons/pi";
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import HistoryIcon from '@mui/icons-material/History';
const Header = () => {
  return (
    <nav className="w-full h-14 flex justify-between items-center p-3 bg-white shadow-md">
    
      <div className="flex text-md items-center gap-10">
        <h2 className="font-bold text-l ml-5">Pinnacle Arabia Co.LTD </h2>
        <span className="flex items-center text-gray-500 gap-2 text-sm md:text-md">
          <PiNotebookDuotone />
          Dashboard
        </span>
      </div>

      
      <div className="flex items-center gap-9">
        {/* Search bar */}
        <span className="flex items-center px-3 py-1 border rounded-md bg-slate-200 w-40 md:w-72">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
          <input
            className="w-full focus:outline-none bg-slate-200 ml-2 text-sm"
            placeholder="Search"
          />
        </span>

       <div className="flex gap-2">
          <span>
           <WbSunnyOutlinedIcon/>
          </span>
  
         
          <span>
            <HistoryIcon />
          </span>
  
          {/* Notification and additional icon */}
          <NotificationsActiveOutlinedIcon className="w-6 h-6" />
          <PiNotebookDuotone className="w-6 h-6" />
       </div>
      </div>
    </nav>
  );
};

export default Header;
