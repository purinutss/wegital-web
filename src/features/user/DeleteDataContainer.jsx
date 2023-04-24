import React, { useState } from "react";
import Modal from "../../components/Modal";
import DeleteDataForm from "../user/DeleteDataForm";

export default function DeleteDataContainer() {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <button
        className="font-medium text-red-600  hover:underline"
        onClick={(e) => {
          e.stopPropagation();
          setOpen(true);
        }}
      >
        Delete
      </button>
      <Modal open={open} onClose={() => setOpen(false)} title="Do you want to delete this data?">
        <DeleteDataForm onClose={() => setOpen(false)} />
      </Modal>
    </div>
  );
}
