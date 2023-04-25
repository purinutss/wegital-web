import React, { useState } from "react";
import { toast } from "react-toastify";

import Input from "../../components/Input";
import * as userApi from "../../apis/userApi";

export default function UpdateUserForm({ onClose, user, setIsUpdateUser }) {
  const [input, setInput] = useState(user);

  const handleEditUserForm = async (e) => {
    e.preventDefault();
    try {
      const updateUser = await userApi.updateUser(user.id, input);
      setIsUpdateUser(true);

      toast.success("Update user is successfully.");
    } catch (err) {
      toast.error(err?.response?.data?.message);
    }
  };

  const handleChangeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div className="w-[100%] flex justify-center items-center">
        <div className="w-[80%]">
          <form onSubmit={handleEditUserForm}>
            <div className="mb-6">
              <label htmlFor="firstName" className="block mb-2 text-sm font-medium text-gray-900 ">
                First Name
              </label>
              <Input
                name="firstName"
                value={input.firstName}
                onChange={handleChangeInput}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 "
              />
            </div>
            <div className="mb-6">
              <label htmlFor="lastName" className="block mb-2 text-sm font-medium text-gray-900 ">
                Last Name
              </label>
              <Input
                name="lastName"
                value={input.lastName}
                onChange={handleChangeInput}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 "
              />
            </div>
            <div className="mb-6">
              <label htmlFor="citizenId" className="block mb-2 text-sm font-medium text-gray-900 ">
                Citizen ID
              </label>
              <Input
                name="citizenId"
                value={input.citizenId}
                onChange={handleChangeInput}
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
                name="telephoneNumber"
                value={input.telephoneNumber}
                onChange={handleChangeInput}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 "
              />
            </div>

            <div className="flex justify-center gap-3">
              <div>
                <button
                  type="submit"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-lg w-full sm:w-auto px-10 py-2.5 text-center "
                  onClick={onClose}
                >
                  Submit
                </button>
              </div>
              <div>
                <button
                  type="button"
                  className="text-white bg-slate-700 hover:bg-slate-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-lg w-full sm:w-auto px-10 py-2.5 text-center "
                  onClick={(e) => {
                    onClose();
                    setInput(user);
                  }}
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
