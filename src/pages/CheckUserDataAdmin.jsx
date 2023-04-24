import React from "react";

export default function CheckUserDataAdmin() {
  return (
    <>
      <div className="p-6 flex flex-col items-center w-full">
        <div className="w-[80%]">
          <div className="mb-2">
            <div className="flex text-lg">
              <div className="font-bold">Name : &nbsp;</div>
              <div>Purinut Seesen</div>
            </div>
            <div className="flex text-lg">
              <div className="font-bold">Telephone : &nbsp;</div>
              <div>0863441154</div>
            </div>
            <div className="flex text-lg">
              <div className="font-bold">CitizenID : &nbsp;</div>
              <div>1103702589161</div>
            </div>
          </div>
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left text-gray-500 ">
              <thead className="text-xs text-gray-700 uppercase bg-gray-200 ">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Date
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Height
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Weight
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Waist
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-slate-50 cursor-pointer">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                  >
                    24/04/2023
                  </th>
                  <td className="px-6 py-4">168</td>
                  <td className="px-6 py-4">80</td>
                  <td className="px-6 py-4">35</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
