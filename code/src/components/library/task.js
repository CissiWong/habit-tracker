import React from "react"

class Task extends React.Component {

  render() {
    return (
      <li>
        {this.props.task}
      </li>
    )
  }

}

export default Task
