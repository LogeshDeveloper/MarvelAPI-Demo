import React, { Component } from "react";
import Chart from "react-apexcharts";

class Charts extends Component {
  constructor(props) {
    super(props);

    this.state = {
    
      series: [{
        name: 'North America',
        data: [31, 40, 28, 51, 42, 109, 100]
      }, {
        name: 'WorldWide',
        data: [11, 32, 45, 32, 34, 52, 41]
      }],
      options: {
        chart: {
          height: 350,
          type: 'area'
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: 'smooth'
        },
        xaxis: {
          type: 'numbers',
          categories: ["100", "200", "300", "400", "500", "600", "700", "800" , "900" , "1000"]
        },
      },
    
    
    };
  }



  render() {
    return (
      

<div id="chart">
<Chart options={this.state.options} series={this.state.series} type="area" height={250} width={500}/>
</div>


    );
  }
}

export default Charts;