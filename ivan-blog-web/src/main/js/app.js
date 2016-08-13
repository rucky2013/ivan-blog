/**
 * Created by yu on 2016/5/17.
 */

import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, Redirect} from 'react-router';

import Home from './component/d3/Home';
import Catalog from './component/d3/Catalog';
import RdTest2 from './component/d3/RdTest2';
import RdTest3 from './component/d3/RdTest3';
import RdTest4 from './component/d3/RdTest4';
import RdTest5 from './component/d3/RdTest5';
import RdTest6 from './component/d3/RdTest6';
import RdTest7 from './component/d3/RdTest7';
import RdTest8 from './component/d3/RdTest8';

import BlogHome from './component/blog/BlogHome';

require('./assets/js/init.js');

require('./assets/d3/style.css');
require('./assets/css/skel.css');
require('./assets/css/style.css');
require('./assets/css/style-xlarge.css');
require('./assets/antd/index.css');

const createBrowserHistory = require('history/lib/createBrowserHistory');
const history = createBrowserHistory();

ReactDOM.render(
	<Router history={history}>
		<Route path="index" name="目录" component={Catalog}/>
		<Route path="home" name="博客首页" component={Home}/>
		<Route path="helloWord" name="d3-HelloWord" component={RdTest2}/>
		<Route path="setValue" name="d3-循环赋值" component={RdTest3}/>
		<Route path="simpleHistogram" name="d3-简单柱状图" component={RdTest4}/>
		<Route path="xyHistogram" name="d3-xy柱状图" component={RdTest5}/>
		<Route path="pieView" name="d3-饼图" component={RdTest6}/>
		<Route path="forceView" name="d3-力图" component={RdTest7}/>
		<Route path="treeView" name="d3-树状图" component={RdTest8}/>
	</Router>,
	document.getElementById('app')
	);
