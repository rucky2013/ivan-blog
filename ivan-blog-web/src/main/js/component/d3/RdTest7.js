/**
 * Created by ivan.yu on 2016/8/2.
 */

import React from 'react';
import ReactDOM from 'react-dom';
import d3 from 'd3';

//饼状图
const RdTest7 = React.createClass({

    d3Node : null,
    dataLen : 15,

    getInitialState(){
        return {
            nodes : [
                { name: "辽宁省"    },
                { name: "沈阳市" },
                { name: "大连市"    },
                { name: "北京市"   },
                { name: "上海市"   },
                { name: "吉林省"    },
                { name: "长春市"    },
                { name: "吉林市"    },
                { name: "湖南省"  },
                { name: "长沙市"       },
                { name: "海南省"  },
                { name: "海口市"       },
                { name: "黑龙江省"    }
            ],
            edges : [
                { source : 0  , target: 1 } ,
                { source : 0  , target: 2 } ,
                { source : 5  , target: 6 } ,
                { source : 5  , target: 7 } ,
                { source : 8  , target: 9 } ,
                { source : 10  , target: 11 } ,
                 ],
            width : 900,
            height  : 600,
        }
    },

    componentDidMount(){
        this.d3Node = d3.select(ReactDOM.findDOMNode(this));
        this.drawView();
    },

    drawView(){
        const nodes = this.state.nodes;
        const edges = this.state.edges;
        var zoom = d3.behavior.zoom()
                            .scaleExtent([0, 10])
                            .on("zoom", zoomed);
        let force = d3.layout.force()
            .nodes(nodes)
            .links(edges)
            .size([this.state.width,this.state.height])
            .charge([-950])
            .linkDistance([70])
            .start();
        this.d3Node.attr("width",this.state.width).attr("height",this.state.height);

        const onMouseClick = function(d){
            console.log(d.name);
        };
        let color = d3.scale.category20();

        let svg_g = this.d3Node.append('g').data(nodes);

        let svg_links = this.d3Node.selectAll('line')
                                .data(edges)
                                .enter()
                                .append("line")
                                .style({"stroke":"#ccc","stroke-width":3}).call(force.drag);
        let svg_nodes = this.d3Node.selectAll("circle")
                                .data(nodes)
                                .enter()
                                .append("circle")
                                .attr("r",(d,i)=>{
                                    for(let edge of edges){
                                        if(edge.target.index == i){
                                            return 30;
                                        }
                                    }
                                    return 40;
                                })
                                .on('click',(d,i)=>{ onMouseClick(d); })
                                .style("fill",(d,i)=>{return color(i)}).call(force.drag);
        let svg_texts = this.d3Node.selectAll('text')
                                .data(nodes)
                                .enter()
                                .append('text')
                                .on('click',(d,i)=>{ onMouseClick(d); })
                                .style('color','red')
                                .attr("text-anchor","middle")
                                .text((d)=>{return d.name}).call(force.drag);

        function zoomed() {
            svg_g.attr("transform",
                "translate(" + d3.event.translate + ")scale(" + d3.event.scale + ")");
        }

        force.on("tick", function(){
            svg_links.attr("x1",function(d){ return d.source.x; });
            svg_links.attr("y1",function(d){ return d.source.y; });
            svg_links.attr("x2",function(d){ return d.target.x; });
            svg_links.attr("y2",function(d){ return d.target.y; });

            svg_nodes.attr("cx",function(d){ return d.x; });
            svg_nodes.attr("cy",function(d){ return d.y; });

            svg_texts.attr("transform",function(d){ return `translate(${d.x},${d.y})`; });
        });

    },

    render(){
        return (
            <svg>
            </svg>
        );
    }
});

module.exports = RdTest7;