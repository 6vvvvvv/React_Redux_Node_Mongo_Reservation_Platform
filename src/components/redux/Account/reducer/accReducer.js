import { ADDUSER } from "../action-types/acc-actionTypes";

const initialState = {
  account: [],
};

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
          },
        ],
      };

    default:
      return state;
  }
};
