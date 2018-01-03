import React from "react"
import "./input.css"
import bag from "./bag.png"
import bicycle from "./bicycle.png"
import food from "./food.png"
import gymbag from "./gymbag.png"
import sport from "./sport.png"
import toothbrush from "./toothbrush.png"

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
          <div className="container">
            <label htmlFor="activity">
              <h1>DIN AKTIVITET:</h1>
              <input
                id="activity"
                value={this.state.task}
                type="text"
                onChange={this.handleChange} />
            </label>
            <h1>VILKEN DAG?</h1>
          </div>
          <input type="radio" name="day" value="0" onChange={this.changeDay} />MÅ
          <input type="radio" name="day" value="1" onChange={this.changeDay} />TI
          <input type="radio" name="day" value="2" onChange={this.changeDay} />ON
          <input type="radio" name="day" value="3" onChange={this.changeDay} />TO
          <input type="radio" name="day" value="4" onChange={this.changeDay} />FR
          <input type="radio" name="day" value="5" onChange={this.changeDay} />LÖ
          <input type="radio" name="day" value="6" onChange={this.changeDay} />SÖ
          <br />
          <div className="icon-container">
            <h1>VÄLJ EN SYMBOL:</h1>
            <div className="icons">
              <button><img src={bag} alt="bag" /></button>
              <button><img src={bicycle} alt="bicycle" /></button>
              <button><img src={food} alt="food" /></button>
              <button><img src={gymbag} alt="gymbag" /></button>
              <button><img src={toothbrush} alt="toothbrush" /></button>
              <button><img src={sport} alt="sport" /></button>
            </div>
            <button className="add-button" onClick={this.handleSubmit}>LÄGG TILL</button>
          </div>
        </form>

      </div>
    )
  }

}

export default Input
