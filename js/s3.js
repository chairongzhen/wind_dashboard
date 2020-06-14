(function () {
    // 1. 实例化对象
    let myChart = echarts.init(document.querySelector(".hori_company  .w_chart"));
    // 2. 指定配置项和数据
    let option = {
        calculable: true,
        xAxis: [
            {
                type: 'value',
                axisLabel: {
                    textStyle: {
                        color: "rgba(255,255,255,.6)",
                        fontSize: "12"
                    }
                },
            }
        ],
        yAxis: [
            {
                type: 'category',
                data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
                axisLabel: {
                    textStyle: {
                        color: "rgba(255,255,255,.6)",
                        fontSize: "12"
                    }
                },
            }
        ],
        series: [
            {
                name: '直接访问',
                type: 'bar',
                stack: '总量',
                itemStyle: { normal: { label: { show: true, position: 'insideRight' } } },
                data: [320, 302, 301, 334, 390, 330, 320]
            },
            {
                name: '邮件营销',
                type: 'bar',
                stack: '总量',
                itemStyle: { normal: { label: { show: true, position: 'insideRight' } } },
                data: [120, 132, 101, 134, 90, 230, 210]
            },
            {
                name: '联盟广告',
                type: 'bar',
                stack: '总量',
                itemStyle: { normal: { label: { show: true, position: 'insideRight' } } },
                data: [220, 182, 191, 234, 290, 330, 310]
            },
            {
                name: '视频广告',
                type: 'bar',
                stack: '总量',
                itemStyle: { normal: { label: { show: true, position: 'insideRight' } } },
                data: [150, 212, 201, 154, 190, 330, 410]
            },
            {
                name: '搜索引擎',
                type: 'bar',
                stack: '总量',
                itemStyle: { normal: { label: { show: true, position: 'insideRight' } } },
                data: [820, 832, 901, 934, 1290, 1330, 1320]
            }
        ]
    };


    // 3. 配置项和数据给我们的实例化对象
    myChart.setOption(option);
    // 4. 当我们浏览器缩放的时候，图表也等比例缩放
    window.addEventListener("resize", function () {
        // 让我们的图表调用 resize这个方法
        myChart.resize();
    });
})();


(function () {
    // 1. 实例化对象
    let myChart = echarts.init(document.querySelector(".funnel_company  .w_chart"));
    // 2. 指定配置项和数据
    let option = {

        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c}%"
        },

        calculable: true,
        series: [
            {
                name: '漏斗图',
                type: 'funnel',
                width: '80%',
                height: '45%',
                x: '5%',
                y: '50%',
                data: [
                    { value: 60, name: '访问' },
                    { value: 30, name: '咨询' },
                    { value: 10, name: '订单' },
                    { value: 80, name: '点击' },
                    { value: 100, name: '展现' }
                ]
            },
            {
                name: '金字塔',
                type: 'funnel',
                width: '80%',
                height: '45%',
                x: '5%',
                y: '5%',
                sort: 'ascending',
                data: [
                    { value: 60, name: '访问' },
                    { value: 30, name: '咨询' },
                    { value: 10, name: '订单' },
                    { value: 80, name: '点击' },
                    { value: 100, name: '展现' }
                ]
            },


        ]
    };



    // 3. 配置项和数据给我们的实例化对象
    myChart.setOption(option);
    // 4. 当我们浏览器缩放的时候，图表也等比例缩放
    window.addEventListener("resize", function () {
        // 让我们的图表调用 resize这个方法
        myChart.resize();
    });
})();


(function () {
    // 1. 实例化对象
    let myChart = echarts.init(document.querySelector(".circle_company  .w_chart"));


    var dataStyle = {
        normal: {
            label: {show:false},
            labelLine: {show:false}
        }
    };
    var placeHolderStyle = {
        normal : {
            color: 'rgba(0,0,0,0)',
            label: {show:false},
            labelLine: {show:false}
        },
        emphasis : {
            color: 'rgba(0,0,0,0)'
        }
    };
    let option = {
        tooltip : {
            show: true,
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        series : [
            {
                name:'1',
                type:'pie',
                clockWise:false,
                radius : [ '50%', '60%' ],//内圈半径，外圈半径
                center : ['50%','55%'],//饼状图位置，第一个参数是左右，第二个是上下。
                itemStyle : dataStyle,
                data:[
                    {
                        value:68,
                        name:'68%的人表示过的不错'
                    },
                    {
                        value:32,
                        name:'invisible',
                        itemStyle : placeHolderStyle
                    }
                ]
            }, 
        ]
    };
                        
                        
                        



    // 3. 配置项和数据给我们的实例化对象
    myChart.setOption(option);
    // 4. 当我们浏览器缩放的时候，图表也等比例缩放
    window.addEventListener("resize", function () {
        // 让我们的图表调用 resize这个方法
        myChart.resize();
    });
})();