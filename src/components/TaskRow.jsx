import React from 'react';
import { Fab } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import DeleteDialog from './DeleteDialog';

class TaskRow extends React.Component {
  constructor(props) {
    super(props);
    this.deleteTask = this.deleteTask.bind(this);
  }

  deleteTask(id) {
    let request = new Request(`/api/v1/tasks/${this.props.id}`, {
      method: 'DELETE',
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
    });

    fetch(request).then(function (response) {
      return response;
    }).then(() => {
      this.props.getTasks();
    }).catch(function (error) {
      console.error(error);
    });
  }

  render() {
    return (
        <tr>
        <td>{this.props.title}</td>
        <td>{this.props.desc}</td>
        <td>

          {/* <Fab 
            color="secondary"
            aria-label="edit"
            size="small"
          >
            <DeleteIcon
              onClick={() => this.deleteTask(this.props.id)}
            >
              <DeleteDialog />
            </DeleteIcon>
          </Fab> */}
          <DeleteDialog />
        </td>
      </tr>
    )
  }
}

export default TaskRow;
