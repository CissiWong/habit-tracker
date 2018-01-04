import React from "react"

export default class ChooseIcon extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      habitIcon: ""
    }
  }

  chooseIcon = event => {
    this.setState({
      habitIcon: event.target.value
    }, () => {
      this.props.setIcon(this.state.habitIcon)
    })
  }

  render() {
    return (
      <div>
        <label className="iconlabel">
          <input type="radio" className="iconbutton" value={this.props.symbol} onChange={this.chooseIcon} />
          <img src={this.props.symbol} alt="" />
        </label>
      </div>
    )
  }
}
