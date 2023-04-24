import React from "react";
import { useNavigate } from "react-router-dom";
import UpdateUserContainer from "../features/admin/UpdateUserContainer";
import DeleteUserContainer from "../features/admin/DeleteUserContainer";
import CreateUserContainer from "../features/auth/CreateUserContainer";

export default function AllUserAdmin() {
  const navigate = useNavigate();
  return (
    <>
      <div className="p-6 flex flex-col items-center w-full">
        <div className="w-[80%]">
          <div className="pb-4 bg-white flex justify-between items-start">
            <div className="relative mt-1 ">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  className="w-5 h-5 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
              <input
                type="text"
                id="table-search"
                className="block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50"
                placeholder="Search"
              />
            </div>
            <div>
              <CreateUserContainer />
            </div>
          </div>
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left text-gray-500 ">
              <thead className="text-xs text-gray-700 uppercase bg-gray-200 ">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Id
                  </th>
                  <th scope="col" className="px-6 py-3">
                    First Name
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Last Name
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Citizen Id
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Telephone No.
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Username
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr
                  className="bg-slate-50 cursor-pointer"
                  onClick={() => {
                    navigate("/check/:userId");
                  }}
                >
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                  >
                    1
                  </th>
                  <td className="px-6 py-4">Purinut</td>
                  <td className="px-6 py-4">Seesen</td>
                  <td className="px-6 py-4">1103702589161</td>
                  <td className="px-6 py-4">0863441154</td>
                  <td className="px-6 py-4">ausername</td>
                  <td className="px-3 py-4">
                    <div className="flex gap-3">
                      <UpdateUserContainer />
                      <DeleteUserContainer />
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
