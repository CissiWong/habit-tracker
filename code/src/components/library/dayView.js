import React from "react"
import uuid from "uuid/v4"
import Chart from "./chart"
import Task from "./task"
import Input from "./input"
import "./dayView.css"

class DayView extends React.Component {

  constructor(props) {
    super(props)
    const schedule = JSON.parse(localStorage.getItem("newData"))
    this.state = {
      schedule: schedule || [],
      filter: ""
    }
  }

  handleNewTask = (newActivity, newDay, newIcon) => {
    if (newActivity === ("") || newDay === ("") || newIcon === ("")) {
      alert("Hoppsan! Du glömde fylla i alla fält!")
    }

    const task = {
      id: uuid(), task: newActivity, done: false, day: newDay, icon: newIcon
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
        <div className="progress">
          <div className="weekly-progress">
            <h3>Veckans aktiviteter:<br />
              {this.state.schedule.filter(item => item.done === true).length}
              / {this.state.schedule.length}
            </h3>
            <Chart
              done={this.state.schedule.filter(item => item.done === true).length}
              notDone={this.state.schedule.length
                - this.state.schedule.filter(item => item.done === true).length}
              total={this.state.schedule.length} />
          </div>
          <div className="daily-progress">
            <h3>Dagens aktiviteter:<br />
              {schedule.filter(item =>
                (item.day === this.state.filter && item.done === true)).length}
              / {schedule.filter(item => (item.day === this.state.filter)).length}
            </h3>
            <Chart
              done={schedule.filter(item =>
                (item.day === this.state.filter && item.done === true)).length}
              notDone={schedule.filter(item => (item.day === this.state.filter)).length
                - schedule.filter(item =>
                  (item.day === this.state.filter && item.done === true)).length}
              total={schedule.filter(item => (item.day === this.state.filter)).length} />
          </div>
        </div>
        <div className="tasks">
          {
            schedule.map((task, index) => <Task
              key={task.id}
              index={index}
              id={task.id}
              day={task.day}
              task={task.task}
              done={task.done}
              onChange={this.taskCompleted}
              onRemove={this.handleRemoveItem}
              icon={task.icon} />)
          }
        </div>

      </div>
    )
  }

}

export default DayView
