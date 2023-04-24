import React from "react";

export default function Modal({ open, onClose, children, title }) {
  return (
    <>
      {/*Main modal*/}
      <div className="flex justify-center items-center ">
        <div
          className={`flex items-center justify-center fixed top-0 left-0 w-full h-full overflow-x-hidden overflow-y-auto bg-[#232323aa] z-50 ${
            open ? "" : "hidden"
          }`}
          onMouseDown={onClose}
        >
          {/*Modal content */}
          <div className="relative w-[35%]" onMouseDown={(e) => e.stopPropagation()}>
            <div className="relative bg-white rounded-lg shadow  p-2 ">
              {/*Modal header*/}
              <div className="flex items-start justify-between p-4 border-b rounded-t ">
                <h3 className="text-xl text-center font-semibold text-gray-900 ">{title}</h3>
                <button
                  type="button"
                  className="text-gray-400 bg-transparent hover:text-gray-900 hover:font-bold text-base p1.5 ml-auto mr-3 inline-flex items-center "
                  onMouseDown={onClose}
                >
                  X
                </button>
              </div>
              {/*Modal body*/}
              <div className="p-6 space-y-6">{children}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
