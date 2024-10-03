import React from 'react';
import { PiWarningOctagonLight } from "react-icons/pi";
import { TbColumns } from "react-icons/tb";
import LocalPrintshopOutlinedIcon from '@mui/icons-material/LocalPrintshopOutlined';
import { TbFileExport } from "react-icons/tb";

const ProductStockAlert = () => {
  return (
    <div className="bg-white mt-5 rounded-lg shadow-md p-6">
      {/* Header */}
      <div className="flex items-center">
        <h3 className="font-semibold gap-2 flex items-center text-2xl md:text-2xl">
          < PiWarningOctagonLight className='text-yellow-500' /> Product Stock Alert
        </h3>
      </div>

      {/* Action Buttons */}
      <div className="mt-4 flex flex-wrap gap-3 mb-3">
        <button className="p-2 border bg-slate-50 rounded-md flex items-center text-gray-700 gap-2">
          <TbFileExport />
          Export
        </button>
        <button className="p-2 border bg-slate-50 rounded-md flex items-center text-gray-700 gap-2">
          <TbColumns />
          Column Visibility
        </button>
        <button className="p-2 border bg-slate-50 rounded-md flex items-center text-gray-700">
          <LocalPrintshopOutlinedIcon className="mr-1" />
          Print
        </button>
      </div>

      {/* Responsive Table */}
      <div className="overflow-x-auto">
        <table className="table-auto w-full rounded-lg  border border-gray-700 text-lg">
          <thead className="text-center">
            <tr className="bg-slate-100 text-sm md:text-lg border-2">
              <th className="p-2 md:p-4">Product</th>
              <th className="p-2 md:p-4">Location</th>
              <th className="p-2 md:p-4">Current Stock</th>
            </tr>
          </thead>
          <tbody className="text-center">
            <tr className="border text-sm md:text-lg">
              <td className="p-2 md:p-4">abc</td>
              <td className="p-2 md:p-4">Germany</td>
              <td className="p-2 md:p-4">0 orders</td>
            </tr>
            <tr className="border text-sm md:text-lg">
              <td className="p-2 md:p-4">def</td>
              <td className="p-2 md:p-4">Canada</td>
              <td className="p-2 md:p-4">1 order</td>
            </tr>
            <tr className="border text-sm md:text-lg">
              <td className="p-2 md:p-4">ghi</td>
              <td className="p-2 md:p-4">Canada</td>
              <td className="p-2 md:p-4">1 order</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Pagination Buttons */}
      <div className="mt-4 flex justify-end gap-3">
        <button className="text-gray-500 rounded-md border p-2">Previous</button>
        <button className="text-gray-500 rounded-md border p-2">Next</button>
      </div>
    </div>
  );
};

export default ProductStockAlert;
