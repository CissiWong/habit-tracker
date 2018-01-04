import React from "react"
import { PieChart, Pie, Cell } from "recharts"

const COLORS = ['#e53c53', '#85d171']
const RADIAN = Math.PI / 180

export default class Chart extends React.Component {

  render() {
    const total =  this.props.total
    const data = [
      { name: "done", value: this.props.done / total },
      { name: "notDone", value: this.props.notDone / total }
    ]
    return (
      <PieChart width={800} height={400} onMouseEnter={this.onPieEnter}>
        <Pie
          data={data}
          cx={120}
          cy={200}
          innerRadius={60}
          outerRadius={80}
          fill="#8884d8"
          paddingAngle={5} >
          {
            data.map((entry, index) => <Cell fill={COLORS[index % COLORS.length]} />)
          }
        </Pie>
      </PieChart>
    )
  }
}
