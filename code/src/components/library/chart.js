import React from "react"
import { PieChart, Pie, Legend, Tooltip } from "recharts"

export default class Chart extends React.Component {


  const TwoSimplePieChart = React.createClass({
  	render () {
    	return (
      	<PieChart width={800} height={400}>
          <Pie isAnimationActive={false} data={data01} cx={200} cy={200} outerRadius={80} fill="#8884d8" label/>
          <Pie data={data02} cx={500} cy={200} innerRadius={40} outerRadius={80} fill="#82ca9d"/>
          <Tooltip/>
         </PieChart>
      );
    }
  })

  
<PieChart width={800} height={400}>
  <Pie data={parseInt(this.state.schedule, 10).length} cx={500} cy={200} innerRadius={40} outerRadius={80} fill="#82ca9d"/>
  <Tooltip />
</PieChart>
