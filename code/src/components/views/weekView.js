import React from "react"
import Task from "./library/task"

class Week extends React.Component {

  render() {
    return (
      <div>
        <ul>
          {
            this.state.schedule.map(task => {
              return <Task
                task={task} />
            })
          }
        </ul>
      </div>
    )
  }

}

export default Week
