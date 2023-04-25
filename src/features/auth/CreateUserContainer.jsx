import React, { useState } from "react";
import Modal from "../../components/Modal";
import CreateUserForm from "./CreateUserForm";

export default function CreateUserContainer({ fetchUser }) {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <button
        type="button"
        className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5"
        onClick={() => setOpen(true)}
      >
        Create User
      </button>
      <Modal open={open} onClose={() => setOpen(false)} title="Add Body Proportion">
        <CreateUserForm onClose={() => setOpen(false)} fetchUser={fetchUser} />
      </Modal>
    </div>
  );
}
