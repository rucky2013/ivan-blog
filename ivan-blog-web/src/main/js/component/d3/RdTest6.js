/**
 * Created by ivan.yu on 2016/8/2.
 */

import React from 'react';
import ReactDOM from 'react-dom';
import d3 from 'd3';

//饼状图
const RdTest6 = React.createClass({

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

        this.d3Node.attr("width",this.state.width).attr("height",this.state.height);

        let pie = d3.layout.pie();

        let outerRadius = this.state.width / 2;
        let innerRadius = this.state.width / 4;

        let arc = d3.svg.arc().outerRadius(outerRadius).innerRadius(innerRadius);

        let color = d3.scale.category10();

        var arcs = this.d3Node.selectAll("g")
            .data(pie(data))
            .enter()
            .append("g")
            .attr("transform","translate("+outerRadius+","+outerRadius+")");

        arcs.append("path")
            .attr("fill",function(d,i){
                return color(i);
            })
            .attr("d",function(d){
                return arc(d);
            });

        arcs.append("text")
            .attr("transform",function(d){
                return "translate(" + arc.centroid(d) + ")";
            })
            .attr("text-anchor","middle")
            .text(function(d){
                return d.value;
            });

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

module.exports = RdTest6;