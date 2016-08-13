/**
 * Created by ivan.yu on 2016/8/2.
 */

import React from 'react';

const Catalog = React.createClass({

    render:function(){
        return (
            <div style={{'marginLeft': 'auto',marginRight: 'auto'}}>
                <a href="/helloWord">HelloWord</a><br/>
                <a href="/setValue">循环赋值</a><br/>
                <a href="/simpleHistogram">简单柱状图</a><br/>
                <a href="/xyHistogram">简单柱状图</a><br/>
                <a href="/pieView">饼图</a><br/>
                <a href="/forceView">力图</a><br/>
                <a href="/treeView">力图</a><br/>
            </div>
        )
    }
});

module.exports = Catalog;