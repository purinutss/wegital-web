import React from "react";

export default function DeleteUserForm({ onClose }) {
  return (
    <div className="flex justify-center gap-3">
      <div>
        <button
          type="submit"
          className="text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-lg w-full sm:w-auto px-10 py-2.5 text-center "
        >
          Yes
        </button>
      </div>
      <div>
        <button
          type="button"
          className="text-white bg-slate-700 hover:bg-slate-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-lg w-full sm:w-auto px-10 py-2.5 text-center "
          onMouseDown={onClose}
        >
          No
        </button>
      </div>
    </div>
  );
}
