import React from "react"
import "./input.css"
import chooseIcon from "./chooseicon"
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

  handleChooseIcon = event => {
    this.setState({
      icon: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.onNewTask(this.state.task, this.state.day, this.state.icon)
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
              <h1>Jag ska:</h1>
              <input
                className="activity"
                id="activity"
                value={this.state.task}
                type="text"
                onChange={this.handleChange} />
            </label>
            <h1>När då?</h1>
          </div>
          <input type="radio" name="day" value="0" onChange={this.changeDay} />Måndag
          <input type="radio" name="day" value="1" onChange={this.changeDay} />Tisdag
          <input type="radio" name="day" value="2" onChange={this.changeDay} />Onsdag
          <input type="radio" name="day" value="3" onChange={this.changeDay} />Torsdag
          <input type="radio" name="day" value="4" onChange={this.changeDay} />Fredag
          <input type="radio" name="day" value="5" onChange={this.changeDay} />Lördag
          <input type="radio" name="day" value="6" onChange={this.changeDay} />Söndag
          <br />
          <div className="icon-container">
            <h1>Välj en bild:</h1>
            <div className="icons">
              {
                icons.map(symbol => (<chooseIcon
                  symbol={symbol}
                  setIcon={this.handleChooseIcon} />
                ))}
            </div>
          </div>
        </form>
      </div>
    )
  }

}

export default Input
