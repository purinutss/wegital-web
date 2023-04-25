import axios from "../configs/Axios";

export const updateUser = (userId, input) => axios.patch("/user" + userId, input);
export const deleteUser = (userId) => axios.delete("/user" + userId);
export const getAllUsers = () => axios.get("/user");
export const getUserById = (userId) => axios.get("/user" + userId);
