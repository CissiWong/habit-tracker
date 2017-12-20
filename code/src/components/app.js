import React from "react"
import Input from "./library/input"
import DayView from "./views/dayView"

class App extends React.Component {

  render() {
    return (
      <div>
        <Input />
        {/* Här gör vi browserRouter */}
        <DayView />
      </div>
    )
  }

}

export default App
