import ReactECharts from 'echarts-for-react';
import { useState } from 'react';

function RedBlackTree() {
  let echartRef: any;
  let categories = [
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
  ];

  let treeNode = {
    nodes: [
      {
        id: 0,
        name: '20',
        value: 20,
        symbolSize: 50,
        x: 300,
        y: 240,
        category: 3
      },
      {
        id: 1,
        name: '10',
        value: 10,
        symbolSize: 50,
        x: 350,
        y: 300,
        category: 0
      },
      {
        id: 2,
        name: '30',
        value: 30,
        symbolSize: 50,
        x: 250,
        y: 300,
        category: 0
      },
      {
        id: 3,
        name: '15',
        value: 15,
        symbolSize: 50,
        x: 300,
        y: 350,
        category: 3
      },
      {
        id: 4,
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
        source: 0,
        target: 1
      },
      {
        source: 0,
        target: 2
      },
      {
        source: 2,
        target: 3
      },
      {
        source: 2,
        target: 4
      }
    ]
  };

  let options = {
    legend:
    {
      data: categories.map(function (a) {
        return a.name;
      })
    },
    series:
    {
      type: 'graph',
      layout: 'none',
      data: treeNode.nodes,
      links: treeNode.links,
      categories: categories,
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

  };


  const nodeClick = (event: any) => {
    let id = event.data.id;
    treeNode.nodes = treeNode.nodes.filter(node => node.id !== id);
    treeNode.links = treeNode.links.filter(link => link.source !== id);
    let echartInstance = echartRef.getEchartsInstance();
    options.series.data = treeNode.nodes;
    options.series.links = treeNode.links;
    echartInstance.setOption(options);
  }

  const onEvents = {
    'click': nodeClick
  }

  return <ReactECharts ref={(e) => { echartRef = e; }} option={options} style={{ height: '800px', width: '100%' }} onEvents={onEvents} />;
};

export default RedBlackTree;