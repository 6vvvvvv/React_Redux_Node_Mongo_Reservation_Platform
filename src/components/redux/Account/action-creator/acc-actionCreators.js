import { ADDUSER, SETLOGGEDIN,ADDACT,REMOVEACT} from "../action-types/acc-actionTypes";

export const addUser = (payload) => ({
  type: ADDUSER,
  payload,
});

export const setLoggedin = () => ({
  type: SETLOGGEDIN,
});

export const addActivity = (payload) => ({
  type: ADDACT,
  payload
})


export const removeActivity = (payload) => ({
  type: REMOVEACT,
  payload
})
