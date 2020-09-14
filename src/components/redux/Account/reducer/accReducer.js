import {
  ADDUSER,
  SETLOGGEDIN,
  ADDACT,
  REMOVEACT,
} from "../action-types/acc-actionTypes";
import { initialstate } from "./initialstate";

const initialState = initialstate;

export default (state = initialState, action) => {
  switch (action.type) {
    case ADDUSER:
      return {
        ...state,
        account: [
          ...state.account,
          {
            username: action.payload.username,
            email: action.payload.email,
            password: action.payload.password,
            img: "https://s8.gifyu.com/images/avatar78d8a4e4466f08f6.jpg",
            joinactivity: [],
            todo: [],
            count: {
              sport: { jogging: 0, swim: 0, basketball: 0, football: 0 },
            },
          },
        ],
      };
    case SETLOGGEDIN:
      return { ...state, loggedin: !state.loggedin };

    case ADDACT:
      const newaccount = state.account.map((item) =>
        item.username === action.payload.username
          ? {
              ...item,
              joinactivity: [...item.joinactivity, action.payload.newactivity],
              todo: [...item.todo, action.payload.newactivity],
              count: {
                ...item.count,
                sport: { ...item.count.sport, [action.payload.newactivity]: 1 },
              },
            }
          : item
      );
      return { ...state, account: newaccount };

    case REMOVEACT:
      const removefromnewaccount = state.account.map((item) =>
        item.username === action.payload.username
          ? {
              ...item,
              joinactivity: item.joinactivity.filter(
                (item) => item !== action.payload.newactivity
              ),
              todo: item.todo.filter(
                (item) => item !== action.payload.newactivity
              ),
              count: {
                ...item.count,
                sport: { ...item.count.sport, [action.payload.newactivity]: 0 },
              },
            }
          : item
      );
      return { ...state, account: removefromnewaccount };
    default:
      return state;
  }
};
