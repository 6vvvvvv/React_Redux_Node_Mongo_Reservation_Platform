import { ADD, DELETE, MARKDONE } from "../action-types/todo-actionTypes";

const initialState = {
  todolist: [
    { id: 1, task: "running", done: false },
    { id: 2, task: "running2", done: false },
  ],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD:
      return {
        ...state,
        todolist: [
          ...state.todolist,
          { id: state.todolist.length + 1, task: action.payload, done: false },
        ],
      };
    case DELETE:
      const newtodolist = state.todolist.filter(
        (item) => item.id !== action.payload
      );

      return { ...state, todolist: newtodolist};

    case MARKDONE:
      const marktodolist = state.todolist.map((todo) =>
        todo.id === action.payload ? { ...todo, done: !todo.done } : todo
      );

      return { ...state, todolist: marktodolist };

    default:
      return state;
  }
};
