import React from "react"
import uuid from "uuid/v4"
import Task from "./task"
import Input from "./input"
import "./dayView.css"

class DayView extends React.Component {

  constructor(props) {
    super(props)
    const schedule = JSON.parse(localStorage.getItem("newData"))
    this.state = {
      schedule: schedule || [],
      filter: "",
      scheduleDone: ""
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
    }, () => {
      localStorage.setItem("newData", JSON.stringify(this.state.schedule))
    })
  }

  filterDay = event => {
    this.setState({
      filter: event.target.value
    })
  }

  render() {
    let schedule = this.state.schedule.sort((a, b) => (b.day - a.day))
    if (this.state.filter !== "") {
      schedule = schedule.filter(item => (
        item.day === this.state.filter
      ))
    }
    return (
      <div>
        <div className="input-container">
          <Input
            onNewTask={this.handleNewTask} />
        </div>
        <div className="day-container">
          <select className="scrollDown" onChange={this.filterDay}>
            <option className="weekday">Välj dag...</option>
            <option className="weekday" value="0">Måndag</option>
            <option className="weekday" value="1">Tisdag</option>
            <option className="weekday" value="2">Onsdag</option>
            <option className="weekday" value="3">Torsdag</option>
            <option className="weekday" value="4">Fredag</option>
            <option className="weekday" value="5">Lördag</option>
            <option className="weekday" value="6">Söndag</option>
            <option className="weekday" value="">Visa allt</option>
          </select>
        </div>
        Avklarade aktiviteter: {this.state.schedule.filter(item => item.done === true).length}<br />
        Alla veckans aktiviteter: {this.state.schedule.length} <br />
        Dagens aktiviteter: {schedule.filter(item => (item.day === this.state.filter)).length}
        <ul>
          {
            schedule.map((task, index) => <Task
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
