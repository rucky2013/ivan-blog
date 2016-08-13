/**
 * Created by ivan.yu on 2016/8/2.
 **/

import React from 'react';
import ReactDOM from 'react-dom';
import d3 from 'd3';

const RdTest1 = React.createClass({

    d3Node : null,

    componentDidMount(){
        this.d3Node = d3.select(ReactDOM.findDOMNode(this));
        this.d3Node.datum(this.props.datum).call(this.props.drag);
        this.enterVisual();
    },

    componentDidUpdate(prevProps, prevState){
        this.updateVisual();
    },

    callBack:function(arg){
        console.log(`callback`,arg);
    },

    enterVisual:function(){
        const props = this.props;
        const datum = props.datum;

        const onMouseClick = function () {
            d3.event.stopPropagation();
            if (props.selected || d3.event.defaultPrevented) return; // 忽略已选中的和拖拽时的点击
            //props.onBonusSelect(datum, d3.event.currentTarget);
        }

        const onMouseDbClick = function() {
            console.log(1);
        }

        this.d3Node.style('cursor', 'pointer')
            .on('click', onMouseClick)
            .on('dblclick', onMouseDbClick)
            .on('contextmenu', () => {  d3.event.preventDefault() });

        this.d3Node.select('circle')
            .on('click', onMouseClick)
            .on('dblclick', onMouseDbClick)
            .on('contextmenu', () => {  d3.event.preventDefault() })
            .style({
                fill: 'red',
                'fill-opacity': 0.6,
                stroke:'black',
                strokeWidth:'10',
            })
            .attr('r', datum.radius);

        this.d3Node.select('text')
                   .text(datum.title);
    },

    updateVisual() {
        const datum = this.props.datum;
        console.log('update ',datum);

        let circle = this.d3Node.select('circle');
        //circle.attr('transform', `translate(200, -200)`);
        if (this.props.selected) {
            circle.transition().duration(2000)
                .style({
                    fill:'MistyRose',
                    'fill-opacity': 1,
                    stroke: 'red'
                }).attr('transform', `translate(${datum.x}, ${datum.y})`);
        } else {
            circle.style({
                'fill-opacity': 0.6,
                stroke: 'coral'
            });
        }

        if (this.props.excluded) {
            circle.style({
                fill: 'url(#bg-pattern-stripe-bonus)'
            });
        } else {
            circle.style({
                fill: 'blue'
            });
        }

    },

    render() {
        return (
            <g>
                <circle
                    cx={500}
                    cy={500}
                    r={0}/>
            </g>
        );
    }
});

module.exports = RdTest1;