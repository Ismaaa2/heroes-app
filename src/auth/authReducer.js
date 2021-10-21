import { types } from "../types/types";

// const state = {
//     name: 'Fernando',
//     logged: true
// }   * *   *  Así va a ser

export const authReducer = (state = {}, action) => {

  switch (action.type) {
    case types.login:
      return {
        ...action.payload,
        logged: true,
      };
    case types.logout:
      return {
        logged: false,
      };
    default:
      return state
  }
};
