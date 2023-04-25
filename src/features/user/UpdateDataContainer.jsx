import React, { useState } from "react";
import Modal from "../../components/Modal";
import UpdateDataForm from "./UpdateDataForm";

export default function UpdateDataContainer({ proportion, fetchProportion }) {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <div>
        <button
          type="button"
          className="font-medium text-blue-600  hover:underline"
          onClick={(e) => {
            e.stopPropagation();
            setOpen(true);
          }}
        >
          Edit
        </button>
      </div>
      <Modal open={open} onClose={() => setOpen(false)} title="Update Body Proportion">
        <UpdateDataForm
          onClose={() => setOpen(false)}
          proportion={proportion}
          fetchProportion={fetchProportion}
        />
      </Modal>
    </div>
  );
}
