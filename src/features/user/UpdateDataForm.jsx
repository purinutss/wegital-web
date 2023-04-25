import React, { useState } from "react";
import { toast } from "react-toastify";

import Input from "../../components/Input";
import * as proportionApi from "../../apis/proportionApi";

export default function UpdateDataForm({ onClose, proportion, fetchProportion }) {
  const [input, setInput] = useState(proportion);

  const handleChangeInput = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value
    });
  };

  const handleEditDataForm = async (e) => {
    e.preventDefault();
    try {
      await proportionApi.updateProportion(proportion.id, input);
      fetchProportion();
      onClose();
      toast.success("Update data successfully.");
    } catch (err) {
      toast.error(err?.response?.data?.message);
    }
  };

  return (
    <>
      <div className="w-[100%] flex justify-center items-center">
        <div className="w-[80%]">
          <form onSubmit={handleEditDataForm}>
            <div className="mb-6">
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 ">
                Height (Cm.)
              </label>
              <Input
                name="height"
                value={input?.height}
                onChange={handleChangeInput}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 "
                required
              />
            </div>
            <div className="mb-6">
              <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 ">
                Weight (Kg.)
              </label>
              <Input
                name="weight"
                value={input?.weight}
                onChange={handleChangeInput}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 "
                required
              />
            </div>
            <div className="mb-6">
              <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 ">
                Waist (Inc.)
              </label>
              <Input
                name="waist"
                value={input?.waist}
                onChange={handleChangeInput}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 "
                required
              />
            </div>
            <div className="mb-6">
              <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 ">
                Date
              </label>
              <Input
                type="date"
                name="date"
                value={input?.date}
                onChange={handleChangeInput}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 "
                required
              />
            </div>
            <div className="flex justify-center gap-3">
              <div>
                <button
                  type="submit"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-lg w-full sm:w-auto px-10 py-2.5 text-center "
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
                    setInput(proportion);
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
