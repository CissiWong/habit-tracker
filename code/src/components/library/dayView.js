import React from "react"
import uuid from "uuid/v4"
import Task from "./task"
import Input from "./input"

class DayView extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      schedule: JSON.parse(localStorage.getItem("newData"))
    }
  }

  handleNewTask = newActivity => {
    const task = { id: uuid(), task: newActivity, done: false }
    this.setState({
      schedule: [task, ...this.state.schedule]
    }, () => {
      localStorage.setItem("newData", JSON.stringify(this.state.schedule))
    })
  }

  render() {
    return (
      <div>
        <Input
          onNewTask={this.handleNewTask} />
        <ul>
          {
            this.state.schedule.map(task => <Task
              key={task.id}
              id={task.id}
              task={task.task}
              done={task.done} />)
          }
        </ul>
      </div>
    )
  }

}

export default DayView
