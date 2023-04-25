import React from "react";
import useAuth from "../../hooks/useAuth";

export default function LogoutButton() {
  const { logout } = useAuth();
  return (
    <div>
      <button
        type="button"
        className="text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5"
        onClick={logout}
      >
        Logout
      </button>
    </div>
  );
}
