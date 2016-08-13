/**
 * Created by ivan.yu on 2016/8/2.
 */

import React from 'react';
import ReactDOM from 'react-dom';
import d3 from 'd3';

const RdTest2 = React.createClass({

    d3Node : null,

    componentDidMount(){
        this.d3Node = d3.select(ReactDOM.findDOMNode(this));
        this.d3Node.selectAll('p').text('ivan yu').style({"font-size":'72px','color':'red'});
    },

    render(){
        return (
            <g>
                <p>Hello World 1</p>
                <p>Hello World 2</p>
            </g>
        );
    }
});

module.exports = RdTest2;