  // 上市公司市值与企业家数柱状图
  (function() {
    // 实例化对象
    var myChart = echarts.init(document.querySelector(".bar_company .w_chart"));
    // 指定配置和数据
    var option = {
      color: ["#2f89cf"],
      tooltip: {
        trigger: "axis",
        axisPointer: {
          // 坐标轴指示器，坐标轴触发有效
          type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
        }
      },
      grid: {
        left: "0%",
        top: "10px",
        right: "0%",
        bottom: "4%",
        containLabel: true
      },
      xAxis: [
        {
          type: "category",
          data: [
            "旅游行业",
            "教育培训",
            "游戏行业",
            "医疗行业",
            "电商行业",
            "社交行业",
            "金融行业"
          ],
          axisTick: {
            alignWithLabel: true
          },
          axisLabel: {
            textStyle: {
              color: "rgba(255,255,255,.6)",
              fontSize: "12"
            }
          },
          axisLine: {
            show: false
          }
        }
      ],
      yAxis: [
        {
          type: "value",
          axisLabel: {
            textStyle: {
              color: "rgba(255,255,255,.6)",
              fontSize: "12"
            }
          },
          axisLine: {
            lineStyle: {
              color: "rgba(255,255,255,.1)"
              // width: 1,
              // type: "solid"
            }
          },
          splitLine: {
            lineStyle: {
              color: "rgba(255,255,255,.1)"
            }
          }
        }
      ],
      series: [
        {
          name: "直接访问",
          type: "bar",
          barWidth: "35%",
          data: [200, 300, 300, 900, 1500, 1200, 600],
          itemStyle: {
            barBorderRadius: 5
          }
        }
      ]
    };
  
    // 把配置给实例对象
    myChart.setOption(option);
    window.addEventListener("resize", function() {
      myChart.resize();
    });
  
  })();

    
    (function() {
        // 实例化对象
        var myChart = echarts.init(document.querySelector(".wordcloud_company .w_chart"));
        // 指定配置和数据
        var option = {
            tooltip: {},
            series: [ {
                type: 'wordCloud',
                gridSize: 2,
                sizeRange: [12, 50],
                rotationRange: [-90, 90],
                shape: 'pentagon',
                width: 600,
                height: 400,
                drawOutOfBound: true,
                textStyle: {
                    normal: {
                        color: function () {
                            return 'rgb(' + [
                                Math.round(Math.random() * 160),
                                Math.round(Math.random() * 160),
                                Math.round(Math.random() * 160)
                            ].join(',') + ')';
                        }
                    },
                    emphasis: {
                        shadowBlur: 10,
                        shadowColor: '#333'
                    }
                },
                data: [
                    {
                        name: 'Sam S Club',
                        value: 10000,
                        textStyle: {
                            normal: {
                                color: 'black'
                            },
                            emphasis: {
                                color: 'red'
                            }
                        }
                    },
                    {
                        name: 'Macys',
                        value: 6181
                    },
                    {
                        name: 'Amy Schumer',
                        value: 4386
                    },
                    {
                        name: 'Jurassic World',
                        value: 4055
                    },
                    {
                        name: 'Charter Communications',
                        value: 2467
                    },
                    {
                        name: 'Chick Fil A',
                        value: 2244
                    },
                    {
                        name: 'Planet Fitness',
                        value: 1898
                    },
                    {
                        name: 'Pitch Perfect',
                        value: 1484
                    },
                    {
                        name: 'Express',
                        value: 1112
                    },
                    {
                        name: 'Home',
                        value: 965
                    },
                    {
                        name: 'Johnny Depp',
                        value: 847
                    },
                    {
                        name: 'Lena Dunham',
                        value: 582
                    },
                    {
                        name: 'Lewis Hamilton',
                        value: 555
                    },
                    {
                        name: 'KXAN',
                        value: 550
                    },
                    {
                        name: 'Mary Ellen Mark',
                        value: 462
                    },
                    {
                        name: 'Farrah Abraham',
                        value: 366
                    },
                    {
                        name: 'Rita Ora',
                        value: 360
                    },
                    {
                        name: 'Serena Williams',
                        value: 282
                    },
                    {
                        name: 'NCAA baseball tournament',
                        value: 273
                    },
                    {
                        name: 'Point Break',
                        value: 265
                    }
                ]
            } ]
        };
      
        // 把配置给实例对象
        myChart.setOption(option);
        window.addEventListener("resize", function() {
          myChart.resize();
        });
      
      })();


      (function () {
        // 1. 实例化对象
        let myChart = echarts.init(document.querySelector(".circle_company  .w_chart"));
    
    
        var option = {
          series: {
              type: 'sunburst',
              data: [{
                  name: 'A',
                  value: 10,
                  children: [{
                      value: 3,
                      name: 'Aa'
                  }, {
                      value: 5,
                      name: 'Ab'
                  }]
              }, {
                  name: 'B',
                  children: [{
                      name: 'Ba',
                      value: 4
                  }, {
                      name: 'Bb',
                      value: 2
                  }]
              }, {
                  name: 'C',
                  value: 3
              }]
          }
      };
                            
                            
    
    
    
        // 3. 配置项和数据给我们的实例化对象
        myChart.setOption(option);
        // 4. 当我们浏览器缩放的时候，图表也等比例缩放
        window.addEventListener("resize", function () {
            // 让我们的图表调用 resize这个方法
            myChart.resize();
        });
    })(); 