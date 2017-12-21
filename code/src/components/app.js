import React from "react"
import Input from "./library/input"
import DayView from "./library/dayView"

class App extends React.Component {

  render() {
    return (
      <div>
        {/* Här gör vi browserRouter */}
        <DayView />
      </div>
    )
  }

}

export default App
