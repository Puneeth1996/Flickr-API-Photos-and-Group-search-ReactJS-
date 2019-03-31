import React, {Component} from 'react';
import {Bar, Line, Pie} from 'react-chartjs-2';

class Chart extends Component{

    constructor(){
        super();
        this.state = {
          chartData:{}
        }
      }
    
      componentWillMount(){
        this.getChartData();
      }
    
      getChartData(){
        // Ajax calls here
        this.setState({
          chartData:{
            labels: ['Boston', 'Worcester', 'Springfield', 'Lowell', 'Cambridge', 'New Bedford'],
            datasets:[
              {
                label:'Population',
                data:[
                  617594,
                  181045,
                  153060,
                  106519,
                  105162,
                  95072
                ],
                backgroundColor:[
                  'rgba(255, 99, 132, 0.6)',
                  'rgba(54, 162, 235, 0.6)',
                  'rgba(255, 206, 86, 0.6)',
                  'rgba(75, 192, 192, 0.6)',
                  'rgba(153, 102, 255, 0.6)',
                  'rgba(255, 159, 64, 0.6)',
                  'rgba(255, 99, 132, 0.6)'
                ]
              }
            ]
          }
        });
      }


  static defaultProps = {
    displayTitle:true,
    displayLegend: true,
    legendPosition:'right',
    location:'City'
  }

  render(){
    return (
      <div className="chart">
        <Bar
          data={this.state.chartData}
          options={{
            title:{
              display:"Massachusetts",
              text:'Largest Cities In Massachusetts USA ',
              fontSize:25
            },
            legend:{
              display:"Massachusetts",
              position:"bottom"
            }
          }}
        />

        <Line
          data={this.state.chartData}
          options={{
            title:{
              display:"Massachusetts",
              text:'Largest Cities In Massachusetts USA ',
              fontSize:25
            },
            legend:{
              display:"Massachusetts",
              position:"bottom"
            }
          }}
        />

        <Pie
          data={this.state.chartData}
          options={{
            title:{
              display:"Massachusetts",
              text:'Largest Cities In Massachusetts USA ',
              fontSize:25
            },
            legend:{
              display:"Massachusetts",
              position:"bottom"
            }
          }}
        />
      </div>
    )
  }
}

export default Chart;