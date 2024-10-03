import React from "react";
import { TbColumns, TbFileExport } from "react-icons/tb";
import LocalPrintshopOutlinedIcon from "@mui/icons-material/LocalPrintshopOutlined";
import { PiWarningOctagonLight } from "react-icons/pi";
import { FaSearch } from 'react-icons/fa';

const SalesOrder = () => {
  return (
    <div className="bg-white mt-5 rounded-lg shadow-md p-6">
      <div className="flex items-center">
        <h3 className="font-semibold gap-2 flex items-center text-2xl md:text-2xl">
          <PiWarningOctagonLight className="text-yellow-500" /> Sales Order
        </h3>
      </div>

      
      <div className="mt-4 relative">
          <input
            type="text"
            className="w-full bg-white p-2 border rounded-md pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Search here"
          />
          <span className="absolute right-3 top-2.5 text-gray-500 cursor-pointer">
            < FaSearch />
           
          </span>
        </div>

      
      <div className="mt-4 flex flex-wrap gap-3 mb-3">
        <button className="p-2 border bg-slate-50 rounded-md flex items-center text-gray-700 gap-2">
          <TbFileExport />
          Export
        </button>
        <button className="p-2 border flex items-center bg-slate-50 rounded-md text-gray-700 gap-2">
          <TbColumns />
          Column Visibility
        </button>
        <button className="p-2 border bg-slate-50 rounded-md text-gray-700 flex items-center">
          <LocalPrintshopOutlinedIcon className="mr-1" />
          Print
        </button>
      </div>

      {/* Table */}
<div className="overflow-x-auto">
  <table className="table-auto w-full rounded-lg border border-gray-300">
    <thead>
      <tr className="bg-slate-100 uppercase text-sm border-b border-gray-300">
        <th className="p-4">Action</th>
        <th className="p-4">Date</th>
        <th className="p-4">Order no.</th>
        <th className="p-4">Customer Name</th>
        <th className="p-4">Contact Number</th>
        <th className="p-4">Location</th>
        <th className="p-4">Status</th>
        <th className="p-4">Shipping Status</th>
        <th className="p-4">Quantity Remaining</th>
        <th className="p-4">Added By</th>
      </tr>
    </thead>

    <tbody className="text-center">
      <tr className="border-b border-gray-300">
        <td>
          <select className="w-full m-2 bg-white p-2 border rounded-md">
            <option>Action</option>
          </select>
        </td>
        <td className="p-4">03/10/2024</td>
        <td className="p-4">2</td>
        <td className="p-4">abc</td>
        <td className="p-4">987654544333</td>
        <td className="p-4">Kannur</td>
        <td className="p-4">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded">
            Status
          </button>
        </td>
        <td className="p-4">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded">
            Paid
          </button>
        </td>
        <td className="p-4">10</td>
        <td className="p-4">Admin</td>
      </tr>
      <tr className="border-b border-gray-300">
        <td>
          <select className="w-full m-2 bg-white p-2 border rounded-md">
            <option>Action</option>
          </select>
        </td>
        <td className="p-4">03/11/2024</td>
        <td className="p-4">3</td>
        <td className="p-4">xyz</td>
        <td className="p-4">987654321000</td>
        <td className="p-4">Dubai</td>
        <td className="p-4">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded">
            Status
          </button>
        </td>
        <td className="p-4">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded">
            Unpaid
          </button>
        </td>
        <td className="p-4">5</td>
        <td className="p-4">Manager</td>
      </tr>
    </tbody>
  </table>
</div>


      {/* Pagination */}
      <div className="mt-4 flex justify-end gap-3">
        <button className="text-gray-500 rounded-md border p-2">
          Previous
        </button>
        <button className="text-gray-500 p-2 rounded-md border">Next</button>
      </div>
    </div>
  );
};

export default SalesOrder;
