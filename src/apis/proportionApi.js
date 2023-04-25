import axios from "../configs/Axios";

export const createProportion = (input) => axios.post("/proportion", input);
export const getAllProportion = () => axios.get("/proportion");
export const getProportionByUserId = () => axios.get("/proportion/user");
export const deleteProportion = (proportionId) => axios.delete("/proportion/" + proportionId);
export const updateProportion = (proportionId, input) =>
  axios.patch("/proportion/" + proportionId, input);
