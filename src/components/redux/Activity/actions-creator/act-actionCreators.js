import { USERRESERVE, USERCANCEL } from "../action-types/act-actionTypes";

export const userReserve = (payload) => ({
  type: USERRESERVE,
  payload,
});

export const userCancel = (payload) => ({
  type: USERCANCEL,
  payload,
});
