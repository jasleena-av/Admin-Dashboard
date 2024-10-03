
import React, { useState } from 'react';
import PersonIcon from '@mui/icons-material/Person';

import HomeIcon from '@mui/icons-material/Home';
import GroupIcon from '@mui/icons-material/Group';
import { TiContacts } from "react-icons/ti";
 import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';
 import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
 import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
 import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
 import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
 import { IoWalletOutline } from "react-icons/io5";
 import { GoDatabase } from "react-icons/go";
 import { BsBoxSeam } from "react-icons/bs";

const Sidebar = () => {
    const [open, setOpen] = useState(true);
  
    return (
      <div className={`flex flex-col min-h-screen bg-dark-purple transition-all duration-300 ${open ? 'w-60' : 'w-20'}`}>
        <div className="flex flex-col gap-3 flex-grow font-sans text-lg p-3">
          <div onClick={() => setOpen(!open)} className="flex border cursor-pointer px-2  py-2 rounded-md bg-blue-300 gap-4 items-center mb-2">
          <HomeIcon />
            {open &&<a href=''><span>Home</span></a>}
          </div>
          <div className="flex gap-4 items-center p-2 mb-2">
          <GroupIcon />
            {open && <a href=""><span>User</span></a>}
          </div>
          <div className="flex gap-4 items-center p-2 mb-2">
          <TiContacts  />
            {open && <a href=""><span>Contacts</span></a>}
          </div>
          <div className="flex gap-4 p-2 items-center mb-2">
          < BsBoxSeam />
            {open && <a href=""><span>Products</span></a>}
          </div>
          <div className="flex gap-4 p-2 items-center mb-2">
          <  FileDownloadOutlinedIcon />
            {open && <a href=""><span>Purchase</span></a>}
          </div>
          <div className="flex gap-4 p-2 items-center mb-2">
          <  FileUploadOutlinedIcon/>
            {open && <a href=""><span>Sell</span></a>}
          </div>
          <div className="flex p-2 gap-4  items-center mb-2">
          <  GoDatabase />
            {open && <a href=""><span>Stock Adjustments</span></a>}
          </div>
          <div className="flex p-2 gap-4 items-center mb-2">
          <  MonetizationOnOutlinedIcon/>
            {open && <a href=""><span>Expenses</span></a>}
          </div>
          
          <div className="flex p-2 gap-4 items-center mb-2">
          <  IoWalletOutline />
            {open && <a href=""><span>Petty Cash</span></a>}
          </div>
          <div className="flex gap-4 p-2 items-center mb-2">
          <   DescriptionOutlinedIcon/>
            {open && <a href=""><span>Reports</span></a>}
          </div>
          <div className="flex p-2 gap-4 items-center mb-2">
          <  NotificationsActiveOutlinedIcon/>
            {open && <a href=""><span>Notifications</span></a>}
          </div>
        </div>

      
      </div>
    );
};

export default Sidebar;

    

