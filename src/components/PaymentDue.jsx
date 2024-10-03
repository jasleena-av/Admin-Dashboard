import React from "react";
import { TbColumns, TbFileExport } from "react-icons/tb";
import LocalPrintshopOutlinedIcon from "@mui/icons-material/LocalPrintshopOutlined";

const PaymentDue = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
      {/* Sales Payment Due */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex items-center">
          <span className="text-yellow-500 mr-2">⚠️</span>
          <h3 className="font-semibold text-lg">Sales Payment Due</h3>
        </div>
        <div className="mt-4">
          <select className="w-full bg-white p-2 border rounded-md">
            <option>Select location</option>
          </select>
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

        
        <div className="overflow-x-auto">
          <table className="table-auto w-full rounded-lg border border-gray-300">
            <thead>
              <tr className="bg-slate-100 p-2 uppercase text-sm border-2">
                <th className="p-2">Product</th>
                <th className="p-2">Invoice No.</th>
                <th className="p-2">Due Amount</th>
                <th className="p-2">Action</th>
              </tr>
            </thead>
            <tbody className="text-center">
              <tr>
                <td colSpan="4" className="p-4 text-center">
                  No available data
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Pagination */}
       
      <div className="mt-4 flex justify-end gap-3">
        <button className="text-gray-500 rounded-md border p-2">Previous</button>
        <button className="text-gray-500 rounded-md border p-2">Next</button>
      </div>

      </div>

      {/* Purchase Payment Due */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex items-center">
          <span className="text-yellow-500 mr-2">⚠️</span>
          <h3 className="font-semibold text-lg">Purchase Payment Due</h3>
        </div>
        <div className="mt-4">
          <select className="w-full bg-white p-2 border rounded-md">
            <option>Select location</option>
          </select>
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

        
        <div className="overflow-x-auto">
          <table className="table-auto w-full rounded-lg border border-gray-300">
            <thead>
              <tr className="bg-slate-100 p-2 uppercase text-sm border-2">
                <th className="p-2">Product</th>
                <th className="p-2">Invoice No.</th>
                <th className="p-2">Due Amount</th>
                <th className="p-2">Action</th>
              </tr>
            </thead>
            <tbody className="text-center">
              <tr>
                <td colSpan="4" className="p-4 text-center">
                  No available data
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Pagination */}
       {/* Pagination Buttons */}
       <div className="mt-4 flex justify-end gap-3">
        <button className="text-gray-500 rounded-md border p-2">Previous</button>
        <button className="text-gray-500 rounded-md border p-2">Next</button>
      </div>
      </div>
    </div>
  );
};

export default PaymentDue;
