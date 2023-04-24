import React, { useState } from "react";
import Modal from "../../components/Modal";
import UpdateUserForm from "./UpdateUserForm";

export default function UpdateUserContainer() {
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
      <Modal open={open} onClose={() => setOpen(false)} title="Update User Information">
        <UpdateUserForm onClose={() => setOpen(false)} />
      </Modal>
    </div>
  );
}
