/**
 * Created by ivan.yu on 2016/8/2.
 */

import React from 'react';
import ReactDOM from 'react-dom';
import d3 from 'd3';

const RdTest5 = React.createClass({

    d3Node : null,
    dataLen : 15,

    getInitialState(){
        let data = this.random();
        return {
            data : data,
            width : 600,
            height  : 600,
        }
    },

    random(){
        let dataset = [];
        for(let i=0 ; i<= this.dataLen; i++){
            let d = Math.floor(Math.random() * 50 );
            dataset.push(d);
        }
        return dataset;
    },

    componentDidMount(){
        this.d3Node = d3.select(ReactDOM.findDOMNode(this));
        this.drawView();
    },

    drawView(){
        const data = this.state.data;
        let svg = this.d3Node.attr('width',this.state.width)
                             .attr('height',this.state.height);
        let xAxisScale = d3.scale.ordinal()
                                 .domain(d3.range(data.length))
                                 .rangeRoundBands([0,500]);
        let yAxisScale = d3.scale.linear()
                                 .domain([0,d3.max(data)])
                                 .range([500,0]);
        var xAxis = d3.svg.axis()
                          .scale(xAxisScale)
                          .orient("bottom");

        var yAxis = d3.svg.axis()
                          .scale(yAxisScale)
                          .orient("left");

        var xScale = d3.scale.ordinal()
                             .domain(d3.range(data.length))
                             .rangeRoundBands([0,500],0.05);

        var yScale = d3.scale.linear()
                             .domain([0,d3.max(data)])
                             .range([0,500]);

        svg.selectAll("rect")
            .data(data)
            .enter()
            .append("rect")
            .on("click",function(d,i){
                d3.select(this)
                    .attr("fill","green");
            })
            .on("mouseover",function(d,i){
                d3.select(this)
                    .attr("fill","yellow");
            })
            .on("mouseout",function(d,i){
                d3.select(this)
                    .transition()
                    .duration(500)
                    .attr("fill","red");
            })
            .attr("x", function(d,i){
                return 30 + xScale(i);
            } )
            .attr("y",function(d,i){
                return 50 + 500 - yScale(d) ;
            })
            .attr("width", function(d,i){
                return xScale.rangeBand();
            })
            .attr("height",yScale)
            .attr("fill","red")
            .transition().duration(2000).ease("bounce")
            .attr("fill","steelblue");

        svg.selectAll("text")
            .data(data)
            .enter().append("text")
            .attr("x", function(d,i){
                return 30 + xScale(i);
            } )
            .attr("y",function(d,i){
                return 50 + 500 - yScale(d) ;
            })
            .attr("dx", function(d,i){
                return xScale.rangeBand()/3;
            })
            .attr("dy", 15)
            .attr("text-anchor", "begin")
            .attr("font-size", 14)
            .attr("fill","white")
            .text(function(d,i){
                return d;
            });

        svg.append("g")
            .attr("class","axis")
            .attr("transform","translate(30,550)")
            .call(xAxis);

        svg.append("g")
            .attr("class","axis")
            .attr("transform","translate(30,50)")
            .call(yAxis);


    },

    changeData(){
        let data = this.random();
        this.setState({data:data});
    },

    render(){
        return (
            <svg>
            </svg>
        );
    }
});

module.exports = RdTest5;