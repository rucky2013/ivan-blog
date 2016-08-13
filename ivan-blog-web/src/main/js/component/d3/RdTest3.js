/**
 * Created by ivan.yu on 2016/8/2.
 */

import React from 'react';
import ReactDOM from 'react-dom';
import d3 from 'd3';

const RdTest3 = React.createClass({

    d3Node : null,

    componentDidMount(){
        let data = ["I like dog","I like cat","I like snake"];
        this.d3Node = d3.select(ReactDOM.findDOMNode(this));
        this.d3Node.selectAll('p')
            .data(data)
            .text((d,index)=>{return d})
            .style({"font-size":'72px','color':'red'});
    },

    delP4(e){
        d3.select(ReactDOM.findDOMNode(this.refs.p4)).remove();
    },

    addP4(e){
         this.d3Node.append('p').text('Hello World 4').attr('ref',"p4");
    },

    render(){
        return (
            <g>
                <button onClick={this.delP4}>删除“Hello World 4”</button>
                <button onClick={this.addP4}>添加“Hello World 4”</button>
                <p>Hello World 1</p>
                <p>Hello World 2</p>
                <p>Hello World 3</p>
                <p ref="p4">Hello World 4</p>
            </g>
        );
    }
});

module.exports = RdTest3;