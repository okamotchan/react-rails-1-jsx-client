import React from 'react';
import Header from './components/Header';
import TaskTable from './components/TaskTable';
import TaskForm from './components/TaskForm.jsx';

import { Container } from '@material-ui/core';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tasks: [],
    }

    this.getTasks = this.getTasks.bind(this);
  }

  componentDidMount() {
    this.getTasks()
  }

  getTasks() {
    let request = new Request('/api/v1/tasks', {
      method: 'GET',
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    });

    fetch(request).then(function (response) {
      return response.json();
      
    }).then(function (tasks) {
      this.setState({
        tasks: tasks.data
      });
    }.bind(this)).catch(function (error) {
      console.error(error);
    });
  }

  render() {
    const { tasks } = this.state;

    return (
      <div>
        <Header title='app' />
        <Container fixed>
          <TaskForm getTasks={this.getTasks} />
          <br></br>
          <TaskTable tasks={tasks} getTasks={this.getTasks} />
        </Container>
      </div>
    )
  }
}

export default App;
