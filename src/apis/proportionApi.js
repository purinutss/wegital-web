import axios from "../configs/Axios";

export const createProportion = (input) => axios.get("/", input);
export const getAllProportion = () => axios.get("/");
export const getProportionByUserId = () => axios.get("/user");
