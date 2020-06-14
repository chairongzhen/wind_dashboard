(function() {
    // 基于准备好的dom，初始化echarts实例
    let myChart = echarts.init(document.querySelector(".tree_company .w_chart"));
  
    // (1)准备数据
    let data = {
      year: [
        [24, 40, 101, 134, 90, 230, 210, 230, 120, 230, 210, 120],
        [40, 64, 191, 324, 290, 330, 310, 213, 180, 200, 180, 79]
      ]
    };
  
    // 2. 指定配置和数据
    let option = {
        tooltip : {
            trigger: 'item',
            formatter: "{b}: {c}"
        },
        calculable : false,
        series : [
            {
                name:'矩形图',
                type:'treemap',
                itemStyle: {
                    normal: {
                        label: {
                            show: true,
                            formatter: "{b}"
                        },
                        borderWidth: 1
                    },
        
                },
                data:[
                    {
                        name: '三星',
                        value: 6
                    },
                    {
                        name: '小米',
                        value: 4
                    },
                    {
                        name: '苹果',
                        value: 4
                    },
                    {
                        name: '华为',
                        value: 2
                    },
                    {
                        name: '联想',
                        value: 2
                    },
                    {
                        name: '魅族',
                        value: 1
                    },
                    {
                        name: '中兴',
                        value: 1
                    }
                ]
            }
        ]
    };
                        
    
    // 3. 把配置和数据给实例对象
    myChart.setOption(option);
  
    // 重新把配置好的新数据给实例对象
    myChart.setOption(option);
    window.addEventListener("resize", function() {
      myChart.resize();
    });
  })();


  (function() {
    // 1. 实例化对象
    var myChart = echarts.init(document.querySelector(".rose_company  .w_chart"));
    // 2. 指定配置项和数据
    var option = {
      legend: {
        top: "90%",
        itemWidth: 10,
        itemHeight: 10,
        textStyle: {
          color: "rgba(255,255,255,.5)",
          fontSize: "12"
        }
      },
      tooltip: {
        trigger: "item",
        formatter: "{a} <br/>{b} : {c} ({d}%)"
      },
      // 注意颜色写的位置
      color: [
        "#006cff",
        "#60cda0",
        "#ed8884",
        "#ff9f7f",
        "#0096ff",
        "#9fe6b8",
        "#32c5e9",
        "#1d9dff"
      ],
      series: [
        {
          name: "点位统计",
          type: "pie",
          // 如果radius是百分比则必须加引号
          radius: ["10%", "70%"],
          center: ["50%", "42%"],
          roseType: "radius",
          data: [
            { value: 20, name: "云南" },
            { value: 26, name: "北京" },
            { value: 24, name: "山东" },
            { value: 25, name: "河北" },
            { value: 20, name: "江苏" },
            { value: 25, name: "浙江" },
            { value: 30, name: "深圳" },
            { value: 42, name: "广东" }
          ],
          // 修饰饼形图文字相关的样式 label对象
          label: {
            fontSize: 10
          },
          // 修饰引导线样式
          labelLine: {
            // 连接到图形的线长度
            length: 10,
            // 连接到文字的线长度
            length2: 10
          }
        }
      ]
    };
  
    // 3. 配置项和数据给我们的实例化对象
    myChart.setOption(option);
    // 4. 当我们浏览器缩放的时候，图表也等比例缩放
    window.addEventListener("resize", function() {
      // 让我们的图表调用 resize这个方法
      myChart.resize();
    });
  })();


  (function() {
    // 实例化对象
    var myChart = echarts.init(document.querySelector(".bar_listedcompany .w_chart"));
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