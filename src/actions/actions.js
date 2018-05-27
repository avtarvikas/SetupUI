import {
  CREATE_TASK_ERROR,
  CREATE_TASK,
  REMOVE_TASK_ERROR,
  REMOVE_TASK_SUCCESS,
  FILTER_TASKS,
  LOAD_TASKS_SUCCESS,
  UNDELETE_TASK_ERROR,
  UNLOAD_TASKS_SUCCESS,
  UPDATE_TASK_ERROR,
  UPDATE_TASK
} from "./action-types";

export function createTask(task) {
  return dispatch => {
    dispatch(create(task));
  };
}

export function create(data) {
  return {
    type: CREATE_TASK,
    payload: data
  };
}

export function removeTask(task) {
  return dispatch => {
    dispatch(removeTaskError("error"));
  };
}

export function removeTaskError(error) {
  return {
    type: REMOVE_TASK_ERROR,
    payload: error
  };
}

export function removeTaskSuccess(task) {
  return {
    type: REMOVE_TASK_SUCCESS,
    payload: task
  };
}

export function undeleteTask() {
  return (dispatch, getState) => {
    dispatch(undeleteTaskError("error"));
  };
}

export function undeleteTaskError(error) {
  return {
    type: UNDELETE_TASK_ERROR,
    payload: error
  };
}

export function updateTask(key, changes) {
  return {
    type: UPDATE_TASK,
    payload: { key, changes }
  };
}

export function loadTasksSuccess(tasks) {
  return {
    type: LOAD_TASKS_SUCCESS,
    payload: tasks
  };
}

export function filterTasks(filterType) {
  return {
    type: FILTER_TASKS,
    payload: { filterType }
  };
}

// export function loadTasks() {
//   return (dispatch, getState) => {
//     const { auth } = getState();
//     taskList.path = `tasks/${auth.id}`;
//     taskList.subscribe(dispatch);
//   };
// }

// export function unloadTasks() {
//   taskList.unsubscribe();
//   return {
//     type: UNLOAD_TASKS_SUCCESS
//   };
// }
