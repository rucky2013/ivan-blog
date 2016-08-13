/**
 * Created by ivan.yu on 2016/8/2.
 */

import React from 'react';
import ReactDOM from 'react-dom';
import d3 from 'd3';

//饼状图
const RdTest8 = React.createClass({

    d3Node : null,
    svg : null,
    tree : null,
    diagonal : null,
    dataLen : 15,

    getInitialState(){
        return {
            data :{
                "name":"中国",
                "children":
                    [
                        {
                            "name":"浙江" ,
                            "children":
                                [
                                    {"name":"杭州" },
                                    {"name":"宁波" },
                                    {"name":"温州" },
                                    {"name":"绍兴" }
                                ]
                        },

                        {
                            "name":"广西" ,
                            "children":
                                [
                                    {
                                        "name":"桂林",
                                        "children":
                                            [
                                                {"name":"秀峰区"},
                                                {"name":"叠彩区"},
                                                {"name":"象山区"},
                                                {"name":"七星区"}
                                            ]
                                    },
                                    {"name":"南宁"},
                                    {"name":"柳州"},
                                    {"name":"防城港"}
                                ]
                        },

                        {
                            "name":"黑龙江",
                            "children":
                                [
                                    {"name":"哈尔滨"},
                                    {"name":"齐齐哈尔"},
                                    {"name":"牡丹江"},
                                    {"name":"大庆"}
                                ]
                        },

                        {
                            "name":"新疆" ,
                            "children":
                                [
                                    {"name":"乌鲁木齐"},
                                    {"name":"克拉玛依"},
                                    {"name":"吐鲁番"},
                                    {"name":"哈密"}
                                ]
                        }
                    ]
            },
            width : 500,
            height  : 500,
        }
    },

    componentDidMount(){
        this.d3Node = d3.select(ReactDOM.findDOMNode(this));
        const data = this.state.data;
        const width = this.state.width;
        const height = this.state.height;

        //边界空白
        var padding = {left: 80, right:50, top: 20, bottom: 20 };

        this.svg = d3.select("svg")
            .attr("width", width + padding.left + padding.right)
            .attr("height", height + padding.top + padding.bottom)
            .append("g")
            .attr("transform","translate("+ padding.left + "," + padding.top + ")");

        //树状图布局
        this.tree = d3.layout.tree()
            .size([height, width]);

        //对角线生成器
        this.diagonal = d3.svg.diagonal()
            .projection(function(d) { return [d.y, d.x]; });
        //给第一个节点添加初始坐标x0和x1
        data.x0 = height / 2;
        data.y0 = 0;

        //以第一个节点为起始节点，重绘
        this.redraw(data);
        //this.drawView();
    },

    drawView(){
        const data = this.state.data;
        const width = this.state.width;
        const height = this.state.height;

        let svg = d3.select('svg').attr("width",width).attr("height",height).append("g").attr("transform","translate(40,0)");

        let tree = d3.layout.tree().size([width, height-200])
            .separation(function(a, b) { return (a.parent == b.parent ? 1 : 2) / a.depth; });

        let diagonal = d3.svg.diagonal().projection((d)=>{
            return [d.y, d.x];
        });

        let nodes = tree.nodes(data);
        let links = tree.links(nodes);

        let link = svg.selectAll(".link")
                    .data(links)
                    .enter()
                    .append('path')
                    .attr("class","link")
                    .attr("d", diagonal);


        let node = svg.selectAll(".node")
                    .data(nodes)
                    .enter()
                    .append("g")
                    .attr("class","node")
                    .attr("transform",(d)=>{
                        return "translate("+ d.y +","+d.x+")";
                    });


        node.append("circle").attr("r",4.5);

        node.append("text").attr("dx",(d)=>{return d.chilren ? -8 : 8})
                    .attr("dy",3)
                    .style("text-anchor",(d)=>{return d.childre ? "end" : "start"})
                    .text((d)=>{return d.name});


    },

    redraw:function(source){

        const toggle = function(d){
            if(d.children){
                //如果有子节点
                d._children = d.children; //将该子节点保存到 _children
                d.children = null;  //将子节点设置为null

            }else{
                //如果没有子节点
                d.children = d._children; //从 _children 取回原来的子节点
                d._children = null; //将 _children 设置为 null
            }
        };

        const redraw1 = function(source){
            if(source.parent){
                this.redraw(source.parent);
            }else{
                this.redraw(source);
            }

        }.bind(this);

        let tree = this.tree;
        let svg = this.svg;
        let diagonal = this.diagonal;
        /*
         （1） 计算节点和连线的位置
         */

        //应用布局，计算节点和连线
        var nodes = tree.nodes(source);
        var links = tree.links(nodes);

        //重新计算节点的y坐标
        nodes.forEach(function(d) { d.y = d.depth * 180; });

        /*
         （2） 节点的处理
         */

        //获取节点的update部分
        var nodeUpdate = svg.selectAll(".node")
            .data(nodes, function(d){ return d.name; });

        //获取节点的enter部分
        var nodeEnter = nodeUpdate.enter();

        //获取节点的exit部分
        var nodeExit = nodeUpdate.exit();

        //1. 节点的 Enter 部分的处理办法
        var enterNodes = nodeEnter.append("g")
            .attr("class","node")
            .attr("transform", function(d) {
                let x = 0,y=0;
                x = d.parent ? d.parent.y : d.y;
                y = d.parent ? d.parent.x : d.x;
                return "translate(" + x + "," + y + ")";
            });

        enterNodes.append("circle")
            .attr("r", 0)
            .style("fill", function(d) { return d._children ? "lightsteelblue" : "#fff"; })
            .on("click", function(d) {
                toggle(d); redraw1(source);
            })
            .on("dblclick",function(d,index){
                console.log(d);
                let children = [];
                children =  d.children ? d.children : [];
                let newChild = {"name":"新建文件夹" + index};
                children.push(newChild);
                d.children = children;
                redraw1(source);
            });

        enterNodes.append("text")
            .attr("x", function(d) { return d.children || d._children ? -14 : 14; })
            .attr("dy", ".35em")
            .attr("class",(d,index)=>{return 'text' + index})
            .attr("text-anchor", function(d) { return d.children || d._children ? "end" : "start"; })
            .text(function(d) { return d.name; })
            .style("fill-opacity", 0)
            .on('dblclick',function(d,index){
                d3.select("text.text" + index).style("display","none");
                console.log(d);
            });

        enterNodes.append("input")
            .attr("x", function(d) { return d.children || d._children ? -14 : 14; })
            .attr("dy", ".35em")
            .attr("class",(d,index)=>{return 'input' + index})
            .attr("text-anchor", function(d) { return d.children || d._children ? "end" : "start"; })
            .text(function(d) { return d.name; })
            .style("fill-opacity", 0)
            .on('dblclick',function(d,index){
                d3.select("text.text" + index).style("display","none");
                console.log(d);
            });


        //2. 节点的 Update 部分的处理办法
        var updateNodes = nodeUpdate.transition()
            .duration(500)
            .attr("transform", function(d) {
                return "translate(" + d.y + "," + d.x + ")";
            });

        updateNodes.select("circle")
            .attr("r", 8)
            .style("fill", function(d) { return d._children ? "lightsteelblue" : "#fff"; });

        updateNodes.select("text")
            .style("fill-opacity", 1);

        //3. 节点的 Exit 部分的处理办法
        var exitNodes = nodeExit.transition()
            .duration(500)
            .attr("transform", function(d) {
                return "translate(" + d.parent.y + "," + d.parent.x + ")";
            })
            .remove();

        exitNodes.select("circle")
            .attr("r", 0);

        exitNodes.select("text")
            .style("fill-opacity", 0);

        /*
         （3） 连线的处理
         */

        //获取连线的update部分
        var linkUpdate = svg.selectAll(".link")
            .data(links, function(d){ return d.target.name; });

        //获取连线的enter部分
        var linkEnter = linkUpdate.enter();

        //获取连线的exit部分
        var linkExit = linkUpdate.exit();

        //1. 连线的 Enter 部分的处理办法
        linkEnter.insert("path",".node")
            .attr("class", "link")
            .attr("d", function(d) {
                var o = {x: d.source.x, y: d.source.y};
                return diagonal({source: o, target: o});
            })
            .transition()
            .duration(500)
            .attr("d", diagonal);

        //2. 连线的 Update 部分的处理办法
        linkUpdate.transition()
            .duration(500)
            .attr("d", diagonal);

        //3. 连线的 Exit 部分的处理办法
        linkExit.transition()
            .duration(500)
            .attr("d", function(d) {
                var o = {x: d.source.x, y: d.source.y};
                return diagonal({source: o, target: o});
            })
            .remove();


        /*
         （4） 将当前的节点坐标保存在变量x0、y0里，以备更新时使用
         */
        nodes.forEach(function(d) {
            d.x0 = d.x;
            d.y0 = d.y;
        });
    },

    render(){
            return (
                <svg>
                </svg>
            );
        }
    });

module.exports = RdTest8;