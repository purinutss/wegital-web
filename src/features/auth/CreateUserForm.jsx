import React from "react";
import Input from "../../components/Input";

export default function CreateUserForm({ onClose }) {
  return (
    <>
      <div className="w-[100%] flex justify-center items-center">
        <div className="w-[95%]">
          <form>
            <div className="flex gap-3">
              <div className="mb-6">
                <label
                  htmlFor="firstName"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  First Name
                </label>
                <Input
                  name="firstName"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 "
                />
              </div>
              <div className="mb-6">
                <label htmlFor="lastName" className="block mb-2 text-sm font-medium text-gray-900 ">
                  Last Name
                </label>
                <Input
                  name="lastName"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 "
                />
              </div>
            </div>
            <div className="flex gap-3">
              <div className="mb-6">
                <label
                  htmlFor="citizenId"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Citizen ID
                </label>
                <Input
                  name="citizenId"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 "
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="Telephone Number"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Telephone Number
                </label>
                <Input
                  name="Telephone Number"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 "
                />
              </div>
            </div>
            <div className="flex gap-3">
              <div className="mb-6">
                <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-900 ">
                  Username
                </label>
                <Input
                  name="username"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 "
                />
              </div>
              <div className="mb-6">
                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 ">
                  Password
                </label>
                <Input
                  type="password"
                  name="password"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 "
                />
              </div>
            </div>

            <div className="flex justify-center gap-3">
              <div>
                <button
                  type="submit"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-lg w-full sm:w-auto px-10 py-2.5 text-center "
                >
                  Create
                </button>
              </div>
              <div>
                <button
                  type="button"
                  className="text-white bg-slate-700 hover:bg-slate-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-lg w-full sm:w-auto px-10 py-2.5 text-center "
                  onMouseDown={onClose}
                >
                  Cancel
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}