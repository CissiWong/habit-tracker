import React from "react"

export default class chooseIcon extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      icon: ""
    }
  }

  chooseIcon = event => {
    this.setState({
      icon: event.target.value
    }, () => {
      this.props.setIcon(this.state.icon)
    })
  }

  render() {
    return (
      <div>
        <label className="iconlabel">
          <input type="radio" className="iconbutton" value={this.props.symbol} onChange={this.chooseIcon} />
          <img src={this.props.symbol} />
        </label>
      </div>
    )
  }
}
