import axios from "../configs/Axios";

export const login = (input) => axios.post("/auth/login", input);
export const register = (input) => axios.post("/auth/register", input);
export const getMe = () => axios.get("/auth/me");
