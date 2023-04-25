import React, { useState } from "react";
import { toast } from "react-toastify";

import * as authApi from "../../apis/AuthApi";
import Input from "../../components/Input";
import validateRegister from "../../validators/RegisterValidator";

const initialInput = {
  firstName: "",
  lastName: "",
  citizenId: "",
  telephoneNumber: "",
  username: "",
  password: ""
};

export default function CreateUserForm({ onClose, fetchUser }) {
  const [input, setInput] = useState(initialInput);
  const [error, setError] = useState({});

  const handleChangeInput = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmitForm = async (e) => {
    try {
      e.preventDefault();
      const result = validateRegister(input);

      if (result) {
        setError(result);
      } else {
        setError({});
        // startLoading();
        await authApi.register(input);
        setInput(initialInput);
        onClose();
        fetchUser();
        toast.success("create user is successfully");
      }
    } catch (err) {
      toast.error(err?.response?.data?.message);
    }
    // } finally {
    //   stopLoading();
    // }
  };

  return (
    <>
      <div className="w-[100%] flex justify-center items-center">
        <div className="w-[95%]">
          <form onSubmit={handleSubmitForm}>
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
                  value={input.firstName}
                  onChange={handleChangeInput}
                  error={error.firstName}
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
                  error={error.lastName}
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
                  value={input.citizenId}
                  onChange={handleChangeInput}
                  error={error.citizenId}
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
                  error={error.telephoneNumber}
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
                  value={input.username}
                  onChange={handleChangeInput}
                  error={error.username}
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
                  value={input.password}
                  onChange={handleChangeInput}
                  error={error.password}
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
                  onClick={() => {
                    onClose();
                    setInput(initialInput);
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
