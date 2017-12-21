import React from "react"
import "./input.css"

class Input extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      task: ""
    }
  }

  handleChange = event => {
    this.setState({
      task: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.onNewTask(this.state.task)
    this.setState({
      task: ""
    })
  }

  render() {
    return (
      <div className="input__wrapper">
        {/* Ska göras dynamisk med JS */}
        <form>
          <select>
            <option value="VECKA 1">VECKA 1</option>
            <option value="VECKA 2">VECKA 2</option>
            <option value="VECKA 3">VECKA 3</option>
          </select><br />
          <label htmlFor="activity" ><h1>DIN AKTIVITET:</h1>
            <input
              id="activity"
              value={this.state.task}
              type="text"
              onChange={this.handleChange} />
          </label>
          <h1>VILKEN DAG?</h1>
          <input type="checkbox" value="monday" />MÅ
          <input type="checkbox" value="tuesday" />TI
          <input type="checkbox" value="wednesday" />ON
          <input type="checkbox" value="thursday" />TO
          <input type="checkbox" value="friday" />FR
          <input type="checkbox" value="saturday" />LÖ
          <input type="checkbox" value="sunday" />Sön <br />
          <button onClick={this.handleSubmit}>LÄGG TILL</button>
        </form>

      </div>
    )
  }

}

export default Input
