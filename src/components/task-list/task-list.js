import React from "react";
import { List } from "immutable";
import PropTypes from "prop-types";
import TaskItem from "../task-item/task-item";

function TaskList({ removeTask, tasks, updateTask }) {
  let taskItems =
    tasks &&
    tasks.length > 0 &&
    tasks.map((task, index) => {
      return (
        <TaskItem
          key={index}
          id={index}
          task={task}
          removeTask={removeTask}
          updateTask={updateTask}
        />
      );
    });

  return <div className="task-list">{taskItems}</div>;
}

TaskList.propTypes = {
  removeTask: PropTypes.func.isRequired,
  tasks: PropTypes.instanceOf(List).isRequired,
  updateTask: PropTypes.func.isRequired
};

export default TaskList;
