import React from 'react';
import { Input, TextField, Table, TableContainer, TableHead, TableBody, TableRow, TableCell, Button } from '@material-ui/core';

class TaskForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      desc: ''
    }
    this.createTask = this.createTask.bind(this);
  }

  createTask(event) {
    let request = new Request('/api/v1/tasks', {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
      body: JSON.stringify({
        title: this.state.title,
        desc: this.state.desc
      })
    });

    fetch(request).then(function (response) {
      return response.json();
    }).then((task) => {
      this.props.getTasks();
    }).catch(function (error) {
      console.error(error);
    }).finally(() => {
      this.setState({
        title: '',
        desc: ''
      })
    });

    event.preventDefault();
  }

  render() {
    let { title, desc } = this.state;

    return (
      <form onSubmit={this.createTask}>
        <TextField
          variant="outlined"
          input
          type="text" value={title}
          placeholder="Title"
          onChange={(e) => {
            this.setState({
              title: e.target.value
            })
          }}
        />
        
        <TextField
          variant="outlined"
          input
          type="text" value={desc}
          placeholder="Description"
          onChange={(e) => {
            this.setState({
              desc: e.target.value
            })
          }}
        />
        
        <Button onClick={this.createTask.bind(this)} variant="outlined">create task</Button>
      </form>
    )
  }
}

export default TaskForm;
