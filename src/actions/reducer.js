export const CREATE_TASK = "CREATE_TASK";
const initialState = {
  list: [
    {
      title: "Hello",
      completed: false
    },
    {
      title: "BAZINGA",
      completed: true
    }
  ]
};

const tasksReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case CREATE_TASK:
      let original_list = state.list;
      const newList = original_list;
      console.log(newList, "////");

      newList.push({
        title: payload,
        completed: false
      });
      return {
        ...state,
        list: newList
      };
    default:
      return state;
  }
};

export default tasksReducer;

/** Action Creators */
export const setValues = (name, options) => ({
  type: CREATE_TASK,
  payload: { name, options }
});
// import {
//   CREATE_TASK,
//   REMOVE_TASK_SUCCESS,
//   FILTER_TASKS,
//   LOAD_TASKS_SUCCESS,
//   UPDATE_TASK
// } from "./action-types";

// export function tasksReducer(state = initialState, { payload, type }) {
//   switch (type) {

// case REMOVE_TASK_SUCCESS:
//   return state.merge({
//     deleted: payload,
//     previous: state.list,
//     list: state.list.filter(task => task.key !== payload.key)
//   });

// case FILTER_TASKS:
//   return state.set("filter", payload.filterType || "");

// case LOAD_TASKS_SUCCESS:
//   return state.set("list", new List(payload.reverse()));

//     case UPDATE_TASK:
//     const data = state.list;
//     const arr = data;
//     arr[payload.key].completed = payload.changes;
//     return {
//       ...state,
//       list: arr
//     };

//     default:
//     return state;
//   }
// }
