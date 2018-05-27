import React, { Component } from "react";
import { List } from "immutable";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";

import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { getAndSetValues } from "../actions";
import Notification from "../components/notification";
import TaskFilters from "../components/task-filters";
import TaskForm from "../components/task-form";
import TaskList from "../components/task-list";

export class TasksPage extends Component {
  state = {
    list: []
  };
  componentWillMount() {
    this.setState({
      list: this.props.tasks
    });
  }

  componentWillReceiveProps(props) {
    console.log(props);

    this.setState({
      list: props.tasks
    });
  }

  getFilterParam(search) {
    const params = new URLSearchParams(search);
    return params.get("filter");
  }

  render() {
    console.log(this.props);

    return (
      <div className="g-row">
        <div className="g-col">
          <TaskForm handleSubmit={this.props.getAndSetValues} />
        </div>

        <div className="g-col">
          <TaskFilters filter={this.props.filterType} />
          <TaskList
            removeTask={this.props.removeTask}
            tasks={this.state.list}
            updateTask={this.props.updateTask}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    tasks: state.tasksReducer.list
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      getAndSetValues
    },
    dispatch
  );
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(TasksPage)
);
