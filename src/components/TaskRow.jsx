import React from 'react';
import { Button, Table, TableCell, TableRow } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';

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
          <Button 
            onClick={() => this.deleteTask(this.props.id)}
            variant="outlined"
            startIcon={<DeleteIcon />}
          >
              Delete
          </Button>
        </td>
      </tr>

      // <TableRow>
      //     <TableCell align="">
      //       {this.props.title}
      //     </TableCell>
      //     <TableCell align="left">
      //       {this.props.desc}
      //     </TableCell>
      //     <Button onClick={() => this.deleteTask(this.props.id)} variant="outlined">Delete</Button>
      //   </TableRow>
    )
  }
}

export default TaskRow;
