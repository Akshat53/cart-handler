import { get, post, put, deleteRequest } from "../utils/api";

export const getUser = async (params) => {
  const response = await get("/user", params);
  return response.data;
};

export const updateUser = async (params, data) => {
  const response = await post(`/user?userid=${params.userid}`, data);
  return response.data;
};
