
import React from 'react';
import { Table } from '@material-ui/core';

import TaskRow from './TaskRow';

class TaskTable extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { tasks, getTasks } = this.props;

    return (
      <Table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task, index) => {
            return (
              <TaskRow 
                key={index} 
                id={task.id} 
                title={task.title} 
                desc={task.desc} 
                getTasks={getTasks} 
              />
            );
          })}
        </tbody>
      </Table>
    );
  }
}

export default TaskTable;
