import { USERRESERVE, USERCANCEL } from "../action-types/act-actionTypes";
import { initialstate } from "./initialstate";

const initialState = initialstate;

export default (state = initialState, action) => {
  switch (action.type) {
    case USERRESERVE:
      const reserve = action.payload.newactivity;
      state.activity.sport[reserve].paticipants.push(action.payload.username);
      return { ...state };
    case USERCANCEL:
      const cancel = action.payload.newactivity;
      state.activity.sport[cancel].paticipants.pop();
      return { ...state };
    default:
      return state;
  }
};
