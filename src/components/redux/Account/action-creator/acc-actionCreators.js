import { ADDUSER } from "../action-types/acc-actionTypes";

export const addUser = (payload) => ({
  type: ADDUSER,
  payload,
});
