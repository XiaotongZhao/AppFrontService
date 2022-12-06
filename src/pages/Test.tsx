import React from 'react';
import ReactECharts from 'echarts-for-react';

const Test: React.FC = () => {
  const nodeClick = (event: any) => {
    alert(`node value is ${event.value}`)
  }

  const onChartLegendselectchanged = (event: any) => {
    alert("trigger onChartLegendselectchanged")

  }

  var graph = {
    nodes: [
      {
        id: '0',
        name: '20',
        value: 20,
        symbolSize: 50,
        x: 300,
        y: 240,
        category: 3
      },
      {
        id: '1',
        name: '10',
        value: 10,
        symbolSize: 50,
        x: 350,
        y: 300,
        category: 0
      },
      {
        id: '2',
        name: '30',
        value: 30,
        symbolSize: 50,
        x: 250,
        y: 300,
        category: 0
      },
      {
        id: '3',
        name: '15',
        value: 15,
        symbolSize: 50,
        x: 300,
        y: 350,
        category: 3
      },
      {
        id: '4',
        name: '17',
        value: 17,
        symbolSize: 50,
        x: 200,
        y: 350,
        category: 3
      }
    ],
    links: [
      {
        source: '0',
        target: '1'
      },
      {
        source: '0',
        target: '2'
      },
      {
        source: '2',
        target: '3'
      },
      {
        source: '2',
        target: '4'
      }
    ],
    categories: [
      {
        name: 'A'
      },
      {
        name: 'B'
      },
      {
        name: 'C'
      },
      {
        name: 'D'
      }
    ]
  };

  const onEvents = {
    'click': nodeClick,
    'legendselectchanged': onChartLegendselectchanged
  }

  const options = {
    tooltip: {},
    legend: [
      {
        data: graph.categories.map(function (a) {
          return a.name;
        })
      }
    ],
    series: [
      {
        type: 'graph',
        layout: 'none',
        data: graph.nodes,
        links: graph.links,
        categories: graph.categories,
        roam: true,
        label: {
          show: true,
          position: 'right',
          formatter: '{b}'
        },
        labelLayout: {
          hideOverlap: true
        },
        scaleLimit: {
          min: 1,
          max: 1
        },
        lineStyle: {
          color: 'source'
        }
      }
    ]
  };

  return <ReactECharts option={options} style={{ height: '800px', width: '100%' }} onEvents={onEvents} />;
};

export default Test;