import * as actions from "./actionTypes";

const initialState = {
  userName: "aksht",
  action: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.UPDATE_USER_DATA:
      return {
        ...state,
        userName: action.value,
        action: "update",
      };
    case actions.DELETE_USER_DATA:
      return {
        ...state,
        userName: action.value,
        action: "delete",
      };
    case actions.GET_USER_DATA:
      return {
        ...state,
        userName: action.value,
        action: "get",
      };
    default:
      return {
        ...state,
      };
  }
};

export default reducer;
