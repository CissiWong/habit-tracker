import React from "react"
import "./task.css"

class Task extends React.Component {

  onClickRemove = () => {
    this.props.onRemove(this.props.index)
  }

  handleDone = () => {
    this.props.onChange(this.props.id)
  }

  render() {
    const categoryClass = `daybox category-${this.props.day}`
    return (
      <div className={categoryClass}>
        <label>
          <input
            type="checkbox"
            checked={this.props.done}
            onChange={this.handleDone} />
          <span>{this.props.task}</span>
          <span>{this.props.icon}</span>
          <button
            type="button"
            className="remove"
            onClick={this.onClickRemove}>TA BORT
          </button>
        </label>
      </div>
    )
  }

}

export default Task
