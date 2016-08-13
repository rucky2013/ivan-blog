/**
 * Created by ivan.yu on 2016/8/1.
 */

import React from 'react';
import RdTest1 from './RdTest1';
import d3 from 'd3';

const Home = React.createClass({

    getInitialState:function () {
        const force = d3.layout.force()
                        .gravity(0.3)
                        .charge(-30)
                        .linkDistance((link) => {
                            console.log(link);
                            return 20;
                        });
        const drag = force.drag().on('dragstart', function(d) {
            console.log('drag');
            d3.event.sourceEvent.stopPropagation();
        });
        return{
            force : force,
            drag : drag,
            data : [{ title:"test",radius:40 },{ title:"test1",radius:80 }],
            config : {bonusColor:'blue'},
            selected : false,
            excluded : false,
        };
    },

    componentWillMount(){
    },

    componentDidMount() {
        const svg = d3.select(this.refs.svg);
        const container = d3.select(this.refs.container);
        const zoom = d3.behavior.zoom()
            .scaleExtent([0.1, 10])
            .on('zoom', function() {
                container.attr(
                    'transform',
                    `translate(${d3.event.translate})scale(${d3.event.scale})`
                );
            });
        svg.call(zoom);
        svg.on('contextmenu', () => {
            d3.event.preventDefault();
        });
        console.log(svg);
    },

    handleOnClick:function(e){
        let data = [{ title:"test",radius:40, x:300, y:-400 },{ title:"test1",radius:80,x:-300, y:-400 }];
        this.setState({data:data, selected : true, excluded : true,});
    },

    render:function(){
        return (
            <div style={{ width:'1349px',height:'622px' }} ref="outerDiv">
                <button onClick={ this.handleOnClick }>change Data</button>
                <svg width="100%" height="100%" ref="svg">
                    <g ref='container'>
                        <g>
                        {
                            this.state.data.map((d,index)=>{
                                return(
                                    <RdTest1
                                             key={index}
                                             datum={d}
                                             config={this.state.config}
                                             selected={ this.state.selected }
                                             excluded={ this.state.excluded }
                                             drag={ this.state.drag }
                                    />
                                )
                            })
                        }
                        </g>
                    </g>
                </svg>
            </div>

        )
    }
});

module.exports = Home;

