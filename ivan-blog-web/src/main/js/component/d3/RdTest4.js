/**
 * Created by ivan.yu on 2016/8/2.
 */

import React from 'react';
import ReactDOM from 'react-dom';
import d3 from 'd3';

const RdTest4 = React.createClass({

    d3Node : null,

    componentDidMount(){
        let width = 600;
        let height = 600;

        let data = [ 30 , 20 , 45 , 112 , 21 ];

        this.d3Node = d3.select(ReactDOM.findDOMNode(this));
        this.d3Node.attr("width",width).attr("height",height);

        //生成线性比例
        var wx = d3.scale.linear()
            .domain([0,d3.max(data)])
            .range([0,500]);

        this.d3Node.selectAll("rect")
                .data(data)
                .enter()
                .append("rect")
                .attr("x",10)
                .attr("y",function(d,i){
                    return i * 30;
                })
                .attr("width",wx) //设置宽度
                .attr("height",28)
                .attr("fill",function(d,i){
                    if(d >= 100){
                        return 'red';
                    }
                    return 'blue';
                });

        //添加坐标轴
        var axis = d3.svg.axis()
            .scale(wx)
            .orient("bottom");

        this.d3Node.append('g')
            .attr("class","axis")
            .attr("transform","translate(10,160)")
            .call(axis);
    },

    render(){
        return (
            <svg>
            </svg>
        );
    }
});

module.exports = RdTest4;