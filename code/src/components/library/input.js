import React from "react"
import "./input.css"

class Input extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      task: "",
      day: ""
    }
  }

  handleChange = event => {
    this.setState({
      task: event.target.value
    })
  }

  changeDay = event => {
    this.setState({
      day: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.onNewTask(this.state.task, this.state.day)
    this.setState({
      task: ""
    })
  }

  render() {
    return (
      <div className="input__wrapper">
        {/* Ska göras dynamisk med JS */}
        <form>
          <label htmlFor="activity" ><h1>DIN AKTIVITET:</h1>
            <input
              id="activity"
              value={this.state.task}
              type="text"
              onChange={this.handleChange} />
          </label>
          <h1>VILKEN DAG?</h1>
          <input type="checkbox" name="day" value="0" onChange={this.changeDay} />MÅ
          <input type="checkbox" name="day" value="1" onChange={this.changeDay} />TI
          <input type="checkbox" name="day" value="2" onChange={this.changeDay} />ON
          <input type="checkbox" name="day" value="3" onChange={this.changeDay} />TO
          <input type="checkbox" name="day" value="4" onChange={this.changeDay} />FR
          <input type="checkbox" name="day" value="5" onChange={this.changeDay} />LÖ
          <input type="checkbox" name="day" value="6" onChange={this.changeDay} />SÖ
          <br />
          <button onClick={this.handleSubmit}>LÄGG TILL</button>
        </form>

      </div>
    )
  }

}

export default Input
