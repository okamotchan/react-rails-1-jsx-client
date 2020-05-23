
import React from 'react';
import { Table, TableHead, TableRow, TableCell, TableBody } from '@material-ui/core';

import TaskRow from './TaskRow';

class TaskTable extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { tasks, getTasks } = this.props;

    return (
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>
              Title
            </TableCell>
            <TableCell>
              Description
            </TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
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
        </TableBody>
      </Table>
    );
  }
}

export default TaskTable;
