import React from "react"
import { PieChart, Pie, Cell } from "recharts"

const COLORS = ["#85d171", "#e53c53"]

export default class Chart extends React.Component {

  render() {
    const total = this.props.total
    const data = [
      { name: "done", value: this.props.done / total },
      { name: "notDone", value: this.props.notDone / total }
    ]
    return (
      <PieChart width={300} height={300} onMouseEnter={this.onPieEnter}>
        <Pie
          data={data}
          cx={120}
          cy={200}
          innerRadius={60}
          outerRadius={80}
          paddingAngle={5} >
          {
            data.map((entry, index) => <Cell fill={COLORS[index % COLORS.length]} />)
          }
        </Pie>
      </PieChart>
    )
  }
}
