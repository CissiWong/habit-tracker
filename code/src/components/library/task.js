import React from "react"
import "./task.css"

class Task extends React.Component {

  onClickRemove = () => {
    this.props.onRemove(this.props.index)
  }

  render() {
    const categoryClass = `daybox category-${this.props.day}`
    return (
      <div className={categoryClass}>
        {this.props.task}
        <button
          type="button"
          className="remove"
          onClick={this.onClickRemove}>TA BORT
        </button>
      </div>
    )
  }

}

export default Task
