import { Action, Reducer } from "@reduxjs/toolkit";

const initialState = {
  loginModalOpen: false,
  registerModalOpen: false,
};

const authReducer: Reducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case "loginModal":
      return { ...state, loginModalOpen: true };

    case "registerModal":
      return { ...state, registerModalOpen: true };

    default:
      return state;
  }
};

export default authReducer;
