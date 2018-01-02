import React from "react"
import "./task.css"

class Task extends React.Component {

  render() {
    const categoryClass = `daybox category-${this.props.day}`
    return (
      <div className={categoryClass}>
        <li>
          {this.props.task}
        </li>
      </div>
    )
  }

}

export default Task
