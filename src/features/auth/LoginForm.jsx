import React, { useState } from "react";
import useAuth from "../../hooks/useAuth";

export default function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { login } = useAuth();

  const handleSubmitLoginForm = async (e) => {
    try {
      e.preventDefault();
      await login(username, password);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className="w-[100%] h-screen flex justify-center items-center bg-slate-200">
        <div className="w-[40%]">
          <div className="flex flex-col text-center font-extrabold text-4xl my-5">Welcome!</div>
          <form onSubmit={handleSubmitLoginForm}>
            <div className="">
              <div className="mb-6">
                <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-900 ">
                  Username
                </label>
                <input
                  type="text"
                  name="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 "
                  required
                />
              </div>
              <div className="mb-6">
                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 ">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                  required
                />
              </div>
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-lg w-full sm:w-auto px-10 py-2.5 text-center "
                >
                  Sign In
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
