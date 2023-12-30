import * as actions from "./actionTypes";
import { getUser, updateUser } from "../services/userService";

export const getUserAction = (params) => async (dispatch) => {
  const response = await getUser(params);
  dispatch({
    type: actions.GET_USER_DATA,
    value: response.data.name,
  });
  return response.data;
};

export const updateUserAction = (params, data) => async (dispatch) => {
  console.log(params);
  const response = await updateUser(params, data);
  dispatch({
    type: actions.UPDATE_USER_DATA,
    value: response.data.name,
  });
  return response.data;
};
