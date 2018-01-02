import React from "react"
import uuid from "uuid/v4"
import Task from "./task"
import Input from "./input"

class DayView extends React.Component {

  constructor(props) {
    super(props)
    const schedule = JSON.parse(localStorage.getItem("newData"))
    this.state = {
      schedule: schedule || []
    }
  }

  handleNewTask = (newActivity, newDay) => {
    const task = {
      id: uuid(), task: newActivity, done: false, day: newDay
    }
    this.setState({
      schedule: [task, ...this.state.schedule]
    }, () => {
      localStorage.setItem("newData", JSON.stringify(this.state.schedule))
    })
  }

  handleRemoveItem = id => {
    const newTasks = [...this.state.schedule]
    newTasks.splice(id, 1)
    this.setState({
      schedule: newTasks
    }, () => {
      localStorage.setItem("newData", JSON.stringify(this.state.schedule))
    })
  }

  taskCompleted = id => {
    const newSchedule = this.state.schedule.map(item => {
      if (item.id === id) {
        item.done = !item.done
      }
      return item
    })
    this.setState({
      schedule: newSchedule
    })
  }

  render() {
    const days = this.state.schedule.sort((a, b) => (b.day - a.day))
    return (
      <div>
        <Input
          onNewTask={this.handleNewTask} />
        <ul>
          {
            days.map((task, index) => <Task
              key={task.id}
              index={index}
              id={task.id}
              day={task.day}
              task={task.task}
              done={task.done}
              onChange={this.taskCompleted}
              onRemove={this.handleRemoveItem} />)
          }
        </ul>
      </div>
    )
  }

}

export default DayView
