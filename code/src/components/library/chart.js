import React from "react"
import { PieChart, Pie, Tooltip } from "recharts"

export default class Chart extends React.Component {

  render () {
    let total = this.props.total
    const data = [{name:"done", value: this.props.done / total, color: "green"}, {name:"notDone", value: this.props.notDone / total, color: "red"}]
  	return (
      <PieChart width={800} height={400}>
        <Pie data={data} cx={500} cy={200} innerRadius={40} outerRadius={80} fill="#82ca9d"/>
        <Tooltip />
      </PieChart>
      );
    }
  }
