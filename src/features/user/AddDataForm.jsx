import React from "react";
import Input from "../../components/Input";

export default function AddDataForm({ onClose }) {
  return (
    <>
      <div className="w-[100%] flex justify-center items-center">
        <div className="w-[80%]">
          <form>
            <div className="mb-6">
              <label htmlFor="height" className="block mb-2 text-sm font-medium text-gray-900 ">
                Height (Cm.)
              </label>
              <Input
                type="number"
                name="height"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 "
                required
              />
            </div>
            <div className="mb-6">
              <label htmlFor="weight" className="block mb-2 text-sm font-medium text-gray-900 ">
                Weight (Kg.)
              </label>
              <Input
                type="number"
                name="weight"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 "
                required
              />
            </div>
            <div className="mb-6">
              <label htmlFor="waist" className="block mb-2 text-sm font-medium text-gray-900 ">
                Waist (Inc.)
              </label>
              <Input
                type="number"
                name="waist"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 "
                required
              />
            </div>
            <div className="mb-6">
              <label htmlFor="date" className="block mb-2 text-sm font-medium text-gray-900 ">
                Date
              </label>
              <Input
                type="date"
                name="date"
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
