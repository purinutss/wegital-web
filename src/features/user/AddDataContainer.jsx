import React, { useState } from "react";
import Modal from "../../components/Modal";
import AddDataForm from "./AddDataForm";

export default function AddDataContainer() {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <button
        type="button"
        className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5"
        onClick={() => setOpen(true)}
      >
        Add Data
      </button>
      <Modal open={open} onClose={() => setOpen(false)} title="Add Body Proportion">
        <AddDataForm onClose={() => setOpen(false)} />
      </Modal>
    </div>
  );
}
