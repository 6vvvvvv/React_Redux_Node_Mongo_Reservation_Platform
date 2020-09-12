import { ADD, DELETE, MARKDONE } from "../action-types/todo-actionTypes";

export const addItem = (payload) => ({
  type: ADD,
  payload,
});

export const deleteItem = (payload) => ({
  type: DELETE,
  payload,
});

export const markItem = (payload) => ({
  type: MARKDONE,
  payload,
});
