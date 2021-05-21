import { Action, Reducer } from "@reduxjs/toolkit";

const initialState = {
  loginModalOpen: false,
  registerModalOpen: false,
};

const authReducer: Reducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case "login":
      return { ...state, loginModalOpen: true };

    case "register":
      return { ...state, registerModalOpen: true };

    default:
      return state;
  }
};

export default authReducer;
