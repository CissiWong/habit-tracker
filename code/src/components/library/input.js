import React from "react"
import "./input.css"
import ChooseIcon from "./chooseicon"
import bag from "./bag.png"
import bicycle from "./bicycle.png"
import food from "./food.png"
import gymbag from "./gymbag.png"
import sport from "./sport.png"
import toothbrush from "./toothbrush.png"

const icons = [bag, bicycle, food, gymbag, sport, toothbrush]

class Input extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      task: "",
      day: "",
      icon: ""
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

  handleChooseIcon = icon => {
    this.setState({
      icon
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.onNewTask(this.state.task, this.state.day, this.state.icon)
    this.setState({
      task: "",
      day: ""
    })
  }

  render() {
    return (
      <div className="input__wrapper">
        {/* Ska göras dynamisk med JS */}
        <form>
          <div className="container">
            <h1>Vad ska du göra?</h1>
            <label htmlFor="activity">
              <input
                className="activity"
                id="activity"
                value={this.state.task}
                type="text"
                onChange={this.handleChange} />
            </label>
            <h1>På vilken dag?</h1>
          </div>
          <div className="day-container">
            <input type="radio" name="day" value="0" onChange={this.changeDay} /><p>Måndag</p>
            <input type="radio" name="day" value="1" onChange={this.changeDay} /><p>Tisdag</p>
            <input type="radio" name="day" value="2" onChange={this.changeDay} /><p>Onsdag</p>
            <input type="radio" name="day" value="3" onChange={this.changeDay} /><p>Torsdag</p>
            <input type="radio" name="day" value="4" onChange={this.changeDay} /><p>Fredag</p>
            <input type="radio" name="day" value="5" onChange={this.changeDay} /><p>Lördag</p>
            <input type="radio" name="day" value="6" onChange={this.changeDay} /><p>Söndag</p>
          </div>
          <div className="icon-container">
            <h1>Välj en bild:</h1>
            <div className="icons">
              {
                icons.map(symbol => (<ChooseIcon
                  symbol={symbol}
                  setIcon={this.handleChooseIcon} />
                ))}
            </div>
            <button className="add-button" onClick={this.handleSubmit}>LÄGG TILL</button>
          </div>
        </form>
      </div>
    )
  }

}

export default Input
